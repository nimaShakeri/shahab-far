import { Box, Card, CardActionArea, Container, Typography, Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useNavigate, useParams } from "react-router-dom";
import { products, categories } from "../../data/products";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Product() {
  const navigate = useNavigate();
  const { category } = useParams();
  const { language, direction, t } = useLanguage();
  const selectedCategory = category ? categories.find((item) => item.slug === category) : null;
  const filteredProducts = category ? products.filter((product) => product.category === category) : products;
  const productTitle = (product) => language === "en" ? product.titleEn || product.title : product.title;
  const productDescription = (product) => language === "en" ? product.descriptionEn || product.description : product.description;

  return (
    <Container maxWidth="xl" dir={direction} sx={{ py: 5, mt: { xs: 8, sm: 10 }, minHeight: "50vh" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="overline" sx={{ color: "#12a99f", fontWeight: 900, letterSpacing: ".12em" }}>{language === "fa" ? "کاتالوگ محصولات" : "PRODUCT CATALOG"}</Typography>
        <Typography variant="h4" component="h1" fontWeight={900} sx={{ mt: .5, mb: 1.2 }}>
          {selectedCategory ? (language === "en" ? selectedCategory.titleEn : selectedCategory.title) : (!category ? t("محصولات ما") : t("دسته‌بندی"))}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 650, mx: "auto", lineHeight: 2 }}>{language === "fa" ? "برای مشاهده مشخصات هر محصول، نشانگر را روی کارت آن قرار دهید." : "Hover over a product card to preview its specifications."}</Typography>
      </Box>
      {category && !selectedCategory ? <Typography textAlign="center">{t("دسته‌بندی موردنظر پیدا نشد.")}</Typography>
        : filteredProducts.length === 0 ? <Typography textAlign="center">{t("هنوز محصولی در این دسته ثبت نشده است.")}</Typography>
        : <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }, gap: { xs: 2, md: 2.5 }, alignItems: "stretch" }}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-hover-card" dir={direction} sx={{ height: { xs: 350, md: 370 }, minWidth: 0, borderRadius: 3, overflow: "hidden", border: "1px solid #e5eeec", bgcolor: "#fff", boxShadow: "0 8px 24px rgba(21,52,52,.055)", transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease", "&:hover": { transform: "translateY(-5px)", boxShadow: "0 18px 40px rgba(21,52,52,.13)", borderColor: "rgba(18,169,159,.5)" }, "& .product-detail-pane": { width: 0, opacity: 0, overflow: "hidden", p: 0, transition: "width .32s ease, opacity .2s ease, padding .32s ease" }, "& .product-image-pane": { width: "100%", transition: "width .32s ease", minWidth: 0 }, "& .product-card-image": { transition: "transform .32s ease" }, "&:hover .product-detail-pane, &:focus-within .product-detail-pane": { width: "48%", opacity: 1, p: 2 }, "&:hover .product-image-pane, &:focus-within .product-image-pane": { width: "52%" }, "&:hover .product-card-image, &:focus-within .product-card-image": { transform: "scale(.92)" } }}>
              <CardActionArea onClick={() => navigate(`/product/${product.id}`, { state: { from: category ? `/products/${category}` : "/shop" } })} aria-label={`${t("مشاهده جزئیات")}: ${productTitle(product)}`} sx={{ height: "100%", display: "flex", flexDirection: "row", alignItems: "stretch", overflow: "hidden", "&:hover .product-open-link": { color: "#078c83" } }}>
                <Box className="product-detail-pane" sx={{ flex: "0 0 auto", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", bgcolor: "#f0faf8", borderInlineEnd: "1px solid #d9efeb", boxSizing: "border-box" }}>
                  <Typography sx={{ color: "#078c83", fontSize: 10, fontWeight: 900, letterSpacing: ".08em", mb: .7 }}>{language === "fa" ? `محصول ${String(product.id).padStart(2, "0")}` : `PRODUCT ${String(product.id).padStart(2, "0")}`}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 15 }, fontWeight: 900, lineHeight: 1.6, overflowWrap: "anywhere", mb: 1 }}>{productTitle(product)}</Typography>
                  <Typography sx={{ fontSize: { xs: 10, md: 11 }, lineHeight: 1.9, color: "#526466", display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden", overflowWrap: "anywhere" }}>{productDescription(product)}</Typography>
                  <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: .5, color: "#078c83", fontSize: 11, fontWeight: 900 }} className="product-open-link">{t("مشاهده جزئیات")} <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} /></Box>
                </Box>
                <Box className="product-image-pane" sx={{ position: "relative", flex: "0 0 auto", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", p: 1.5, boxSizing: "border-box", bgcolor: "#fff" }}>
                  <Box component="img" className="product-card-image" src={product.image} alt={productTitle(product)} loading="lazy" sx={{ width: "100%", height: "78%", objectFit: "contain", minHeight: 0 }} />
                  <Box sx={{ width: "100%", mt: "auto", pt: 1.2, borderTop: "1px solid #edf2f1", textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: 14, md: 15 }, lineHeight: 1.5 }}>{productTitle(product)}</Typography>
                    <Typography sx={{ color: "#078c83", fontSize: 11, fontWeight: 800, mt: .3 }}>{language === "fa" ? "مشاهده مشخصات" : "View specifications"}</Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>}
      <style>{`@media (hover: none) { .product-hover-card .product-detail-pane { width: 0 !important; opacity: 0 !important; padding: 0 !important; } .product-hover-card .product-image-pane { width: 100% !important; } }`}</style>
    </Container>
  );
}
