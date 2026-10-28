import { Box, Container, Typography, IconButton, Link, Divider, Button } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { categories } from "../../data/products";

export default function Footer() {
  const { language, direction, t } = useLanguage();
  const email = "nshakeri83.2@gmail.com";
  const phone = "05135413300";
  const whatsappLink = "https://wa.me/989155254176";
  const categoryTitle = (category) => language === "en" ? category.titleEn : category.title;
  const linkSx = { color: "rgba(241,248,248,.68)", fontSize: 13, lineHeight: 2, textDecoration: "none", transition: "color .2s", "&:hover": { color: "#56d5c8" } };
  const contactRow = { display: "flex", alignItems: "flex-start", gap: 1.3, mb: 1.8, minWidth: 0 };
  const iconSx = { color: "#54d2c5", fontSize: 21, mt: .25, flexShrink: 0 };

  return (
    <Box component="footer" dir={direction} sx={{ position: "relative", overflow: "hidden", width: "100%", boxSizing: "border-box", bgcolor: "#0b1719", color: "#fff", flexShrink: 0, pt: { xs: 6, md: 8 }, pb: 2.5, borderTop: "1px solid rgba(83,207,196,.18)" }}>
      <Box aria-hidden="true" sx={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", top: -230, [direction === "rtl" ? "left" : "right"]: -100, background: "rgba(54,199,184,.08)", filter: "blur(35px)", pointerEvents: "none" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0,1fr))", md: "1.25fr .8fr 1fr 1.15fr" }, gap: { xs: 4, md: 5 }, pb: 5 }}>
          <Box sx={{ minWidth: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.2 }}>
              <Box sx={{ width: 58, height: 58, display: "grid", placeItems: "center", bgcolor: "#fff", borderRadius: 2.5 }}><Box component="img" src="/shahab-far-logo.svg" alt="Shahab Far Toos logo" sx={{ width: "94%", height: "94%", objectFit: "contain" }} /></Box>
              <Box><Typography sx={{ fontWeight: 900, fontSize: 16 }}>{language === "fa" ? "شهاب فر طوس" : "SHAHAB FAR TOOS"}</Typography><Typography sx={{ color: "#8fa4a5", fontSize: 10, mt: .4 }}>{language === "fa" ? "تولید صنعتی، با نگاه آینده‌نگر" : "INDUSTRIAL MANUFACTURING"}</Typography></Box>
            </Box>
            <Typography sx={{ color: "rgba(241,248,248,.64)", fontSize: 13, lineHeight: 2.2, maxWidth: 340 }}>{t("طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل، قرقره‌های سیم‌لاکی و قطعات پلاستیکی موردنیاز صنایع؛ با تمرکز بر کیفیت، کارایی و نیاز واقعی مشتریان.")}</Typography>
            <Button component={RouterLink} to="/about" endIcon={<ArrowOutwardRoundedIcon />} sx={{ mt: 2, p: 0, color: "#56d5c8", fontWeight: 800, "&:hover": { bgcolor: "transparent", color: "#9af0e7" } }}>{t("آشنایی با شرکت")}</Button>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 15, mb: 2.3 }}>{t("دسترسی سریع")}</Typography>
            <Box sx={{ display: "grid", gap: 1.1 }}>
              <Link component={RouterLink} to="/" sx={linkSx}>{t("صفحه اصلی")}</Link>
              <Link component={RouterLink} to="/shop" sx={linkSx}>{t("همه محصولات")}</Link>
              <Link component={RouterLink} to="/about" sx={linkSx}>{t("درباره ما")}</Link>
              <Link href={`tel:${phone}`} sx={linkSx}>{t("تماس با شرکت")}</Link>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 15, mb: 2.3 }}>{t("دسته‌بندی محصولات")}</Typography>
            <Box sx={{ display: "grid", gap: 1.1 }}>
              {categories.slice(0, 5).map((category) => <Link key={category.slug} component={RouterLink} to={`/products/${category.slug}`} sx={linkSx}>{categoryTitle(category)}</Link>)}
            </Box>
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 900, fontSize: 15, mb: 2.3 }}>{t("اطلاعات تماس")}</Typography>
            <Box sx={contactRow}><LocationOnRoundedIcon sx={iconSx} /><Typography sx={{ color: "rgba(241,248,248,.68)", fontSize: 12.5, lineHeight: 2 }}>{t("شهرک صنعتی توس، فاز یک، بلوار تلاش شمالی، نبش تلاش ۸")}</Typography></Box>
            <Box sx={contactRow}><PhoneInTalkRoundedIcon sx={iconSx} /><Link href={`tel:${phone}`} sx={{ ...linkSx, color: "rgba(241,248,248,.78)", direction: "ltr" }}>{phone}</Link></Box>
            <Box sx={contactRow}><EmailRoundedIcon sx={iconSx} /><Link href={`mailto:${email}`} sx={{ ...linkSx, color: "rgba(241,248,248,.78)", direction: "ltr", overflowWrap: "anywhere" }}>{email}</Link></Box>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton component="a" href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label={t("پیام در واتساپ")} sx={{ color: "#56d5c8", border: "1px solid rgba(86,213,200,.25)", borderRadius: 2, "&:hover": { bgcolor: "rgba(86,213,200,.1)" } }}><WhatsAppIcon /></IconButton>
              <IconButton component="a" href={`mailto:${email}`} aria-label={t("ارسال ایمیل")} sx={{ color: "#56d5c8", border: "1px solid rgba(86,213,200,.25)", borderRadius: 2, "&:hover": { bgcolor: "rgba(86,213,200,.1)" } }}><EmailRoundedIcon /></IconButton>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,.1)" }} />
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 1.5, pt: 2.5 }}>
          <Typography sx={{ color: "#8fa1a2", fontSize: 12, textAlign: "center" }}>{t("تمامی حقوق این وب‌سایت محفوظ است ©")} {new Date().getFullYear()}</Typography>
          <Typography sx={{ color: "#708586", fontSize: 11 }}>{language === "fa" ? "ساخته‌شده برای ارتباط بهتر با صنعت" : "Built to connect with industry"}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
