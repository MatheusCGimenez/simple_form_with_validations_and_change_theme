import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// CONTEXTS
import { ChangeThemeContextProvider } from "./contexts/ChangeThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChangeThemeContextProvider>
      <App />
    </ChangeThemeContextProvider>
  </StrictMode>
);
