import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css"; // reset css UI 침해시 삭제
import "./styles/common.css";
import "./styles/style.css";
import "./styles/font.css";

createRoot(document.getElementById("root")).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
