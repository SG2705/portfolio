import { createRoot } from "react-dom/client";

import LocaleProvider from "./i18n/LocaleProvider";
import App from "./App";

import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
);
