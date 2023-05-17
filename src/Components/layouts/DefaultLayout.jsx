import React from "react";
import {
  AppContent,
  Header,
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
      </div>
    </div>
  );
};

export default DefaultLayout;
