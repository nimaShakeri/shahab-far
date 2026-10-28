import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: 'Vazirmatn, Inter, Arial, sans-serif' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { minHeight: "100%" },
        body: { minHeight: "100vh", fontFamily: 'Vazirmatn, Inter, Arial, sans-serif' },
        "*, *::before, *::after": { boxSizing: "border-box" },
      },
    },
  },
});

export default theme;
