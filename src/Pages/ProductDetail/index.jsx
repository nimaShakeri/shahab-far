

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Container
        maxWidth="md"
        dir="rtl"
        sx={{ py: 6, textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          محصول موردنظر پیدا نشد.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/shop")}
        >
          بازگشت به صفحه محصولات
        </Button>
      </Container>
    );
  }

  return (
    
 <Box
  dir="rtl"
  sx={{
    width: "100%",
    boxSizing: "border-box",
    px: { xs: 2, sm: 4, md: 6 },
    pt: { xs: 12, sm: 14 },
    pb: { xs: 4, sm: 6 },
  }}
>
      <Container maxWidth="lg" disableGutters>
        {/* کادر اصلی محصول */}
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            p: { xs: 2, sm: 4, md: 5 },
            borderRadius: 3,
            bgcolor: "#fff",
            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 10px 32px rgba(0,0,0,0.18)",
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 3, md: 5 },
              alignItems: "center",
            }}
          >
            {/* عکس محصول */}
 <Box
  sx={{
    width: "100%",
    height: { xs: 280, sm: 350, md: 400 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "#f7f7f7",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
  }}
>
  <img
    src={product.image}
    alt={product.title}
    style={{
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
    
  />
</Box>

            {/* اطلاعات محصول */}
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  overflowWrap: "anywhere",
                }}
              >
                {product.title}
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  lineHeight: 2.2,
                  whiteSpace: "pre-line",
                  overflowWrap: "anywhere",
                }}
              >
                {product.description}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 3 }}
              >
                شناسه محصول: {product.id}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* دکمه بازگشت در پایین و وسط */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 },
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            بازگشت به صفحه محصولات
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
