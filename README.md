# ridego.ee

Одностраничный сайт услуги трансфера из Таллинна к погранпереходам с Россией
(Нарва, Койдула, Лухамаа). Статика без сборки: всё, что лежит в `public/`,
автоматически уезжает на хостинг zone.ee при каждом пуше в `main`
(см. [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

```
public/
  index.html                    вся страница
  styles.css                    оформление
  script.js                     анимации появления, модалка заказа
  favicon.svg                   иконка в табе
  images/
    car-illustration.svg        рисунок машины (заглушка вместо фото)
    corolla.jpg                 <- ПОЛОЖИ СЮДА реальное фото (файла пока нет)
```

Локально смотреть: открой `public/index.html` в браузере, либо `npx serve public`.

## Что где менять

| Что | Где |
|---|---|
| Цены, время, расстояния | `public/index.html`, секция `<section id="routes">` |
| Номер телефона | `public/index.html` (несколько мест) + `PHONE` в начале `public/script.js` |
| Тексты FAQ | `public/index.html`, секция `<section id="faq">` |
| Характеристики авто | `public/index.html`, список `<ul class="specs">` |
| Цвета | `public/styles.css`, блок `:root` — `--accent`, `--bg` и остальные |

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

Telegram-ссылка сделана по номеру: `https://t.me/+37253874330`. Если у аккаунта есть
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

### 3. Домен

У `ridego.ee` нет A-записи, поэтому домен не открывается. В панели: домен `ridego.ee`
→ DNS → добавить две записи типа `A` со значением `217.146.69.26`: одну с пустым именем,
вторую с именем `www`. Проверка:

```powershell
Resolve-DnsName ridego.ee -Type A
```

Пока DNS не настроен, результат деплоя виден по адресу https://ridego-ee.vserver.zonevs.eu

### 4. SSL

После появления A-записи включи в панели хостинга бесплатный сертификат Let's Encrypt.
