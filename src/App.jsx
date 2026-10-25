

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Box } from "@mui/material";
import { Navbar, Footer } from "./Components";
import {
  Product,
  ProductDetail,
  Home,
  About,
} from "./Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Box
         sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  }}
      >
        <Navbar />

        <Box
    component="main"
    sx={{
      flex: 1,
      width: "100%",
    }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Product />} />
            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}
