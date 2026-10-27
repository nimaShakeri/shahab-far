
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { products, categories } from "../../data/products";

export default function Product() {
  const navigate = useNavigate();
  const { category } = useParams();

  const selectedCategory = category
    ? categories.find((item) => item.slug === category)
    : null;

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  console.log("Product component rendered");
  console.log("Category:", category);
  console.log("Filtered products:", filteredProducts);

  return (
    <Container
      maxWidth="xl"
      dir="rtl"
      sx={{
        py: 5,
        mt: { xs: 8, sm: 10 },
        minHeight: "50vh",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: "center" }}
      >
        {selectedCategory?.title || (!category ? "محصولات ما" : "دسته‌بندی")}
      </Typography>

      {category && !selectedCategory ? (
        <Typography textAlign="center">
          دسته‌بندی موردنظر پیدا نشد.
        </Typography>
      ) : filteredProducts.length === 0 ? (
        <Typography textAlign="center">
          هنوز محصولی در این دسته ثبت نشده است.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: 3,
          }}
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                height: "100%",
                borderRadius: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: {
                      from: category
                        ? `/products/${category}`
                        : "/shop",
                    },
                  })
                }
                sx={{ height: "100%" }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 230,
                    objectFit: "contain",
                    bgcolor: "#fff",
                    p: 1,
                  }}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, lineHeight: 1.9 }}
                  >
                    {product.description}
                  </Typography>

                  {Number(product.price) > 0 && (
                    <Typography
                      sx={{ mt: 2 }}
                      fontWeight="bold"
                      color="primary"
                    >
                      {Number(product.price).toLocaleString("fa-IR")} تومان
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}
