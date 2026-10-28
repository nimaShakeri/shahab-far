import { Box, Container, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useLanguage } from "../../i18n/LanguageContext";

export default function About() {
  const { direction, t } = useLanguage();
  const activities = [
    "طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل",
    "تولید قرقره‌های تخت و مخروطی سیم لاکی",
    "طراحی و تولید انواع بوبین‌های ترانسفورماتور",
  ];
  return (
    <Box dir={direction} sx={{ bgcolor: "#fafafa", pt: { xs: 12, md: 14 }, pb: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Typography variant="overline" sx={{ color: "#12a99f", fontWeight: 800 }}>{t("درباره مجموعه ما")}</Typography>
          <Typography variant="h4" sx={{ fontWeight: 900, mt: 1, mb: 2 }}>{t("شرکت تولیدی صنعتی شهاب فر طوس")}</Typography>
          <Box sx={{ width: 70, height: 4, bgcolor: "#12a99f", mx: "auto", borderRadius: 5 }} />
        </Box>
        <Box sx={{ maxWidth: 430, mx: "auto", mb: 6, textAlign: "center" }}>
          <Box sx={{ p: 1, bgcolor: "#fff", borderRadius: 4, boxShadow: "0 8px 35px rgba(0,0,0,.08)" }}>
            <Box component="img" src="/product1-removebg-preview.png" alt={t("نمونه قرقره صنعتی سیم و کابل")} sx={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "contain", borderRadius: 3 }} />
          </Box>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>{t("مدیریت شرکت شهاب فر طوس")}</Typography>
          <Typography color="text.secondary" variant="body2">{t("تجربه، تخصص و تعهد به کیفیت")}</Typography>
        </Box>
        <Card elevation={0} sx={{ borderRadius: 4, border: "1px solid #e9e9e9", mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}><BusinessIcon sx={{ color: "#12a99f", fontSize: 32 }} /><Typography variant="h5" fontWeight={900}>{t("تاریخچه شرکت")}</Typography></Box>
            <Typography sx={{ color: "#555", lineHeight: 2.4, textAlign: "justify", fontSize: { xs: ".95rem", md: "1.05rem" } }}>
              {t("شرکت تولیدی صنعتی شهاب فر طوس فعالیت خود را از سال ۱۳۷۰ در مشهد آغاز کرد. این مجموعه در زمینه طراحی و تولید قطعات صنعتی پلاستیکی فعالیت داشته و در طول سال‌های فعالیت خود، با تکیه بر تجربه و دانش فنی، دامنه محصولات خود را توسعه داده است. زمینه فعالیت شرکت شامل طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل، قرقره‌های تخت و مخروطی سیم لاکی و انواع بوبین‌های ترانسفورماتور است. این شرکت با رویکردی مبتنی بر کیفیت، نوآوری و پاسخ‌گویی به نیاز مشتریان، برای توسعه محصولات و بهبود مستمر فرایندهای تولید تلاش می‌کند.")}
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="h5" fontWeight={900} textAlign="center" sx={{ mt: 6, mb: 3 }}>{t("حوزه‌های فعالیت")}</Typography>
        <Box sx={{ mb: 5, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" }, gap: 2, alignItems: "stretch" }}>
          {activities.map((activity) => <Card key={activity} elevation={0} sx={{ minWidth: 0, height: "100%", borderRadius: 3, border: "1px solid #e9e9e9", transition: ".25s", overflow: "hidden", "&:hover": { borderColor: "#12a99f", transform: "translateY(-4px)", boxShadow: "0 12px 28px rgba(18,169,159,.09)" } }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 }, minHeight: { md: 190 }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 1.5 }}>
              <PrecisionManufacturingIcon sx={{ color: "#12a99f", fontSize: 42, flexShrink: 0 }} />
              <Typography sx={{ lineHeight: 1.9, fontSize: { xs: 14, md: 14.5 }, overflowWrap: "anywhere", maxWidth: "100%" }}>{t(activity)}</Typography>
            </CardContent>
          </Card>)}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><Card elevation={0} sx={{ height: "100%", borderRadius: 3, bgcolor: "#eaf8f6" }}><CardContent sx={{ p: 3 }}>
            <VerifiedIcon sx={{ color: "#12a99f", fontSize: 36 }} /><Typography variant="h6" fontWeight={900} my={1}>{t("کیفیت و استانداردها")}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 2 }}>{t("پایبندی به کیفیت محصولات و بهبود مستمر فرایندهای تولید، از اولویت‌های مجموعه است.")}</Typography><Divider sx={{ my: 2 }} /><Typography fontWeight={700}>ISO 9001:2008</Typography>
            <Typography variant="caption" color="text.secondary">{t("ذکر این استاندارد در صفحه، منوط به تأیید اعتبار گواهینامه شرکت است.")}</Typography>
          </CardContent></Card></Grid>
          <Grid item xs={12} md={6}><Card elevation={0} sx={{ height: "100%", borderRadius: 3, bgcolor: "#fff", border: "1px solid #e9e9e9" }}><CardContent sx={{ p: 3 }}>
            <TrendingUpIcon sx={{ color: "#12a99f", fontSize: 36 }} /><Typography variant="h6" fontWeight={900} my={1}>{t("چشم‌انداز ما")}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 2 }}>{t("توسعه محصولات، بهره‌گیری از فناوری‌های روز، ارتقای کیفیت و ایجاد همکاری پایدار با مشتریان صنعتی، مسیر آینده شرکت را شکل می‌دهد.")}</Typography>
          </CardContent></Card></Grid>
        </Grid>
        <Box sx={{ mt: 5, p: { xs: 3, md: 4 }, borderRadius: 4, bgcolor: "#303030", color: "#fff", textAlign: "center" }}>
          <Typography variant="h6" fontWeight={800} mb={1}>{t("شهاب فر طوس؛ همراه صنعت")}</Typography><Typography sx={{ color: "#ddd", lineHeight: 2 }}>{t("تجربه چندین‌ساله، تخصص فنی و تعهد به کیفیت، پایه‌های همکاری ما با صنعت هستند.")}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
