import React from "react";
import {
  AppContent,
  Header,
  Footer,
  Aside,
  ContentHeader,
} from "../Pull/index";

const DefaultLayout = () => {
  return (
    <div className="page--auction">
      <div id="wrap">
        <Aside />
        <Header />
        <div className="main-container">
          <ContentHeader />
          <AppContent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
