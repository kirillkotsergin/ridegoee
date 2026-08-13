# ridego.ee

Одностраничный сайт услуги трансфера из Таллинна к погранпереходам с Россией
(Нарва, Койдула, Лухамаа). Статика без сборки: всё, что лежит в `public/`,
автоматически уезжает на хостинг zone.ee при каждом пуше в `main`
(см. [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

```
public/
  index.html                    вся страница
  404.html                      страница «не найдено»
  styles.css                    оформление
  script.js                     анимации появления, модалка заказа
  .htaccess                     кеширование, сжатие, заголовки безопасности, www → без www
  robots.txt                    открыт для индексации, ссылка на sitemap
  sitemap.xml                   один URL — сайт одностраничный
  site.webmanifest              имя и иконки для «добавить на главный экран»
  favicon.svg                   иконка в табе
  favicon.ico                   то же для старых браузеров (16+32+48 в одном файле)
  apple-touch-icon.png          иконка для iOS (180×180)
  icon-192.png, icon-512.png    иконки для манифеста
  images/
    og.png                      превью ссылки в WhatsApp/Telegram (1200×630)
    car-illustration.svg        рисунок машины (заглушка вместо фото)
    corolla.jpg                 <- ПОЛОЖИ СЮДА реальное фото (файла пока нет)

tools/
  make-icons.ps1                перерисовывает favicon.ico, иконки и og.png
```

Растровые иконки и `og.png` собраны скриптом, а не руками. Поменял цвета или текст
превью — перегенерируй:

```powershell
powershell -ExecutionPolicy Bypass -File tools\make-icons.ps1
```

Файл скрипта должен лежать в UTF-8 **с BOM**, иначе Windows PowerShell 5.1 прочитает
русский текст как мусор.

Локально смотреть: открой `public/index.html` в браузере, либо `npx serve public`.

## Что где менять

| Что | Где |
|---|---|
| Цены, время, расстояния | `public/index.html`, секция `<section id="routes">` |
| Номер телефона | `public/index.html` (несколько мест) + `PHONE` в начале `public/script.js` |
| Тексты FAQ | `public/index.html`, секция `<section id="faq">` |
| Характеристики авто | `public/index.html`, список `<ul class="specs">` |
| Цвета | `public/styles.css`, блок `:root` — `--accent`, `--bg` и остальные |
| Текст превью в мессенджерах | `tools/make-icons.ps1`, блок «og.png», затем перегенерировать |
| Разметка для поисковиков | `public/index.html`, `<script type="application/ld+json">` в конце `<body>` — держать в согласии с ценами и FAQ на странице |
| Кеширование и заголовки | `public/.htaccess` |

В HTML стоят комментарии `<!-- ПРОВЕРЬ ... -->` в местах, где я написал текст
по своему усмотрению: условия оплаты, багаж, детское кресло, порядок на границе.

### Фото автомобиля

Положи фото в `public/images/corolla.jpg` — оно появится само, ничего править не нужно.
Пока файла нет, на его месте показывается SVG-рисунок: в CSS фото стоит верхним слоем
фона, а иллюстрация — нижним, так что отсутствующий файл просто открывает вид на рисунок.

Хорошее фото: горизонтальное, пропорции ближе к 4:3, ширина 1600 px и больше,
сжатое до ~300 КБ.

### Заказ через WhatsApp / Telegram

Кнопки с номером открывают окно с выбором: WhatsApp, Telegram или звонок.
При заказе с карточки направления в WhatsApp подставляется готовый текст
(«Хочу заказать трансфер по направлению Таллинн — Нарва»).

Telegram-ссылка сделана по номеру: `https://t.me/+37256277764`. Если у аккаунта есть
короткое имя, надёжнее заменить её на `https://t.me/имя_аккаунта`.

## Данные хостинга

Из панели Zone → веб-хостинг → «Данные сервера»:

| Что | Значение |
|---|---|
| Пользователь | `virt150152` |
| Хост для SSH | `ridego-ee.vserver.zonevs.eu` (он же `217.146.69.26`) |
| Порт SSH | **22** |
| DocumentRoot | `/data01/virt150152/domeenid/www.ridego.ee/htdocs` |
| IP для A-записи | `217.146.69.26` |
| Временный домен | `ridego-ee.vserver.zonevs.eu` — сайт виден по нему, пока нет DNS |

## Как работает деплой

`push` в `main` → GitHub Actions → `rsync -rlvz --delete public/ → htdocs/` по SSH.

`--delete` означает, что **хостинг становится точной копией `public/`**: файлы, которых
нет в репозитории, на сервере удаляются. Исключения: `.well-known/` (ACME/Let's Encrypt)
и `.git*`.

Перед копированием workflow проверяет предпосылки по очереди и говорит, что именно не так:
заданы ли четыре секрета → похож ли `ZONE_SSH_PRIVATE_KEY` на ключ → отдаёт ли хост
свой ключ (`ssh-keyscan`; пусто обычно значит IP Whitelist в панели Zone) → пускает ли
SSH и доступен ли `htdocs` на запись. После копирования дёргает https://ridego.ee/ и
падает, если пришёл не `200` или в HTML нет строки `RideGo`. Валидность сертификата
проверяется отдельно и деплой не блокирует — только предупреждение.

## Разовая настройка

### 1. SSH-ключ в панели Zone

Пара ключей лежит локально: `~/.ssh/ridego_deploy` (приватный) и `~/.ssh/ridego_deploy.pub`.

1. [my.zone.eu](https://my.zone.eu) → веб-хостинг `ridego.ee` → **SSH** → публичные ключи.
2. Вставь содержимое `ridego_deploy.pub`, сохрани. Ключ появляется на сервере в течение ~10 минут.
3. Если включён IP Whitelist — нужно разрешить доступ отовсюду: GitHub Actions работает
   с меняющихся IP.

Проверка (должно вывести `CONNECTED`):

```powershell
ssh -i $env:USERPROFILE\.ssh\ridego_deploy virt150152@ridego-ee.vserver.zonevs.eu "echo CONNECTED; which rsync"
```

### 2. Secrets в GitHub

`Settings → Secrets and variables → Actions`

| Имя | Значение |
|---|---|
| `ZONE_SSH_PRIVATE_KEY` | всё содержимое `~/.ssh/ridego_deploy`, включая строки `-----BEGIN/END OPENSSH PRIVATE KEY-----` |
| `ZONE_SSH_USER` | `virt150152` |
| `ZONE_SSH_HOST` | `ridego-ee.vserver.zonevs.eu` |
| `ZONE_REMOTE_PATH` | `/data01/virt150152/domeenid/www.ridego.ee/htdocs` |

Variable `ZONE_SSH_PORT` задавать не нужно — по умолчанию `22`.

### 3. Домен — сделано

`A`-записи есть на обоих именах: `ridego.ee` и `www.ridego.ee` → `217.146.69.26`.
Проверка:

```powershell
Resolve-DnsName ridego.ee -Type A
Resolve-DnsName www.ridego.ee -Type A
```

### 4. SSL — сделано

На домене стоит Let's Encrypt на оба имени, срок до 10.11.2026, автопродление
настроено (cron четыре раза в сутки, письмо приходит только при сбое).
Бесплатный сертификат Zone здесь не используется: его нельзя заказать через API,
а в панели он висел в статусе `waiting`. Вместо него `acme.sh` в домашнем каталоге
сервера выпускает сертификат через DNS-01 и ставит его на хостинг через Zone API.

Подробности — в [CLAUDE.md](CLAUDE.md), раздел «Сертификат и автопродление».
Главное, что нужно помнить: **API-токен Zone лежит в `~/.acme.sh/account.conf`
на сервере, и от него зависит автопродление** — отзывать его нельзя.

### 5. Zone API

Многое в панели найти трудно, поэтому DNS, сертификаты и cron проще менять через
API: `https://api.zone.eu/v2`, HTTP Basic `логин_ZoneID:токен`. Список нужных
эндпоинтов — в [CLAUDE.md](CLAUDE.md), раздел «Zone API v2».
