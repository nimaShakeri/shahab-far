import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import RecyclingRoundedIcon from "@mui/icons-material/RecyclingRounded";
import { useEffect, useRef } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { categories, products } from "../../data/products";
import { useLanguage } from "../../i18n/LanguageContext";

const accent = "#12a99f";
const ink = "#172327";
const muted = "#647276";

const categoryImages = {
  "gargare-sim-laki": "/product1-removebg-preview.png",
  "gargare-saloni": "/product7-removebg-preview.png",
  "gargare-mahsouli": "/product9-removebg-preview.png",
  "gargare-ranje": "/product12-removebg-preview.png",
  "industrial-baskets-boxes": "/product14-removebg-preview.png",
};

const strengths = [
  {
    icon: <PrecisionManufacturingRoundedIcon />,
    title: "تولید تخصصی",
    description: "تمرکز بر طراحی و تولید قطعات پلاستیکی موردنیاز صنایع سیم و کابل.",
  },
  {
    icon: <VerifiedRoundedIcon />,
    title: "توجه به کیفیت",
    description: "تلاش برای انتخاب مواد اولیه مناسب و بهبود مستمر فرایند تولید.",
  },
  {
    icon: <HandshakeRoundedIcon />,
    title: "همکاری متناسب با نیاز",
    description: "آمادگی برای بررسی نیازهای فنی و سفارش‌های مشتریان صنعتی.",
  },
  {
    icon: <LocalShippingRoundedIcon />,
    title: "همراهی در مسیر سفارش",
    description: "ارتباط مستقیم با مجموعه برای دریافت اطلاعات محصول و هماهنگی سفارش.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { language, direction, t } = useLanguage();
  const featuredProducts = products.slice(0, 4);
  const categoryTrackRef = useRef(null);
  const recyclingVideoUrl = "https://www.youtube.com/embed/pkGZF2Y8fgk?rel=0";

  // Demo logo placeholders: replace these labels with the real partner names/logos later.
  const partners = [
    { mark: "01", name: "نام شرکت همکار ۱" },
    { mark: "02", name: "نام شرکت همکار ۲" },
    { mark: "03", name: "نام شرکت همکار ۳" },
    { mark: "04", name: "نام شرکت همکار ۴" },
    { mark: "05", name: "نام شرکت همکار ۵" },
    { mark: "06", name: "نام شرکت همکار ۶" },
  ];

  useEffect(() => {
    const track = categoryTrackRef.current;
    if (!track) return undefined;
    let frame;
    let previousTime = 0;
    const speed = 70; // pixels per second; faster continuous movement
    const animate = (time) => {
      if (previousTime && !track.matches(":hover") && !track.contains(document.activeElement)) {
        const elapsed = Math.min(time - previousTime, 40);
        // Categories are duplicated for a seamless loop. Keep scrollLeft in the
        // first copy, then wrap to the matching point in the second copy.
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > track.clientWidth) {
          track.scrollLeft += (speed * elapsed) / 1000;
          if (track.scrollLeft >= loopWidth) track.scrollLeft -= loopWidth;
        }
      }
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Box dir={direction} sx={{ bgcolor: "#fff", color: ink, overflow: "hidden" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 7, md: 10 },
          pb: { xs: 7, md: 11 },
          mt: { xs: "64px", sm: "76px", md: "84px" },
          background:
            "radial-gradient(circle at 12% 18%, rgba(18,169,159,.18), transparent 28%), linear-gradient(125deg, #101a1d 0%, #17282c 58%, #20383b 100%)",
          color: "#fff",
          isolation: "isolate",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(90deg, #000, transparent 85%)",
          }}
        />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr .95fr" },
              alignItems: "center",
              gap: { xs: 4, md: 7 },
            }}
          >
            <Box sx={{ maxWidth: 650 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 2.5, color: "#8de4dc" }}
              >
                <Box sx={{ width: 32, height: 2, bgcolor: accent }} />
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, letterSpacing: ".02em" }}
                >
                  {t("شرکت تولیدی صنعتی شهاب فر طوس")}
                </Typography>
              </Stack>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 34, sm: 43, md: 56 },
                  fontWeight: 900,
                  lineHeight: { xs: 1.55, md: 1.45 },
                  letterSpacing: "-.035em",
                  mb: 2.5,
                }}
              >
                {t("راهکارهای صنعتی،")}
                <Box component="span" sx={{ display: "block", color: "#65d6cc" }}>
                  {t("ساخته‌شده برای کار واقعی")}
                </Box>
              </Typography>

              <Typography
                sx={{
                  maxWidth: 570,
                  color: "rgba(255,255,255,.76)",
                  lineHeight: 2.2,
                  fontSize: { xs: 15, md: 17 },
                  mb: 4,
                }}
              >
                {t("طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل، قرقره‌های سیم‌لاکی و قطعات پلاستیکی موردنیاز صنایع؛ با تمرکز بر کیفیت، کارایی و نیاز واقعی مشتریان.")}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={RouterLink}
                  to="/shop"
                  variant="contained"
                  endIcon={<ArrowBackRoundedIcon />}
                  sx={{
                    bgcolor: accent,
                    color: "#062b29",
                    fontWeight: 800,
                    px: 3,
                    py: 1.45,
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#42c8bd" },
                  }}
                >
                  {t("مشاهده محصولات")}
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  endIcon={<ArrowOutwardRoundedIcon />}
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.38)",
                    px: 3,
                    py: 1.45,
                    borderRadius: 2,
                    "&:hover": {
                      borderColor: "#65d6cc",
                      bgcolor: "rgba(255,255,255,.06)",
                    },
                  }}
                >
                  {t("آشنایی با شرکت")}
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mt: 4, color: "rgba(255,255,255,.65)" }}
              >
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: accent }} />
                <Typography variant="body2">{t("شروع فعالیت مجموعه از سال ۱۳۷۰")}</Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                minHeight: { xs: 300, sm: 390, md: 470 },
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 250, sm: 350, md: 420 },
                  height: { xs: 250, sm: 350, md: 420 },
                  borderRadius: "50%",
                  border: "1px solid rgba(101,214,204,.24)",
                  boxShadow: "0 0 0 35px rgba(101,214,204,.035), 0 0 0 75px rgba(101,214,204,.025)",
                }}
              />
              <Box
                component="img"
                src="/product1-removebg-preview.png"
                alt={t("نمونه قرقره صنعتی سیم و کابل")}
                sx={{
                  position: "relative",
                  width: { xs: "82%", sm: "78%", md: "90%" },
                  maxWidth: 460,
                  height: { xs: 290, sm: 380, md: 440 },
                  objectFit: "contain",
                  filter: "drop-shadow(0 26px 30px rgba(0,0,0,.32))",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 0, md: -8 },
                  bottom: { xs: 5, md: 28 },
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "rgba(10,24,27,.88)",
                  border: "1px solid rgba(255,255,255,.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Typography sx={{ color: "#8de4dc", fontSize: 12, mb: 0.5 }}>
                  {t("حوزه تخصص")}
                </Typography>
                <Typography sx={{ fontWeight: 800 }}>{t("قطعات پلاستیکی صنعتی")}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Intro strip */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            py: { xs: 3, md: 4 },
            borderBottom: "1px solid #e7eded",
            gap: 2,
          }}
        >
          {[
            [language === "en" ? "1991" : "۱۳۷۰", t("سال آغاز فعالیت")],
            [language === "en" ? "5" : "۵", t("گروه اصلی محصولات")],
            [t("مشهد"), t("محل استقرار مجموعه")],
          ].map(([value, label], index) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                borderLeft: { sm: index === 2 ? 0 : "1px solid #e7eded" },
                py: 1,
              }}
            >
              <Typography sx={{ fontSize: 25, fontWeight: 900, color: accent }}>
                {value}
              </Typography>
              <Typography sx={{ color: muted, fontSize: 14 }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Categories carousel */}
      <Box component="section" sx={{ position: "relative", py: { xs: 7, md: 10 }, overflow: "hidden", background: "linear-gradient(180deg, rgba(242,249,248,.78), rgba(255,255,255,.98))" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "flex-end" }, justifyContent: "space-between", gap: 2.5 }}>
            <SectionHeading
              eyebrow={t("محصولات شهاب فر طوس")}
              title={t("راهکار مناسب برای هر کاربرد")}
              description={t("دسته‌بندی محصولات را ببینید و برای بررسی جزئیات هر گروه وارد صفحه مربوط شوید.")}
              align={direction === "rtl" ? "right" : "left"}
            />
            <Stack direction="row" dir="ltr" spacing={1} sx={{ flexShrink: 0, alignSelf: { xs: direction === "rtl" ? "flex-start" : "flex-end", sm: "auto" } }}>
              <IconButton aria-label={t("حرکت به دسته‌های قبلی")} onClick={() => {
                const track = categoryTrackRef.current;
                if (!track) return;
                const loopWidth = track.scrollWidth / 2;
                if (track.scrollLeft <= 1) track.scrollLeft = loopWidth;
                track.scrollBy({ left: -330, behavior: "smooth" });
              }} sx={{ width: 44, height: 44, border: "1px solid #d6e6e4", bgcolor: "#fff", color: accent, "&:hover": { bgcolor: "#e8f8f6", borderColor: accent } }}><ChevronLeftRoundedIcon /></IconButton>
              <IconButton aria-label={t("حرکت به دسته‌های بعدی")} onClick={() => {
                const track = categoryTrackRef.current;
                if (!track) return;
                const loopWidth = track.scrollWidth / 2;
                if (track.scrollLeft >= loopWidth - track.clientWidth) track.scrollLeft = 0;
                track.scrollBy({ left: 330, behavior: "smooth" });
              }} sx={{ width: 44, height: 44, border: "1px solid #d6e6e4", bgcolor: "#fff", color: accent, "&:hover": { bgcolor: "#e8f8f6", borderColor: accent } }}><ChevronRightRoundedIcon /></IconButton>
            </Stack>
          </Box>

          <Box ref={categoryTrackRef} className="category-carousel-track" sx={{ display: "flex", gap: { xs: 1.8, md: 2.5 }, mt: 4, pb: 2, overflowX: "auto", scrollBehavior: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" }, direction: "ltr", px: .5, pt: .5 }}>
            {[...categories, ...categories].map((category, index) => (
              <Card key={`${category.slug}-${index}`} elevation={0} sx={{ flex: { xs: "0 0 82%", sm: "0 0 44%", md: "0 0 31.5%" }, minWidth: 0, border: "1px solid #e1eceb", borderRadius: 4, overflow: "hidden", bgcolor: "#fff", transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease", "&:hover": { transform: "translateY(-5px)", borderColor: "rgba(18,169,159,.55)", boxShadow: "0 18px 42px rgba(20,52,55,.1)" } }}>
                <CardActionArea onClick={() => navigate(`/products/${category.slug}`)} sx={{ height: "100%" }}>
                  <Box sx={{ height: { xs: 195, md: 220 }, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: index % 2 === 0 ? "radial-gradient(circle at 50% 45%, #e1f5f2, #f7fbfa 70%)" : "radial-gradient(circle at 50% 45%, #eaf0f0, #f8fafa 70%)", p: 2.5 }}>
                    <Box aria-hidden="true" sx={{ position: "absolute", width: 155, height: 155, borderRadius: "50%", border: "1px solid rgba(18,169,159,.12)", boxShadow: "0 0 0 20px rgba(18,169,159,.035), 0 0 0 40px rgba(18,169,159,.025)" }} />
                    <Box component="img" src={categoryImages[category.slug]} alt={language === "en" ? category.titleEn : category.title} loading="lazy" sx={{ position: "relative", height: "100%", maxWidth: "88%", objectFit: "contain", transition: "transform .35s ease", ".MuiCardActionArea-root:hover &": { transform: "scale(1.07) rotate(-2deg)" } }} />
                    <Box sx={{ position: "absolute", top: 14, [direction === "rtl" ? "right" : "left"]: 14, px: 1.2, py: .55, borderRadius: 5, bgcolor: "rgba(255,255,255,.84)", color: "#64807e", fontSize: 11, fontWeight: 900, letterSpacing: ".08em", backdropFilter: "blur(8px)" }}>{String((index % categories.length) + 1).padStart(2, "0")}</Box>
                  </Box>
                  <CardContent sx={{ p: 2.5, direction }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1.5}>
                      <Typography sx={{ fontWeight: 900, lineHeight: 1.9, color: ink }}>{language === "en" ? category.titleEn : category.title}</Typography>
                      <Box sx={{ width: 38, height: 38, flexShrink: 0, borderRadius: 2.5, display: "grid", placeItems: "center", bgcolor: "#e7f7f5", color: accent, transition: "all .2s", ".MuiCardActionArea-root:hover &": { bgcolor: accent, color: "#fff" } }}><ArrowBackRoundedIcon fontSize="small" /></Box>
                    </Stack>
                    <Typography sx={{ color: muted, fontSize: 12, mt: 1 }}>{t("برای مشاهده محصولات این گروه کلیک کنید")}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}><Button component={RouterLink} to="/shop" endIcon={<ArrowBackRoundedIcon />} sx={{ color: "#087e77", fontWeight: 900 }}>{t("مشاهده همه محصولات")}</Button></Box>
        </Container>
      </Box>

      {/* Recycling video */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden", bgcolor: "#0c191b", color: "#fff", isolation: "isolate" }}>
        <Box aria-hidden="true" className="video-orb video-orb-one" />
        <Box aria-hidden="true" className="video-orb video-orb-two" />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#67dcd1", mb: 2 }}><RecyclingRoundedIcon /><Typography sx={{ fontWeight: 900, fontSize: 14 }}>{t("مسئولیت‌پذیری در چرخه تولید")}</Typography></Stack>
              <Typography component="h2" sx={{ fontSize: { xs: 28, md: 39 }, fontWeight: 900, lineHeight: 1.65, mb: 2 }}>{t("از مواد اولیه تا بازگشت به چرخه تولید")}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,.68)", lineHeight: 2.25, fontSize: { xs: 14, md: 15 }, mb: 3 }}>{t("در این ویدیو با فرایند بازیافت و تبدیل مواد پلاستیکی PP، PE و PS آشنا شوید؛ از آماده‌سازی مواد تا استفاده دوباره از آن‌ها در مسیر تولید صنعتی.")}</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                {["PP", "PE", "PS"].map((material) => <Box key={material} sx={{ px: 2, py: .8, borderRadius: 2, color: "#7de3d9", border: "1px solid rgba(103,220,209,.28)", bgcolor: "rgba(103,220,209,.07)", fontSize: 13, fontWeight: 900, letterSpacing: ".08em" }}>{material}</Box>)}
              </Stack>
              <Typography sx={{ color: "rgba(255,255,255,.43)", fontSize: 12, lineHeight: 1.9 }}>{t("این ویدیو یک نمونه از خط بازیافت پلاستیک است و بعداً می‌توانید آن را با ویدیوی اختصاصی شرکت جایگزین کنید.")}</Typography>
            </Box>
            <Box sx={{ position: "relative", p: { xs: 1, sm: 1.4 }, borderRadius: 4, border: "1px solid rgba(103,220,209,.2)", bgcolor: "rgba(255,255,255,.035)", boxShadow: "0 25px 70px rgba(0,0,0,.28)", backdropFilter: "blur(10px)" }}>
              <Box sx={{ overflow: "hidden", position: "relative", borderRadius: 3, aspectRatio: "16 / 9", bgcolor: "#15282a", backgroundImage: "radial-gradient(circle at 50% 50%, rgba(54,199,184,.17), transparent 60%), linear-gradient(135deg,#132426,#1a3335)" }}>
                {recyclingVideoUrl ? (
                  recyclingVideoUrl.includes("youtube") || recyclingVideoUrl.includes("youtu.be") ? <Box component="iframe" src={recyclingVideoUrl} title={t("ویدیوی بازیافت مواد پلاستیکی")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen sx={{ border: 0, width: "100%", height: "100%", position: "absolute", inset: 0 }} /> : <Box component="video" src={recyclingVideoUrl} controls playsInline preload="metadata" sx={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", inset: 0 }} />
                ) : (
                  <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 3 }}>
                    <Box sx={{ width: 82, height: 82, display: "grid", placeItems: "center", borderRadius: "50%", color: "#082d2a", bgcolor: "#60d9ce", boxShadow: "0 0 0 14px rgba(96,217,206,.08), 0 0 55px rgba(96,217,206,.2)", mb: 2 }}><PlayCircleOutlineRoundedIcon sx={{ fontSize: 54 }} /></Box>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: 16, md: 19 } }}>{t("ویدیوی فرایند بازیافت")}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,.52)", fontSize: 12, mt: 1 }}>{t("نمونه خط بازیافت PP و HDPE")}</Typography>
                  </Box>
                )}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, px: 1, pt: 1.6 }}><Typography sx={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>{t("آشنایی با بازیافت پلاستیک‌های صنعتی")}</Typography><Box sx={{ display: "flex", gap: .5 }}><Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#60d9ce" }} /><Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "rgba(96,217,206,.35)" }} /><Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "rgba(96,217,206,.18)" }} /></Box></Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Partner companies: replace demo labels with confirmed partner names/logos. */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, overflow: "hidden", bgcolor: "#fff", borderBottom: "1px solid #edf2f1" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 3.5 }}>
            <Typography sx={{ color: accent, fontWeight: 900, fontSize: 14, mb: 1 }}>
              {t("شبکه همکاری صنعتی")}
            </Typography>
            <Typography component="h2" sx={{ fontSize: { xs: 25, md: 32 }, fontWeight: 900, color: ink }}>
              {t("همکاران تجاری ما")}
            </Typography>
            <Typography sx={{ color: muted, fontSize: 13, mt: 1.2 }}>
              {t("جایگاه‌های نمونه؛ نام یا لوگوی شرکای واقعی را بعداً جایگزین کنید.")}
            </Typography>
          </Box>
          <Box className="partner-marquee" aria-label={t("اسلایدر همکاران تجاری")}>
            <Box className="partner-marquee-track" dir="ltr">
              {[0, 1].map((copy) => (
                <Box
                  key={`partner-group-${copy}`}
                  className="partner-marquee-group"
                  aria-hidden={copy === 1 ? "true" : undefined}
                  dir="ltr"
                >
                  {partners.map((partner) => (
                    <Box key={`${copy}-${partner.mark}`} className="partner-logo-card" dir={direction}>
                      <Box className="partner-logo-mark" aria-hidden="true">{partner.mark}</Box>
                      <Typography sx={{ fontWeight: 800, fontSize: { xs: 12, sm: 14 }, whiteSpace: "nowrap" }}>
                        {t(partner.name)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured products */}
      <Box component="section" sx={{ bgcolor: "#f5f8f8", py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "flex-end" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <SectionHeading
              eyebrow={t("نگاهی به محصولات")}
              title={t("محصولات منتخب")}
              description={t("برای مشاهده فهرست کامل و جزئیات بیشتر، وارد بخش محصولات شوید.")}
              align={direction === "rtl" ? "right" : "left"}
            />
            <Button
              component={RouterLink}
              to="/shop"
              endIcon={<ArrowBackRoundedIcon />}
              sx={{ color: "#087e77", fontWeight: 800, flexShrink: 0 }}
            >
              {t("همه محصولات")}
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 1.5, md: 2.5 },
              mt: 4,
            }}
          >
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                elevation={0}
                sx={{
                  border: "1px solid #e5ecec",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform .2s ease, box-shadow .2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 32px rgba(20,52,55,.08)",
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(`/product/${product.id}`)}>
                  <Box
                    sx={{
                      height: { xs: 155, sm: 210 },
                      p: 2,
                      bgcolor: "#fff",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={language === "en" ? product.titleEn : product.title}
                      loading="lazy"
                      sx={{ maxWidth: "100%", width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </Box>
                  <Divider sx={{ borderColor: "#edf1f1" }} />
                  <CardContent sx={{ p: { xs: 1.5, sm: 2.25 } }}>
                    <Typography sx={{ fontWeight: 900, fontSize: 17, mb: 0.75 }}>
                      {language === "en" ? product.titleEn : product.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: muted,
                        fontSize: 13,
                        lineHeight: 1.9,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: 49,
                      }}
                    >
                      {language === "en" ? product.descriptionEn : product.description}
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: accent, fontWeight: 800, fontSize: 13 }}>
                      {t("مشاهده جزئیات")} <ArrowBackRoundedIcon sx={{ fontSize: 15, verticalAlign: "middle" }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why us */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: ".8fr 1.2fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography sx={{ color: accent, fontWeight: 800, mb: 1 }}>
              {t("چرا شهاب فر طوس؟")}
            </Typography>
            <Typography
              component="h2"
              sx={{ fontSize: { xs: 28, md: 38 }, fontWeight: 900, lineHeight: 1.7, mb: 2 }}
            >
              {t("تجربه صنعتی در کنار نگاه رو به آینده")}
            </Typography>
            <Typography sx={{ color: muted, lineHeight: 2.2, mb: 3 }}>
              {t("از سال ۱۳۷۰، فعالیت مجموعه بر تولید قطعات صنعتی و پاسخ‌گویی به نیاز کسب‌وکارها متمرکز بوده است. برای انتخاب محصول مناسب یا بررسی سفارش اختصاصی، با ما در ارتباط باشید.")}
            </Typography>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              endIcon={<ArrowBackRoundedIcon />}
              sx={{
                borderColor: accent,
                color: "#087e77",
                borderRadius: 2,
                px: 2.5,
                py: 1.2,
                fontWeight: 800,
                "&:hover": { borderColor: "#087e77", bgcolor: "#f0fbfa" },
              }}
            >
              {t("بیشتر درباره ما")}
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 2,
            }}
          >
            {strengths.map((item) => (
              <Box
                key={t(item.title)}
                sx={{
                  p: 2.5,
                  border: "1px solid #e5ecec",
                  borderRadius: 3,
                  bgcolor: "#fff",
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    color: accent,
                    bgcolor: "#e7f7f5",
                    mb: 2,
                    "& svg": { fontSize: 27 },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 900, mb: 1 }}>{t(item.title)}</Typography>
                <Typography sx={{ color: muted, lineHeight: 2, fontSize: 14 }}>
                  {t(item.description)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* CTA */}
      <Container maxWidth="lg" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 3, md: 4 },
            p: { xs: 3, sm: 4, md: 6 },
            bgcolor: "#142326",
            color: "#fff",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: 260,
              height: 260,
              border: "1px solid rgba(101,214,204,.2)",
              borderRadius: "50%",
              left: -80,
              top: -130,
              boxShadow: "0 0 0 28px rgba(101,214,204,.035), 0 0 0 58px rgba(101,214,204,.025)",
            }}
          />
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ color: "#65d6cc", fontWeight: 800, mb: 1 }}>
              {t("برای شروع همکاری آماده‌ایم")}
            </Typography>
            <Typography sx={{ fontSize: { xs: 23, md: 31 }, fontWeight: 900, mb: 1 }}>
              {t("برای دریافت اطلاعات محصولات با ما تماس بگیرید")}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,.7)", lineHeight: 2 }}>
              {t("نیازتان را مطرح کنید تا درباره گزینه‌های موجود راهنمایی‌تان کنیم.")}
            </Typography>
          </Box>
          <Button
            component="a"
            href="tel:05135413300"
            variant="contained"
            endIcon={<ArrowBackRoundedIcon />}
            sx={{
              position: "relative",
              flexShrink: 0,
              bgcolor: accent,
              color: "#062b29",
              fontWeight: 900,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              "&:hover": { bgcolor: "#42c8bd" },
            }}
          >
            {t("تماس با شرکت")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const { t } = useLanguage();
  return (
    <Box sx={{ textAlign: align, maxWidth: align === "center" ? 680 : 620 }}>
      <Typography sx={{ color: accent, fontWeight: 900, mb: 1 }}>
        {t(eyebrow)}
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 26, md: 36 },
          lineHeight: 1.6,
          fontWeight: 900,
          letterSpacing: "-.02em",
        }}
      >
        {t(title)}
      </Typography>
      <Typography sx={{ color: muted, mt: 1.25, lineHeight: 2.1, fontSize: 15 }}>
        {t(description)}
      </Typography>
    </Box>
  );
}
