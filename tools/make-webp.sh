#!/bin/sh
# ============================================================
# RideGo — генератор WebP-копий фотографий
#
# Зачем: .htaccess отдаёт браузеру file.webp вместо file.jpg, если браузер
# прислал Accept: image/webp и .webp лежит рядом. Разметку это не трогает,
# но файлы нужно создать — этим и занимается скрипт.
#
# Где запускать: на хостинге zone.ee — там есть cwebp. Локально под Windows
# его нет, поэтому порядок такой:
#
#   ssh virt150152@ridego.ee 'sh -s' < tools/make-webp.sh
#   ssh virt150152@ridego.ee 'tar -C ~/tmp/webp -cf - .' | tar -xf - -C public/images
#   git add public/images/*.webp && git commit && git push
#
# ВАЖНО: og.png и иконки (favicon, apple-touch-icon, icon-192/512) в список
# намеренно не входят. Соцсети и iOS ждут именно PNG, а правило в .htaccess
# срабатывает только при наличии .webp — так что отсутствие файла и есть
# защита от подмены.
#
# Качество 80 подобрано по месту: на фото машины даёт минус 25–44 % веса,
# на портрете — до 75 %. Ниже 75 на кузове появляется заметная «грязь».
# ============================================================

set -e

SRC="${1:-/data01/virt150152/domeenid/www.ridego.ee/htdocs/images}"
OUT="${2:-$HOME/tmp/webp}"
QUALITY=80

FILES="car-1.jpg car-2.jpg car-3.jpg driver-kirill.jpg driver-kirill-full.jpg"

command -v cwebp >/dev/null 2>&1 || {
  echo "cwebp не найден. На zone.ee он есть; локально под Windows — нет." >&2
  exit 1
}

rm -rf "$OUT"
mkdir -p "$OUT"

printf '%-26s %10s %10s %9s\n' файл jpeg webp экономия
for f in $FILES; do
  [ -f "$SRC/$f" ] || { echo "нет файла $SRC/$f" >&2; exit 1; }
  base=$(basename "$f" .jpg)
  # -m 6 — самый медленный и самый плотный режим сжатия,
  # -sharp_yuv убирает грязь на контрастных краях (кузов на фоне неба).
  cwebp -quiet -q "$QUALITY" -m 6 -sharp_yuv "$SRC/$f" -o "$OUT/$base.webp"

  j=$(stat -c%s "$SRC/$f")
  w=$(stat -c%s "$OUT/$base.webp")
  printf '%-26s %9sК %9sК %8s%%\n' "$f" "$((j / 1024))" "$((w / 1024))" "$((100 - w * 100 / j))"
done

echo
echo "готово, файлы в $OUT"
