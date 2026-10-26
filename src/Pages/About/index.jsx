
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const activities = [
  "طراحی و تولید انواع قرقره‌های صنعتی سیم و کابل",
  "تولید قرقره‌های تخت و مخروطی سیم لاکی",
  "طراحی و تولید انواع بوبین‌های ترانسفورماتور",
];

export default function About() {
  return (
    <Box  dir="rtl"
  sx={{
    bgcolor: "#fafafa",
    pt: { xs: 8, md: 10 },
    pb: { xs: 4, md: 8 },
  }}>
      <Container maxWidth="lg">
        {/* عنوان صفحه */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{ color: "#12a99f", fontWeight: 700 }}
          >
            درباره مجموعه ما
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mt: 1, mb: 2 }}
          >
            شرکت تولیدی صنعتی شهاب فر طوس
          </Typography>

          <Box
            sx={{
              width: 70,
              height: 4,
              bgcolor: "#12a99f",
              mx: "auto",
              borderRadius: 5,
            }}
          />
        </Box>

        {/* تصویر مدیر شرکت */}
        <Box
          sx={{
            maxWidth: 430,
            mx: "auto",
            mb: 6,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              p: 1,
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: "0 8px 35px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              component="img"
              src="/product1-removebg-preview.png"
              alt="مدیر شرکت شهاب فر طوس"
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                borderRadius: 3,
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 700 }}>
            مدیریت شرکت شهاب فر طوس
          </Typography>

          <Typography color="text.secondary" variant="body2">
            تجربه، تخصص و تعهد به کیفیت
          </Typography>
        </Box>

        {/* تاریخچه شرکت */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid #e9e9e9",
            mb: 4,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <BusinessIcon sx={{ color: "#12a99f", fontSize: 32 }} />
              <Typography variant="h5" fontWeight={800}>
                تاریخچه شرکت
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 2.4,
                textAlign: "justify",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              شرکت تولیدی صنعتی شهاب فر طوس فعالیت خود را از
              سال ۱۳۷۰ در مشهد آغاز کرد. این مجموعه در زمینه طراحی
              و تولید قطعات صنعتی پلاستیکی فعالیت داشته و در طول
              سال‌های فعالیت خود، با تکیه بر تجربه و دانش فنی،
              دامنه محصولات خود را توسعه داده است.
              {" "}
              زمینه فعالیت شرکت شامل طراحی و تولید انواع
              قرقره‌های صنعتی سیم و کابل، قرقره‌های تخت و مخروطی
              سیم لاکی و انواع بوبین‌های ترانسفورماتور است.
              {" "}
              این شرکت با رویکردی مبتنی بر کیفیت، نوآوری و
              پاسخ‌گویی به نیاز مشتریان، برای توسعه محصولات و
              بهبود مستمر فرایندهای تولید تلاش می‌کند.
            </Typography>
          </CardContent>
        </Card>

        {/* حوزه فعالیت */}
        <Typography
          variant="h5"
          fontWeight={800}
          textAlign="center"
          sx={{ mt: 6, mb: 3 }}
        >
          حوزه‌های فعالیت
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {activities.map((activity) => (
            <Grid item xs={12} md={4} key={activity}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #e9e9e9",
                  transition: "0.25s",
                  "&:hover": {
                    borderColor: "#12a99f",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <PrecisionManufacturingIcon
                    sx={{ color: "#12a99f", fontSize: 42, mb: 2 }}
                  />
                  <Typography sx={{ lineHeight: 2 }}>
                    {activity}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* کیفیت و چشم‌انداز */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{ height: "100%", borderRadius: 3, bgcolor: "#eaf8f6" }}
            >
              <CardContent sx={{ p: 3 }}>
                <VerifiedIcon sx={{ color: "#12a99f", fontSize: 36 }} />
                <Typography variant="h6" fontWeight={800} my={1}>
                  کیفیت و استانداردها
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  پایبندی به کیفیت محصولات و بهبود مستمر فرایندهای
                  تولید، از اولویت‌های مجموعه است.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography fontWeight={700}>
                  ISO 9001:2008
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ذکر این استاندارد در صفحه، منوط به تأیید اعتبار
                  گواهینامه شرکت است.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{ height: "100%", borderRadius: 3, bgcolor: "#fff" ,
                border: "1px solid #e9e9e9" }}
            >
              <CardContent sx={{ p: 3 }}>
                <TrendingUpIcon sx={{ color: "#12a99f", fontSize: 36 }} />
                <Typography variant="h6" fontWeight={800} my={1}>
                  چشم‌انداز ما
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  توسعه محصولات، بهره‌گیری از فناوری‌های روز،
                  ارتقای کیفیت و ایجاد همکاری پایدار با مشتریان
                  صنعتی، مسیر آینده شرکت را شکل می‌دهد.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* پیام پایانی */}
        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "#303030",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={1}>
            شهاب فر طوس؛ همراه صنعت
          </Typography>
          <Typography sx={{ color: "#ddd", lineHeight: 2 }}>
            تجربه چندین‌ساله، تخصص فنی و تعهد به کیفیت،
            پایه‌های همکاری ما با صنعت هستند.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

