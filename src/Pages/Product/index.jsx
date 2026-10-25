import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

export default function Product() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }} dir="rtl">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: "center" }}
      >
        محصولات ما
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              height: "100%",
              borderRadius: 2,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea
              onClick={() => navigate(`/product/${product.id}`)}
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
    borderRadius: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
  }}
/>

              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.9,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.description}
                </Typography>

                {product.price > 0 && (
                  <Typography
                    sx={{ mt: 2 }}
                    fontWeight="bold"
                    color="primary"
                  >
                    {product.price.toLocaleString("fa-IR")} تومان
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
