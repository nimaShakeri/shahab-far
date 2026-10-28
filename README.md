# Shahab Far Toos Website | وب‌سایت شهاب فر طوس

A React + Vite company website with Persian and English language support.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Languages

Use the **EN / فا** button in the top navigation to switch between English and Persian. The selected language is saved in local storage and restored on the next visit. The document language and text direction switch automatically (LTR for English, RTL for Persian).

To update translations, edit `src/i18n/LanguageContext.jsx`. Product and category translations are stored in `src/data/products.js`.

---

این پروژه با React و Vite ساخته شده و از زبان فارسی و انگلیسی پشتیبانی می‌کند.

- برای اجرا: `npm install` و سپس `npm run dev`
- با دکمه `EN / فا` در نوار بالای سایت زبان را تغییر دهید.
- زبان انتخاب‌شده ذخیره می‌شود و جهت صفحه نیز به‌صورت خودکار بین راست‌چین و چپ‌چین تغییر می‌کند.
- ترجمه متن‌های رابط کاربری در `src/i18n/LanguageContext.jsx` و ترجمه محصولات در `src/data/products.js` قرار دارد.
