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
      let mapping = path[1]+"/"+path[2];

      switch (mapping) {
        case "member/account":
          setMiddleName("회원 관리");
          setSmallName("회원 관리");
          break;
        case "publisher/lists":
          setMiddleName("퍼블리셔 관리");
          setSmallName("영역 현황");
          break;
        case "publisher/listInfo":
          setMiddleName("퍼블리셔 관리");
          setSmallName("노출 관리");
          break;
        case "dsp/lists":
          setMiddleName("DSP 관리");
          setSmallName("광고 관리");
          break;
        case "media/lists":
          setMiddleName("매체 관리");
          setSmallName("영역 관리");
          break;
        case "stats/lists":
          setMiddleName("통계/정산 관리");
          setSmallName("일별 통계");
          break;
        case "stats/publisher":
          setMiddleName("통계/정산 관리");
          setSmallName("퍼블리셔 정산");
          break;
        case "stats/dsp-day":
          setMiddleName("통계/정산 관리");
          setSmallName("DSP 통계");
          break;
        case "stats/dsp":
          setMiddleName("통계/정산 관리");
          setSmallName("DSP 정산");
          break;
        case "etc/zonetype":
          setMiddleName("기타 설정");
          setSmallName("영역 타입");
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
            {/* <Breadcrumb.Item href="/">Home</Breadcrumb.Item> */}
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
