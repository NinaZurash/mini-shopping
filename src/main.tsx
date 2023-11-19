import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { ProductsProvider } from "@/providers/products/ProductsProvider.tsx";
import { ThemeProvider } from "@/providers/theme/ThemeProvider.tsx";
import { UserProvider } from "@/providers/user/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <UserProvider>
        <ProductsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
);
