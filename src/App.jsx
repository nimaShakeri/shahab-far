
import { Navigate, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { Navbar, Footer } from "./Components";
import { Product, ProductDetail, Home, About } from "./Pages";
import theme from "./Them";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Navbar />

        <Box component="main" sx={{ flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
