import { React } from "react";
import { ReactDOM } from "react-dom/client";
import "./styles.css";
import "./index.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather city="Dallas" />
  </StrictMode>
);
