# Cloudflare Configuration

## Disable Cloudflare Insights (Web Analytics)

Cloudflare Insights автоматически добавляет скрипт `beacon.min.js` на все страницы. Чтобы отключить:

### Шаги:

1. Войдите в [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Выберите ваш домен `itswap.fun`
3. Перейдите в **Speed** → **Optimization**
4. Найдите секцию **Web Analytics**
5. Отключите переключатель **Auto Inject Web Analytics**

### Альтернативный способ:

1. В Cloudflare Dashboard перейдите в **Analytics & Logs**
2. Выберите **Web Analytics**
3. Нажмите на настройки сайта
4. Отключите **Automatic Installation**

После отключения ошибки `ERR_BLOCKED_BY_CLIENT` для `beacon.min.js` исчезнут.

## Другие рекомендуемые настройки Cloudflare:

### Security
- **SSL/TLS Mode**: Full (Strict)
- **Always Use HTTPS**: Enabled
- **Automatic HTTPS Rewrites**: Enabled

### Speed
- **Auto Minify**: Enable JavaScript, CSS, HTML
- **Brotli**: Enabled
- **Early Hints**: Enabled

### Caching
- **Browser Cache TTL**: 4 hours (для частых обновлений)
- **Development Mode**: Отключить в production

### Page Rules (опционально)
Создайте правило для API endpoints:
- URL: `itswap.fun/api/*`
- Settings: Cache Level = Bypass
