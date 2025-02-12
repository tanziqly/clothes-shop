import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { ThemeProvider } from "@/app/providers/theme-provider.tsx";
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
