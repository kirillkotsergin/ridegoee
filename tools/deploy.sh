#!/usr/bin/env bash
# Выкладка ridego.ee на zone.ee по SSH, в обход GitHub Actions.
#
# Actions по-прежнему выкладывает каждый push в main (rsync --delete, см.
# CLAUDE.md, раздел 4). Этот скрипт — ручной путь: когда нужно выложить
# сразу, не дожидаясь прогона, или когда Actions сломан.
#
# Запуск:
#   bash tools/deploy.sh             # собрать и выложить
#   bash tools/deploy.sh --no-build  # выложить уже собранный dist/
#
# Требуется ssh, tar, curl и npm (rsync под Windows нет, на сервере есть).

set -euo pipefail

KEY="$HOME/.ssh/ridego_deploy"
USER="virt150152"
HOST="ridego-ee.vserver.zonevs.eu"
REMOTE="/data01/virt150152/domeenid/www.ridego.ee/htdocs"
SSH=(ssh -i "$KEY" -o BatchMode=yes -o ConnectTimeout=20 "$USER@$HOST")
SITE="https://ridego.ee"

# Адреса, которые после выкладки обязаны отдавать 200: все русские страницы
# и все переводы из dist/ добавляются сами, здесь — то, чего в карте нет.
EXTRA_PATHS=("/sitemap.xml" "/robots.txt" "/llms.txt" "/favicon.ico" "/hits.php" "/styles.css")

cd "$(dirname "$0")/.."

DO_BUILD=1
for arg in "$@"; do
  case "$arg" in
    --no-build) DO_BUILD=0 ;;
    *) echo "неизвестный ключ: $arg (есть --no-build)"; exit 1 ;;
  esac
done

if [ "$DO_BUILD" -eq 1 ]; then
  echo "▸ сборка"
  export PATH="/c/Program Files/nodejs:$PATH"
  npm run build >/dev/null
fi

# Те же проверки, что шаг «Check build output» в deploy.yml: неполную сборку
# не выкладываем, на сервере уже лежит рабочий сайт.
echo "▸ проверка dist/"
for f in index.html .htaccess hits.php transfer-tallinn-narva/index.html en/transfer-tallinn-narva/index.html; do
  [ -s "dist/$f" ] || { echo "  в dist/ нет $f — не выкладываю"; exit 1; }
done
SRC=$(find public -type f | wc -l)
OUT=$(find dist -type f | wc -l)
[ "$OUT" -ge "$SRC" ] || { echo "  в dist/ $OUT файлов, в public/ $SRC — не выкладываю"; exit 1; }
echo "  файлов к выкладке: $OUT"

# tar, а не rsync: локального rsync нет. Точка в «-C dist -cf - .» обязательна,
# иначе не уедут .htaccess и другие файлы с точкой. -m гасит «timestamp in the
# future» — часы сервера отстают.
#
# Лишнее на сервере НЕ удаляется. Удаляет только Actions (rsync --delete);
# hits.json лежит уровнем выше htdocs и не задет ни тем, ни другим.
echo "▸ отправка"
tar -C dist -cf - . 2>/dev/null | "${SSH[@]}" "cd '$REMOTE' && tar -xmf -"

echo "▸ проверка живого сайта"
failed=0
mapfile -t PAGES < <(find dist -name index.html | sed -e 's#^dist##' -e 's#index\.html$##' | sort)
for p in "${PAGES[@]}" "${EXTRA_PATHS[@]}"; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 25 "$SITE$p" || echo 000)
  printf '  %-40s %s\n' "$p" "$code"
  [ "$code" = "200" ] || failed=1
done

if [ "$failed" -eq 0 ]; then echo "▸ готово"; else echo "▸ выложено, но не все адреса отдают 200"; exit 1; fi
