import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const en = {
  "صفحه اصلی": "Home",
  "محصولات": "Products",
  "محصولات ما": "Our products",
  "درباره ما": "About us",
  "دسته‌بندی محصولات": "Product categories",
  "دسته‌بندی موردنظر خود را انتخاب کنید.": "Choose a product category.",
  "قرقره های سیم‌لاکی": "Enamelled wire spools",
  "قرقره‌های سیم‌لکی": "Enamelled wire spools",
  "قرقره‌های سیم‌لاکی": "Enamelled wire spools",
  "قرقره های سالنی سیم و کابل": "Wire and cable reels",
  "قرقره‌های سالونی سیم و کابل": "Wire and cable reels",
  "قرقره‌های سالنی سیم و کابل": "Wire and cable reels",
  "قرقره های محصولی سیم و کابل": "Production wire and cable reels",
  "قرقره‌های محصولی سیم و کابل": "Production wire and cable reels",
  "قرقره‌های رنژه": "Ranget wire reels",
  "قرقره‌های رانژه": "Ranget wire reels",
  "سبد و جعبه‌های صنعتی": "Industrial baskets and boxes",
  "شرکت تولیدی صنعتی شهاب فر طوس": "Shahab Far Toos Industrial Manufacturing Co.",
  "راهکارهای صنعتی،": "Industrial solutions,",
  "ساخته‌شده برای کار واقعی": "built for real-world work",
  "طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل، قرقره‌های سیم‌لاکی و قطعات پلاستیکی موردنیاز صنایع؛ با تمرکز بر کیفیت، کارایی و نیاز واقعی مشتریان.": "We design and manufacture industrial wire and cable reels, enamelled-wire spools, and plastic components for industry—with a focus on quality, performance, and customers’ real needs.",
  "مشاهده محصولات": "Explore products",
  "آشنایی با شرکت": "About the company",
  "شروع فعالیت مجموعه از سال ۱۳۷۰": "Established in 1991",
  "نمونه قرقره صنعتی سیم و کابل": "Example of an industrial wire and cable reel",
  "حوزه تخصص": "Our specialty",
  "قطعات پلاستیکی صنعتی": "Industrial plastic components",
  "سال آغاز فعالیت": "Established",
  "۵ دسته": "5 categories",
  "گروه اصلی محصولات": "Product categories",
  "مشهد": "Mashhad",
  "محل استقرار مجموعه": "Based in",
  "محصولات شهاب فر طوس": "Shahab Far Toos products",
  "راهکار مناسب برای هر کاربرد": "The right solution for every application",
  "دسته‌بندی محصولات را ببینید و برای بررسی جزئیات هر گروه وارد صفحه مربوط شوید.": "Browse our product categories to explore each range in more detail.",
  "نگاهی به محصولات": "Product overview",
  "محصولات منتخب": "Featured products",
  "برای مشاهده فهرست کامل و جزئیات بیشتر، وارد بخش محصولات شوید.": "Visit the products page to view the full range and more details.",
  "همه محصولات": "All products",
  "مشاهده جزئیات": "View details",
  "چرا شهاب فر طوس؟": "Why Shahab Far Toos?",
  "تجربه صنعتی در کنار نگاه رو به آینده": "Industrial experience with a forward-looking mindset",
  "از سال ۱۳۷۰، فعالیت مجموعه بر تولید قطعات صنعتی و پاسخ‌گویی به نیاز کسب‌وکارها متمرکز بوده است. برای انتخاب محصول مناسب یا بررسی سفارش اختصاصی، با ما در ارتباط باشید.": "Since 1991, our work has focused on manufacturing industrial components and meeting business needs. Contact us to find the right product or discuss a custom order.",
  "بیشتر درباره ما": "More about us",
  "تولید تخصصی": "Specialized manufacturing",
  "تمرکز بر طراحی و تولید قطعات پلاستیکی موردنیاز صنایع سیم و کابل.": "Focused on designing and manufacturing plastic components for the wire and cable industry.",
  "توجه به کیفیت": "Quality-focused",
  "تلاش برای انتخاب مواد اولیه مناسب و بهبود مستمر فرایند تولید.": "Careful material selection and continuous improvement of manufacturing processes.",
  "همکاری متناسب با نیاز": "Solutions tailored to your needs",
  "آمادگی برای بررسی نیازهای فنی و سفارش‌های مشتریان صنعتی.": "Ready to discuss technical requirements and industrial customer orders.",
  "همراهی در مسیر سفارش": "Support throughout your order",
  "ارتباط مستقیم با مجموعه برای دریافت اطلاعات محصول و هماهنگی سفارش.": "Contact our team directly for product information and order coordination.",
  "برای شروع همکاری آماده‌ایم": "Ready to work together",
  "برای دریافت اطلاعات محصولات با ما تماس بگیرید": "Contact us for product information",
  "نیازتان را مطرح کنید تا درباره گزینه‌های موجود راهنمایی‌تان کنیم.": "Tell us what you need and we’ll help you explore the available options.",
  "تماس با شرکت": "Contact the company",
  "دسته‌بندی": "Category",
  "دسته‌بندی موردنظر پیدا نشد.": "The requested category could not be found.",
  "هنوز محصولی در این دسته ثبت نشده است.": "There are no products in this category yet.",
  "محصول موردنظر پیدا نشد.": "The requested product could not be found.",
  "بازگشت به محصولات": "Back to products",
  "درباره مجموعه ما": "About our company",
  "مدیر شرکت شهاب فر طوس": "Shahab Far Toos management",
  "مدیریت شرکت شهاب فر طوس": "Shahab Far Toos management",
  "تجربه، تخصص و تعهد به کیفیت": "Experience, expertise, and commitment to quality",
  "تاریخچه شرکت": "Company history",
  "شرکت تولیدی صنعتی شهاب فر طوس فعالیت خود را از سال ۱۳۷۰ در مشهد آغاز کرد. این مجموعه در زمینه طراحی و تولید قطعات صنعتی پلاستیکی فعالیت داشته و در طول سال‌های فعالیت خود، با تکیه بر تجربه و دانش فنی، دامنه محصولات خود را توسعه داده است. زمینه فعالیت شرکت شامل طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل، قرقره‌های تخت و مخروطی سیم لاکی و انواع بوبین‌های ترانسفورماتور است. این شرکت با رویکردی مبتنی بر کیفیت، نوآوری و پاسخ‌گویی به نیاز مشتریان، برای توسعه محصولات و بهبود مستمر فرایندهای تولید تلاش می‌کند.": "Shahab Far Toos Industrial Manufacturing Company began operations in Mashhad in 1991. The company designs and manufactures industrial plastic components and has expanded its product range through years of experience and technical expertise. Its products include industrial wire and cable reels, flat and conical enamelled-wire spools, and transformer bobbins. With a focus on quality, innovation, and customer needs, the company continues to develop its products and improve its manufacturing processes.",
  "حوزه‌های فعالیت": "Our areas of expertise",
  "طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل": "Design and manufacture of industrial wire and cable reels",
  "تولید قرقره‌های تخت و مخروطی سیم لاکی": "Manufacture of flat and conical enamelled-wire spools",
  "طراحی و تولید انواع بوبین‌های ترانسفورماتور": "Design and manufacture of transformer bobbins",
  "کیفیت و استانداردها": "Quality and standards",
  "پایبندی به کیفیت محصولات و بهبود مستمر فرایندهای تولید، از اولویت‌های مجموعه است.": "Product quality and continuous improvement of manufacturing processes are key priorities for our team.",
  "ذکر این استاندارد در صفحه، منوط به تأیید اعتبار گواهینامه شرکت است.": "This certification should only be listed after the company’s certificate validity is confirmed.",
  "چشم‌انداز ما": "Our vision",
  "توسعه محصولات، بهره‌گیری از فناوری‌های روز، ارتقای کیفیت و ایجاد همکاری پایدار با مشتریان صنعتی، مسیر آینده شرکت را شکل می‌دهد.": "Product development, modern technology, higher quality, and lasting partnerships with industrial customers shape our future.",
  "شهاب فر طوس؛ همراه صنعت": "Shahab Far Toos — a partner to industry",
  "تجربه چندین‌ساله، تخصص فنی و تعهد به کیفیت، پایه‌های همکاری ما با صنعت هستند.": "Years of experience, technical expertise, and a commitment to quality are the foundations of our industrial partnerships.",
  "اطلاعات تماس": "Contact information",
  "شهرک صنعتی توس، فاز یک، بلوار تلاش شمالی، نبش تلاش ۸": "Toos Industrial Estate, Phase 1, North Talash Boulevard, corner of Talash 8, Mashhad, Iran",
  "ارتباط با ما": "Get in touch",
  "ارسال ایمیل": "Send email",
  "پیام در واتساپ": "Message us on WhatsApp",
  "تمامی حقوق این وب‌سایت محفوظ است ©": "All rights reserved ©",
  "محصول": "Product",
  "نوع": "Type",
  "مواد سازنده": "Material",
  "وزن": "Weight",
  "قابل تولید با جنس درخواستی مشتری": "Can be manufactured using customer-requested material",
  "سبک و قابل حمل": "Lightweight and portable",
  "مناسب انواع سیم و کابل": "Suitable for various wire and cable types",
  "تولیدشده با مواد درجه یک بادی و مطابق استاندارد جهانی.": "Made with high-grade blow-moulding materials to international standards.",
  "ساخته‌شده از مواد درجه یک.": "Made from high-grade materials.",
  "توضیحات محصول هفتم": "Product 7 description",
  "توضیحات محصول هشتم": "Product 8 description",
  "توضیحات محصول نهم": "Product 9 description",
  "توضیحات محصول یازدهم": "Product 11 description",
  "توضیحات محصول دوازدهم": "Product 12 description",
  "توضیحات محصول سیزدهم": "Product 13 description",
  "توضیحات محصول چهاردهم": "Product 14 description",
  "توضیحات محصول پانزدهم": "Product 15 description",
  "توضیحات محصول شانزدهم": "Product 16 description",
  "توضیحات محصول هفدهم": "Product 17 description",
  "توضیحات محصول هجدهم": "Product 18 description",
  "توضیحات محصول نوزدهم": "Product 19 description",
  "توضیحات محصول بیستم": "Product 20 description",
  "محصول هفتم": "Product 7",
  "محصول هشتم": "Product 8",
  "محصول نهم": "Product 9",
  "محصول یازدهم": "Product 11",
  "محصول دوازدهم": "Product 12",
  "محصول سیزدهم": "Product 13",
  "محصول چهاردهم": "Product 14",
  "محصول پانزدهم": "Product 15",
  "محصول شانزدهم": "Product 16",
  "محصول هفدهم": "Product 17",
  "محصول هجدهم": "Product 18",
  "محصول نوزدهم": "Product 19",
  "محصول بیستم": "Product 20",
  "تومان": "IRR",
  "دسترسی سریع": "Quick links",
  "باز کردن منو": "Open menu",
  "بستن منو": "Close menu",
  "مشاهده همه محصولات": "View all products",
  "برای مشاهده محصولات این گروه کلیک کنید": "Explore products in this category",
  "حرکت به دسته‌های قبلی": "Scroll to previous categories",
  "حرکت به دسته‌های بعدی": "Scroll to next categories",
  "مسئولیت‌پذیری در چرخه تولید": "Responsibility throughout the production cycle",
  "از مواد اولیه تا بازگشت به چرخه تولید": "From raw materials back into the production cycle",
  "در این ویدیو با فرایند بازیافت و تبدیل مواد پلاستیکی PP، PE و PS آشنا شوید؛ از آماده‌سازی مواد تا استفاده دوباره از آن‌ها در مسیر تولید صنعتی.": "Explore how PP, PE, and PS plastics are recycled and prepared for reuse in industrial manufacturing.",
  "ویدیو و توضیحات نهایی پس از تأیید محتوای شرکت در این بخش قرار می‌گیرند.": "The final company video and description will appear here once approved.",
  "ویدیوی بازیافت مواد پلاستیکی": "Plastic recycling video",
  "ویدیوی فرایند بازیافت": "Plastic recycling process video",
  "پس از افزودن آدرس ویدیو، اینجا نمایش داده می‌شود": "Add a video URL to display it here",
  "آشنایی با بازیافت پلاستیک‌های صنعتی": "Discover industrial plastic recycling",
  "این ویدیو یک نمونه از خط بازیافت پلاستیک است و بعداً می‌توانید آن را با ویدیوی اختصاصی شرکت جایگزین کنید.": "This is a sample plastic recycling line video. You can replace it later with your company's own video.",
  "نمونه خط بازیافت PP و HDPE": "Sample PP and HDPE recycling line",
  "شبکه همکاری صنعتی": "Industrial network",
  "همکاران تجاری ما": "Our business partners",
  "جایگاه‌های نمونه؛ نام یا لوگوی شرکای واقعی را بعداً جایگزین کنید.": "Demo placeholders — replace these with your actual partners' names or logos.",
  "اسلایدر همکاران تجاری": "Business partners slider",
  "نام شرکت همکار ۱": "Partner company 1",
  "نام شرکت همکار ۲": "Partner company 2",
  "نام شرکت همکار ۳": "Partner company 3",
  "نام شرکت همکار ۴": "Partner company 4",
  "نام شرکت همکار ۵": "Partner company 5",
  "نام شرکت همکار ۶": "Partner company 6",
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("shahab-far-language") === "en" ? "en" : "fa";
    } catch {
      return "fa";
    }
  });

  useEffect(() => {
    const direction = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
    document.title = language === "fa"
      ? "شرکت تولیدی صنعتی شهاب فر طوس"
      : "Shahab Far Toos Industrial Manufacturing Co.";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "fa"
      ? "شرکت تولیدی صنعتی شهاب فر طوس؛ طراحی و تولید قرقره‌های صنعتی سیم و کابل و قطعات پلاستیکی صنعتی."
      : "Shahab Far Toos designs and manufactures industrial wire and cable reels and plastic components.";
    try {
      localStorage.setItem("shahab-far-language", language);
    } catch {
      // Ignore storage restrictions; language still works for this session.
    }
  }, [language]);

  const value = useMemo(() => ({
    language,
    direction: language === "fa" ? "rtl" : "ltr",
    toggleLanguage: () => setLanguage((current) => current === "fa" ? "en" : "fa"),
    t: (text) => language === "fa" ? text : (en[text] || text),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
