import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gnb_corp, gnb_admin } from "../Pull/export";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { ApiCaller } from "../../Api/api-caller";
// import { useCookies } from "react-cookie";
// 코인 물타기 계산기 Component

const Aside = () => {
  // const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const [status, setStatus] = useState(false);
  const [btnCheck, setBtnCheck] = useState(false);

  // 어드민 로그아웃 처리
  const Terminate = async () => {
    alert("로그아웃 처리되었습니다.");
    // try {

    //   const URL = `${process.env.REACT_APP_BACKEND_URL}/api/admin-signout`;
    //   const dataBody = {
    //     login_id: cookies.authID,
    //     token: cookies.auth,
    //   };
    //   const headers = {
    //     "Content-Type": "multipart/form-data",
    //     Accept: "*/*",
    //   };

    //   const res = await ApiCaller.post(URL, dataBody, true, headers);
    //   console.log("response data...", res);

    //   if (res.data.success) {
    //     removeCookie("authID", { path: "/" });
    //     removeCookie("auth", { path: "/" });

    //     navigate("/login");
    //   }
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

  useEffect(() => {
    setBtnCheck(btnCheck);
  }, [btnCheck]);

  return (
    <>
      <div id="aside-wrap" className="aside-wrap">
        <div className="sidebar-header">
          <h1>
            <Link
              className={status === false ? "" : "active-logo"}
              onClick={(e) => {
                setStatus(false);
                setBtnCheck(0);
              }}
              to="/"
            ></Link>
          </h1>
        </div>
        <div className="sidebar-basic d-flex">
          <div className="flex-grow-1 d-flex align-items-center">
            <Button
              type="button"
              id="sidebarCollapse"
              className="btn p-0"
              onClick={(e) => setStatus(!status)}
            >
              <span>Toggle Sidebar</span>
            </Button>
          </div>
          <div className="pb-3">
            <img src={gnb_corp} alt="" />
          </div>
        </div>
        <div
          className="sidebar-expend"
          style={{ marginLeft: status === false ? "-350px" : "100px" }}
        >
          <ul className="area-user d-flex align-items-center mb-4 pb-1">
            <li className="flex-grow-1 d-flex align-items-center">
              <i className="ico-user">
                <img src={gnb_admin} alt="aside"></img>
              </i>
              <span>관리자</span>
            </li>
            <li>
              <Button
                className="btn f-dotum"
                type="button"
                onClick={(e) => Terminate()}
              >
                Sign out
              </Button>
            </li>
          </ul>
          <div className="area_gnb">
            <dl className="gnb_cell clearfix">
              <dt>회원 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(1);
                  }}
                  to={"/acount"}
                  style={{ color: btnCheck === 1 ? "#d89dff" : "#c8ccd2" }}
                >
                  회원 관리
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>퍼블리셔 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(2);
                  }}
                  to={"/publisher_list"}
                  style={{ color: btnCheck === 2 ? "#d89dff" : "#c8ccd2" }}
                >
                  영역 관리
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>DSP 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(3);
                  }}
                  to={"/dsp_list"}
                  style={{ color: btnCheck === 3 ? "#d89dff" : "#c8ccd2" }}
                >
                  {/* <Link onClick={(e) => setStatus(!status)} to={encodeURIComponent("/DSP/DspList")}> */}
                  광고 관리
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>매체 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(4);
                  }}
                  to={"/media_list"}
                  style={{ color: btnCheck === 4 ? "#d89dff" : "#c8ccd2" }}
                >
                  매체 리스트
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>통계/정산 관리</dt>
              <dd>일별 통계</dd>
              <dd>퍼블리셔 정산</dd>
              <dd>DSP 정산</dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>시스템 관리(협의 후 개발)</dt>
              <dd>외부데이터 관리</dd>
              <dd>기타 데이터 설정</dd>
              <dd>통계</dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>퍼블리셔 회원</dt>
              <dd>회원 정보</dd>
              <dd>광고 영역</dd>
              <dd>일별 수익</dd>
              <dd>영역별 기간 수익</dd>
              <dd>월별 수익</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
