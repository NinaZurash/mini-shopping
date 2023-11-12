import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { ProductsProvider } from "@/providers/products/ProductsProvider.tsx";
import { ThemeProvider } from "@/providers/theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>,
);
