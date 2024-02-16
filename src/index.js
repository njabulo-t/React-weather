import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import App from "./Footer";
import Header from "./Header";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Header />
  <Weather />
    <App />
  </StrictMode>
);

