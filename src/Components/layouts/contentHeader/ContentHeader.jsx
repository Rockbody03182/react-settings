import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContentHeader = () => {
  const location = useLocation().pathname;
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    if (!!location) {
      let path = location.split("/");
      let mapping = path[1]+"/"+path[2];

      switch (mapping) {
        case "member/account":
          setMainTitle("회원 관리");
          setSubTitle("퍼블리셔, DSP, 사내담당자를 등록, 관리 하실 수 있습니다.");
          break;
        case "publisher/lists":
          setMainTitle("영역 현황");
          setSubTitle("퍼블리셔별 영역을 생성·관리하며, 영역을 선택하여 DSP광고를 연결하실 수 있습니다.");
          break;
        case "publisher/listInfo":
          setMainTitle("노출 관리");
          setSubTitle("퍼블리셔 영역별 설정된 DSP사를 확인할 있습니다.");
          break;
        case "dsp/lists":
          setMainTitle("광고 현황");
          setSubTitle("DSP 업체별 광고를 생성하고 관리하실 수 있습니다.");
          break;
        case "media/lists":
          
          setMainTitle("매체 리스트");
          setSubTitle("퍼블리셔/비회원 매체의 현황을 확인하고 매체와 영역을 생성, 관리하실 수 있습니다.");
          break;
        case "stats/lists":
          setMainTitle("일별 통계");
          setSubTitle("일별 모든 퍼블리셔와 DSP의 합산 매입/매출/수익 금액을 조회하실 수 있습니다.");
          break;
        case "stats/publisher":
          setMainTitle("퍼블리셔 정산");
          setSubTitle("설정한 기간에 대하여 퍼블리셔 영역 매입 금액을 상세히 조회하실 수 있습니다.");
          break;
        case "stats/dsp-day":
          setMainTitle("DSP 통계");
          setSubTitle("설정한 기간에 대하여 DSP광고 매출 금액을 날짜별로 상세히 조회하실 수 있습니다.");
          break;
        case "stats/dsp":
          setMainTitle("DSP 정산");
          setSubTitle("설정한 기간에 대하여 DSP광고 매출 금액을 상세히 조회하실 수 있습니다.");
          break;
        case "etc/zonetype":
          setMainTitle("영역 타입");
          setSubTitle("영역 카테고리를 등록/수정할 수 있습니다.");
          break;
        default:
          setMainTitle("대시보드");
          setSubTitle("간단 통계를 볼 수 있습니다.");
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
