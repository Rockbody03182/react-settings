import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContentHeader = () => {
  const location = useLocation().pathname;
  const [mainTitle, setMainTile] = useState("");
  const [subTitle, setSubTile] = useState("");

  useEffect(() => {
    if (!!location) {
      let path = location.split("/");
      switch (path[1]) {
        case "acount":
          setMainTile("회원 리스트");
          setSubTile("회원 분류별 생성과 수정을 할 수 있습니다.");
          break;
        case "publisher_list":
          setMainTile("영역 현황");
          setSubTile("텍스트를 입력하세요.");
          break;
        case "dsp_list":
          setMainTile("광고 현황");
          setSubTile("텍스트를 입력하세요.");
          break;
        case "media_list":
          setMainTile("매체 리스트");
          setSubTile("텍스트를 입력하세요.");
          break;
        default:
          setMainTile("대시보드");
          setSubTile("간단 통계를 볼 수 있습니다.");
          return;
      }
    }
  }, [location]);

  return (
    <div className="jumbotron carousel">
      <div className="container-fluid d-flex align-items-center">
        <h2>{mainTitle}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};
export default ContentHeader;
