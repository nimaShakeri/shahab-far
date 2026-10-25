
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const email = "nshakeri83.2@gmail.com";
  const phone = "05135413300";

  // شماره واقعی واتساپ را جایگزین کن
  const whatsappLink = "https://wa.me/989155254176";

  const iconStyle = {
    fontSize: 27,
    flexShrink: 0,
  };

  const linkStyle = {
    color: "#fff",
    fontSize: { xs: "15px", sm: "16px", md: "17px" },
    lineHeight: 1.8,
    overflowWrap: "anywhere",
    textAlign: "right",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1.5,
    mb: 2,
    minWidth: 0,
  };

  return (
 
<Box
  component="footer"
  dir="rtl"
  sx={{
    width: "100%",
    boxSizing: "border-box",
    bgcolor: "#000",
    color: "#fff",
    mt: 0,
    mx: 0,
    flexShrink: 0,
    py: { xs: 4, sm: 5 },
  }}
>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            columnGap: 5,
            rowGap: 4,
          }}
        >
          {/* اطلاعات تماس */}
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 22 },
                fontWeight: "bold",
                mb: 3,
              }}
            >
              اطلاعات تماس
            </Typography>

            <Box sx={rowStyle}>
              <LocationOnIcon sx={iconStyle} />

              <Typography sx={linkStyle}>
                شهرک صنعتی توس، فاز یک، بلوار تلاش شمالی،
                نبش تلاش ۸
              </Typography>
            </Box>

            <Box sx={rowStyle}>
              <PhoneIcon sx={iconStyle} />

              <Link
                href={`tel:${phone}`}
                underline="hover"
                sx={{
                  ...linkStyle,
                  direction: "ltr",
                }}
              >
                {phone}
              </Link>
            </Box>
          </Box>

          {/* راه های ارتباطی */}
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 22 },
                fontWeight: "bold",
                mb: 3,
              }}
            >
              ارتباط با ما
            </Typography>

            <Box sx={rowStyle}>
              <IconButton
                component="a"
                href={`mailto:${email}`}
                aria-label="ارسال ایمیل"
                sx={{
                  p: 0,
                  width: 27,
                  height: 30,
                  flexShrink: 0,
                  color: "#fff",
                  "&:hover": { color: "#90caf9" },
                }}
              >
                <EmailIcon sx={iconStyle} />
              </IconButton>

              <Link
                href={`mailto:${email}`}
                underline="hover"
                sx={linkStyle}
              >
                {email}
              </Link>
            </Box>

            <Box sx={rowStyle}>
              <IconButton
                component="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="پیام در واتساپ"
                sx={{
                  p: 0,
                  width: 27,
                  height: 30,
                  flexShrink: 0,
                  color: "#25D366",
                  "&:hover": { color: "#4bea87" },
                }}
              >
                <WhatsAppIcon sx={iconStyle} />
              </IconButton>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={linkStyle}
              >
             پیام در واتساپ
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#333", my: 3 }} />

        <Typography
          sx={{
            color: "#aaa",
            textAlign: "center",
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 2,
          }}
        >
          تمامی حقوق این وب‌سایت محفوظ است ©{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
