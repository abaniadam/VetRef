# VetRef — پروژه آمادهٔ اندروید (Capacitor)

اپ شما (`www/index.html`) بدون تغییر منطق، داخل یک پروژهٔ Capacitor قرار گرفته است.
تنها تغییر: لینک Google Fonts با فونت محلی (`www/fonts`) جایگزین شد تا اپ آفلاین هم کار کند.

## پیش‌نیاز
- Node.js 18+ ، JDK 17+ ، Android Studio (برای SDK)

## مراحل ساخت
```bash
npm install
npm run font            # فونت وزیرمتن را داخل اپ می‌گذارد (آفلاین)
npx cap add android     # پوشهٔ android ساخته می‌شود
npm run icons           # آیکن لانچر از resources/icon-192.png
npx cap sync android
npx cap open android    # باز شدن در Android Studio  → Run
```
APK آزمایشی بدون Android Studio:
```bash
cd android && ./gradlew assembleDebug
# خروجی: android/app/build/outputs/apk/debug/app-debug.apk
```

## انتشار (Google Play / Bazaar / Myket)
1. ساخت کلید: `keytool -genkey -v -keystore vetref.jks -keyalg RSA -keysize 2048 -validity 10000 -alias vetref` (آن را نگه دارید و گم نکنید).
2. در Android Studio: Build ▸ Generate Signed Bundle / APK (برای Play: AAB، برای بازارهای ایرانی: APK).
3. `appId` در `capacitor.config.json` (فعلاً `com.vetref.app`) را قبل از انتشار نهایی کنید؛ بعداً قابل تغییر نیست.

## نکته‌ها
- داده‌های ویرایش‌شدهٔ کاربر در `localStorage` (کلید `vsx`) ذخیره می‌شود و در WebView اندروید ماندگار است.
- بعد از هر تغییر در `www/index.html` فقط `npx cap sync android` را اجرا کنید.
