import React from "react";
// components
import Header from "../Components/Header/Header"; // Header
import Aside from "../Components/Aside/Aside"; // Aside
import Footer from "../Components/Footer/Footer"; // Footer

// css
import "../css/reset.css"; // reset css UI 침해시 삭제
import "../css/common.css";
import "../css/style.css";

export default function Home() {
  return (
    <div className="body-box">
      <Aside />
      <div className="content-box">
        <Header />
        <div className="content-box"></div>
        <Footer />
      </div>
    </div>
  );
}
