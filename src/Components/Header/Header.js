import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Header = () => {
  const [MiddleName, setMiddleName] = useState("");
  const [smallName, setSmallName] = useState("");

  const windowHref = window.location.href;
  const location = useLocation().pathname;

  useEffect(() => {
    if (!!location) {
      let path = location.split("/");
      switch (path[1]) {
        case "acount":
          setMiddleName("회원 관리");
          setSmallName("회원 관리");
          break;
        case "publisher_list":
          setMiddleName("퍼블리셔 관리");
          setSmallName("영역 관리");
          break;
        case "dsp_list":
          setMiddleName("DSP 관리");
          setSmallName("광고 관리");
          break;
        case "media_list":
          setMiddleName("매체 관리");
          setSmallName("매체 리스트");
          break;
        default:
          setMiddleName();
          setSmallName();
          return;
      }
    }
  }, [location]);

  return (
    <>
      <header className="header-wrap">
        <div className="inner d-flex align-items-center">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {!!MiddleName ? (
              <Breadcrumb.Item active>{MiddleName}</Breadcrumb.Item>
            ) : null}
            {!!smallName ? (
              <Breadcrumb.Item href={windowHref} active>
                <span className="small-name">{smallName}</span>
              </Breadcrumb.Item>
            ) : null}
          </Breadcrumb>
        </div>
      </header>
    </>
  );
};

export default Header;
