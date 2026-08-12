# ridego.ee

Статический сайт. Всё, что лежит в `public/`, автоматически уезжает на хостинг zone.ee
при каждом пуше в ветку `main` (см. [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

```
public/          <- содержимое сайта = корень htdocs на хостинге
.github/workflows/deploy.yml
```

Локально смотреть: открой `public/index.html` в браузере, либо `npx serve public`.

## Как работает деплой

`push` в `main` → GitHub Actions → `rsync -rlvz --delete public/ → htdocs/` по SSH.

`--delete` означает, что **хостинг становится точной копией `public/`**: файлы, которых
нет в репозитории, на сервере удаляются. Исключения: `.well-known/` (ACME/Let's Encrypt)
и `.git*`.

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

## Разовая настройка

### 1. SSH-ключ в панели Zone

Пара ключей создана локально: `~/.ssh/ridego_deploy` (приватный) и `~/.ssh/ridego_deploy.pub`.

1. [my.zone.eu](https://my.zone.eu) → веб-хостинг `ridego.ee` → **SSH** → публичные ключи.
2. Вставь содержимое `ridego_deploy.pub`, сохрани. Ключ появляется на сервере в течение ~10 минут.
3. Если включён IP Whitelist — нужно разрешить доступ отовсюду, т.к. GitHub Actions
   работает с меняющихся IP.

Проверка (должно вывести `CONNECTED`):

```powershell
ssh -i $env:USERPROFILE\.ssh\ridego_deploy virt150152@ridego-ee.vserver.zonevs.eu "echo CONNECTED; which rsync"
```

### 2. Secrets в GitHub

`Settings → Secrets and variables → Actions → New repository secret`

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
