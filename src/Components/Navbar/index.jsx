
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const menuItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "محصولات", link: "/products", mega: true },
    { title: "درباره ما", link: "/About" },
  ];

  const productCategories = [
    {
      title: "قرقره های سیم‌لاکی",
      link: "/products/gargare-sim-laki",
    },
    {
      title: "قرقره های سالنی سیم و کابل",
      link: "/products/gargare-saloni",
    },
    {
      title: "قرقره های محصولی سیم و کابل",
      link: "/products/gargare-mahsouli",
    },
    {
      title: "قرقره های رانژه",
      link: "/products/gargare-ranje",
    },
    {
      title: "سبد و جعبه‌های صنعتی",
      link: "/products/industrial-baskets-boxes",
    },
  ];

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        borderBottom: "1px solid #222",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: "64px",
              sm: "76px",
              md: "84px",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
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
              src="/photo_2026-10-19_16-50-03-removebg-preview.png"
              alt="Logo"
              sx={{
                width: { xs: 65, sm: 80, md: 100 },
                height: { xs: 65, sm: 80, md: 100 },
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Navigation */}
          <Box
            component="nav"
            aria-label="منوی اصلی"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0, sm: 1, md: 2 },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.title}
                component={RouterLink}
                to={item.link}
                onMouseEnter={
                  item.mega ? handleOpen : undefined
                }
                onClick={
                  item.mega
                    ? (event) => {
                        if (!open) handleOpen(event);
                        else handleClose();
                      }
                    : undefined
                }
                aria-haspopup={item.mega ? "true" : undefined}
                aria-expanded={
                  item.mega ? open : undefined
                }
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "13px",
                    sm: "16px",
                    md: "19px",
                  },
                  fontWeight: 500,
                  minWidth: 0,
                  px: { xs: 0.8, sm: 1.5, md: 2 },
                  py: 1,
                  whiteSpace: "nowrap",
                  borderRadius: "6px",
                  "&:hover": {
                    color: "#d4af37",
                    backgroundColor: "#171717",
                  },
                }}
              >
                {item.title}
                {item.mega && (
                  <Box
                    component="span"
                    sx={{ mr: 0.8, fontSize: 12 }}
                  >
                    {open ? "▲" : "▼"}
                  </Box>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Mega Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
          sx: { p: 0 },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: {
                xs: "calc(100vw - 24px)",
                sm: 520,
                md: 760,
              },
              maxWidth: "calc(100vw - 24px)",
              backgroundColor: "#101010",
              color: "#fff",
              border: "1px solid #2b2b2b",
              borderRadius: "12px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#d4af37",
              mb: 1,
              textAlign: "right",
            }}
          >
            دسته‌بندی محصولات
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              mb: 2,
              textAlign: "right",
            }}
          >
            دسته‌بندی موردنظر خود را انتخاب کنید.
          </Typography>

          <Divider sx={{ borderColor: "#303030", mb: 1 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 1,
              direction: "rtl",
            }}
          >
            {productCategories.map((category, index) => (
              <MenuItem
                key={category.link}
                component={RouterLink}
                to={category.link}
                onClick={handleClose}
                sx={{
                  minHeight: 58,
                  whiteSpace: "normal",
                  textAlign: "right",
                  borderRadius: "8px",
                  border: "1px solid #252525",
                  backgroundColor: "#171717",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#242424",
                    borderColor: "#d4af37",
                    color: "#d4af37",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#29230f",
                      color: "#d4af37",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 14 },
                      fontWeight: 500,
                      lineHeight: 1.8,
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Box>
        </Box>
      </Menu>
    </AppBar>
  );
}
