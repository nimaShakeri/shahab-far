import { useEffect, useRef, useState } from "react";
import {
  AppBar, Toolbar, Box, Button, Container, Menu, MenuItem, Typography,
  Divider, IconButton, Drawer, List, ListItemButton, ListItemText, Chip,
} from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { categories } from "../../data/products";

const accent = "#36c7b8";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const { language, direction, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const open = Boolean(anchorEl);
  const menuItems = [
    { title: t("صفحه اصلی"), link: "/" },
    { title: t("محصولات"), link: "/shop", categories: true },
    { title: t("درباره ما"), link: "/about" },
  ];
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setAnchorEl(null), 400);
  };
  const handleClose = () => {
    cancelClose();
    setAnchorEl(null);
  };

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);
  const categoryTitle = (category) => language === "en" ? category.titleEn : category.title;
  const isActive = (path) => path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const navigationLinks = (
    <>
      {menuItems.map((item) => (
        <Button
          key={item.link}
          component={RouterLink}
          to={item.link}
          onMouseEnter={item.categories ? (event) => { cancelClose(); setAnchorEl(event.currentTarget); } : undefined}
          onMouseLeave={item.categories ? scheduleClose : undefined}
          onClick={item.categories ? (event) => { event.preventDefault(); cancelClose(); setAnchorEl(open ? null : event.currentTarget); } : () => setMobileOpen(false)}
          aria-haspopup={item.categories ? "true" : undefined}
          aria-expanded={item.categories ? open : undefined}
          endIcon={item.categories ? <KeyboardArrowDownRoundedIcon sx={{ transition: ".2s", transform: open ? "rotate(180deg)" : "none" }} /> : undefined}
          sx={{
            position: "relative", color: isActive(item.link) ? accent : "rgba(255,255,255,.82)",
            fontSize: { xs: 15, md: 14 }, fontWeight: 750, minWidth: 0,
            px: { xs: 1.5, md: 1.7 }, py: 1.15, borderRadius: 2, whiteSpace: "nowrap",
            bgcolor: isActive(item.link) ? "rgba(54,199,184,.09)" : "transparent",
            "&:hover": { color: accent, bgcolor: "rgba(54,199,184,.08)" },
          }}
        >{item.title}</Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ top: 0, left: 0, right: 0, width: "100%", bgcolor: "rgba(10,20,22,.91)", color: "#fff", borderBottom: "1px solid rgba(125,208,201,.15)", backdropFilter: "blur(18px)", boxShadow: "0 10px 34px rgba(0,0,0,.13)" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 82 }, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
            <Box component={RouterLink} to="/" aria-label={t("صفحه اصلی")} sx={{ display: "flex", alignItems: "center", gap: 1.25, flexShrink: 0, textDecoration: "none", color: "inherit" }}>
              <Box sx={{ width: { xs: 49, md: 58 }, height: { xs: 49, md: 58 }, display: "grid", placeItems: "center", borderRadius: 2.5, bgcolor: "rgba(255,255,255,.96)", border: "1px solid rgba(255,255,255,.4)" }}>
                <Box component="img" src="/shahab-far-logo.svg" alt="Shahab Far Toos logo" sx={{ width: "92%", height: "92%", objectFit: "contain" }} />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" }, lineHeight: 1.3 }}>
                <Typography sx={{ fontWeight: 900, fontSize: { sm: 13, md: 15 }, letterSpacing: ".01em" }}>{language === "fa" ? "شهاب فر طوس" : "SHAHAB FAR TOOS"}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,.55)", fontSize: 10, mt: .45 }}>{language === "fa" ? "تولید صنعتی و قطعات پلاستیکی" : "INDUSTRIAL MANUFACTURING"}</Typography>
              </Box>
            </Box>

            <Box component="nav" aria-label={language === "fa" ? "منوی اصلی" : "Main navigation"} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: .6, px: .7, py: .65, border: "1px solid rgba(255,255,255,.07)", bgcolor: "rgba(255,255,255,.025)", borderRadius: 3 }}>
              {navigationLinks}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: .5, md: 1 } }}>
              <Button onClick={toggleLanguage} startIcon={<LanguageRoundedIcon />} aria-label={language === "fa" ? "Switch to English" : "تغییر زبان به فارسی"} sx={{ color: accent, border: "1px solid rgba(54,199,184,.32)", minWidth: 0, px: { xs: 1.1, md: 1.4 }, py: .9, borderRadius: 2, fontWeight: 900, whiteSpace: "nowrap", fontSize: 12, "&:hover": { bgcolor: "rgba(54,199,184,.1)", borderColor: accent } }}>{language === "fa" ? "EN" : "فا"}</Button>
              <Button component={RouterLink} to="/about" variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ display: { xs: "none", sm: "inline-flex" }, bgcolor: accent, color: "#092c29", borderRadius: 2, fontWeight: 900, px: 2, py: 1.05, boxShadow: "none", "&:hover": { bgcolor: "#6be0d4", boxShadow: "none" } }}>{t("تماس با شرکت")}</Button>
              <IconButton onClick={() => setMobileOpen(true)} aria-label={t("باز کردن منو")} sx={{ display: { xs: "inline-flex", md: "none" }, color: "#fff", border: "1px solid rgba(255,255,255,.13)", borderRadius: 2, p: 1 }}><MenuRoundedIcon /></IconButton>
            </Box>
          </Toolbar>
        </Container>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseEnter: cancelClose, onMouseLeave: scheduleClose, sx: { p: 0 } }} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }} slotProps={{ paper: { onMouseEnter: cancelClose, onMouseLeave: scheduleClose, sx: { mt: 0, width: { sm: 540, md: 700 }, maxWidth: "calc(100vw - 24px)", bgcolor: "#101c1e", color: "#fff", border: "1px solid rgba(103,212,202,.19)", borderRadius: 3, boxShadow: "0 22px 55px rgba(0,0,0,.4)", overflow: "hidden" } } }}>
          <Box sx={{ p: { xs: 2, sm: 3 }, direction }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 1 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, color: accent }}>{t("دسته‌بندی محصولات")}</Typography>
                <Typography variant="body2" sx={{ color: "#9eaeaf", mt: .5 }}>{t("دسته‌بندی موردنظر خود را انتخاب کنید.")}</Typography>
              </Box>
              <Chip label={`${categories.length} ${language === "fa" ? "دسته" : "categories"}`} size="small" sx={{ color: accent, bgcolor: "rgba(54,199,184,.1)", border: "1px solid rgba(54,199,184,.2)" }} />
            </Box>
            <Divider sx={{ borderColor: "rgba(255,255,255,.1)", my: 2 }} />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1 }}>
              {categories.map((category, index) => (
                <MenuItem key={category.slug} component={RouterLink} to={`/products/${category.slug}`} onClick={handleClose} sx={{ minHeight: 66, whiteSpace: "normal", textAlign: direction === "rtl" ? "right" : "left", borderRadius: 2, border: "1px solid rgba(255,255,255,.07)", bgcolor: "rgba(255,255,255,.035)", transition: "all .2s ease", "&:hover": { bgcolor: "rgba(54,199,184,.09)", borderColor: "rgba(54,199,184,.45)", transform: "translateY(-2px)" } }}>
                  <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 1.5 }}>
                    <Box sx={{ width: 42, height: 42, flexShrink: 0, display: "grid", placeItems: "center", borderRadius: 2, bgcolor: "rgba(54,199,184,.1)" }}><Box component="img" src={["/product1-removebg-preview.png", "/product7-removebg-preview.png", "/product9-removebg-preview.png", "/product12-removebg-preview.png", "/product14-removebg-preview.png"][index % 5]} alt="" sx={{ width: "90%", height: "90%", objectFit: "contain" }} /></Box>
                    <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: 14, fontWeight: 800, lineHeight: 1.8 }}>{categoryTitle(category)}</Typography><Typography sx={{ color: "#8fa2a3", fontSize: 11 }}>{language === "fa" ? "مشاهده محصولات این گروه" : "Explore this product range"}</Typography></Box>
                    <ArrowOutwardRoundedIcon sx={{ fontSize: 17, color: accent }} />
                  </Box>
                </MenuItem>
              ))}
            </Box>
            <Button component={RouterLink} to="/shop" onClick={handleClose} fullWidth sx={{ mt: 2, color: accent, fontWeight: 900 }}>{t("مشاهده همه محصولات")}</Button>
          </Box>
        </Menu>
      </AppBar>

      <Drawer anchor={direction === "rtl" ? "right" : "left"} open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { width: "min(88vw, 360px)", bgcolor: "#101c1e", color: "#fff", p: 2, backgroundImage: "radial-gradient(circle at top right, rgba(54,199,184,.12), transparent 45%)" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}><Box component="img" src="/shahab-far-logo.svg" alt="" sx={{ width: 48, height: 48, objectFit: "contain", bgcolor: "white", borderRadius: 2 }} /><Typography sx={{ fontWeight: 900 }}>{language === "fa" ? "شهاب فر طوس" : "SHAHAB FAR TOOS"}</Typography></Box>
          <IconButton onClick={() => setMobileOpen(false)} aria-label={t("بستن منو")} sx={{ color: "#fff" }}><CloseRoundedIcon /></IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,.12)", mb: 2 }} />
        <List sx={{ p: 0 }}>
          {menuItems.map((item) => <ListItemButton key={item.link} component={RouterLink} to={item.link} onClick={() => setMobileOpen(false)} sx={{ borderRadius: 2, mb: .6, color: isActive(item.link) ? accent : "#f1f6f6", bgcolor: isActive(item.link) ? "rgba(54,199,184,.08)" : "transparent", py: 1.4 }}><ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: 800 }} /></ListItemButton>)}
        </List>
        <Typography sx={{ color: accent, fontWeight: 900, mt: 2, mb: 1 }}>{t("دسته‌بندی محصولات")}</Typography>
        <List sx={{ p: 0 }}>
          {categories.map((category) => <ListItemButton key={category.slug} component={RouterLink} to={`/products/${category.slug}`} onClick={() => setMobileOpen(false)} sx={{ borderRadius: 2, mb: .4, py: 1 }}><ListItemText primary={categoryTitle(category)} primaryTypographyProps={{ fontSize: 13, fontWeight: 600 }} /></ListItemButton>)}
        </List>
        <Button component={RouterLink} to="/about" onClick={() => setMobileOpen(false)} variant="contained" fullWidth sx={{ mt: "auto", bgcolor: accent, color: "#092c29", fontWeight: 900, py: 1.4 }}>{t("تماس با شرکت")}</Button>
      </Drawer>
    </>
  );
}
