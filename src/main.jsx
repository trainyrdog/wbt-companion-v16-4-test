import React from "react";
import { createRoot } from "react-dom/client";
import WBTCompanionApp from "./App.jsx";
import "./styles.css";
import { registerServiceWorker } from "./pwa-register.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WBTCompanionApp />
  </React.StrictMode>
);

registerServiceWorker();
