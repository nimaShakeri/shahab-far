import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
} from "@mui/material";

export default function Navbar() {
  const menuItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "فروشگاه", link: "/shop" },
    { title: "درباره ما", link: "/About" },
  ];

  return (
    <AppBar
        position="fixed"
  elevation={0}
  sx={{
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    m: 0,
    p: 0,
    backgroundColor: "#000",
    color: "#fff",
      }}
    >
      <Container maxWidth="lg"
  sx={{
    width: "100%",
  }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", sm: "76px", md: "84px" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          {/* لوگو سمت راست */}
          <Box
            component="a"
            href="/"
            aria-label="صفحه اصلی"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/photo_2026-10-19_16-50-03-removebg-preview.png" // آدرس لوگوی خودت را وارد کن
              alt="Logo"
              sx={{
                width: { xs: 75, sm: 80, md: 100 },
                height: { xs: 75, sm: 80, md: 100},
                objectFit: "contain",
              }}
            />
          </Box>

          {/* منوی ریسپانسیو */}
          <Box
            component="nav"
            aria-label="منوی اصلی"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: { xs: 0, sm: 1, md: 2 },
              minWidth: 0,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.link}
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },
                  fontWeight: 500,
                  minWidth: 0,
                  px: { xs: 0.8, sm: 1.5, md: 2 },
                  py: 1,
                  whiteSpace: "nowrap",
                  borderRadius: "6px",
                  "&:hover": {
                    color: "#bdbdbd",
                    backgroundColor: "#222",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
