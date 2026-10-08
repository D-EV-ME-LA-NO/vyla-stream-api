# Vyla Stream API على Cloudflare Workers

هذه نسخة Cloudflare Worker من SDK الموجود في مستودع Vyla. تُرجع مصادر التشغيل بصيغة JSON، وبعض المصادر تُرجع روابط HLS (`m3u8`) مباشرة مع الرؤوس المطلوبة.

## الترخيص

المصدر الأصلي مرخّص تحت **CC BY-NC 4.0**. أبقِ نسبة المؤلفين، ولا تستخدم هذه النسخة تجاريًا إلا بعد الحصول على إذن مناسب. راجع `LICENSE` في المستودع الأصلي قبل النشر.

## النشر عبر Wrangler

```bash
npm install
npx wrangler login
npx wrangler secret put API_TOKEN
# اختياري، مطلوب فقط للمصادر التي تحتاج TMDB:
npx wrangler secret put TMDB_API_KEY
npx wrangler deploy
```

## إعدادات Dashboard

من Worker > Settings > Variables and Secrets أضف Secrets:

- `API_TOKEN`: رمز حماية API.
- `TMDB_API_KEY`: مفتاح TMDB اختياري، ويُفضّل أن يكون Secret.

## المسارات

### فحص الصحة

```http
GET /health
```

### قائمة المصادر

```http
GET /sources
Authorization: Bearer YOUR_API_TOKEN
```

### فيلم

```http
GET /stream?id=533535&type=movie
Authorization: Bearer YOUR_API_TOKEN
```

### مسلسل

```http
GET /stream?id=1399&type=tv&season=1&episode=1
Authorization: Bearer YOUR_API_TOKEN
```

### مصدر واحد

```http
GET /stream?id=533535&type=movie&source=vidrock
Authorization: Bearer YOUR_API_TOKEN
```

الرد يحتوي على `success_count` و`results`. كل نتيجة ناجحة قد تحتوي `url` أو `streams` بحسب المصدر، مع `type` مثل `hls` أو `mp4` و`headers` اللازمة للمشغل.

## ملاحظات Cloudflare

- تم تفعيل `nodejs_compat` لأن بعض المصادر تستخدم `node:crypto`.
- تم إزالة المؤقت العام من أدوات الذاكرة المؤقتة لأن Workers يمنع `setInterval` في النطاق العام.
- الفحص الكلي يعمل على دفعات من 6 مصادر لتقليل ضغط الطلبات.
- روابط البث الخارجية مؤقتة وقد تنتهي أو تتطلب الرؤوس المرفقة معها.
- لا تضع `API_TOKEN` داخل الكود أو `wrangler.toml`.
