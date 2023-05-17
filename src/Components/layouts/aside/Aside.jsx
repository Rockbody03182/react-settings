import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gnb_corp, gnb_admin } from "../../Pull/export";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { ApiCaller } from "../../Api/api-caller";
import { useCookies } from "react-cookie";

const Aside = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const [status, setStatus] = useState(false);
  const [btnCheck, setBtnCheck] = useState(false);

  // 어드민 로그아웃 처리
  const Terminate = async () => {
    console.log(cookies.auth);
    if (cookies.auth === "data.token") {
      alert("로그아웃 처리되었습니다.");
      removeCookie("auth", { path: "/" });
      navigate("/Login");
    }
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
              to="/member/account"
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
          <ul className="area-user d-flex align-items-center mb-4">
            <li className="flex-grow-1 d-flex align-items-center" 
            style={{justifyContent:"space-between", paddingBottom:"10px"}}>
              <p className="d-flex align-items-center">
                <i className="ico-user">
                  <img src={gnb_admin} alt="aside"></img>
                </i>
                <span>관리자</span>
              </p>
              <Button
                className="btn f-dotum"
                type="button"
                onClick={(e) => Terminate()}
                style={{border:"none"}}
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
                  to={"/member/account"}
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
                  to={"/publisher/lists"}
                  style={{ color: btnCheck === 2 ? "#d89dff" : "#c8ccd2" }}
                >
                  영역 현황
                </Link>
              </dd>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(3);
                  }}
                  to={"/publisher/listInfo"}
                  style={{ color: btnCheck === 3 ? "#d89dff" : "#c8ccd2" }}
                >
                  노출 관리
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>DSP 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(4);
                  }}
                  to={"/dsp/lists"}
                  style={{ color: btnCheck === 4 ? "#d89dff" : "#c8ccd2" }}
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
                    setBtnCheck(5);
                  }}
                  to={"/media/lists"}
                  style={{ color: btnCheck === 5 ? "#d89dff" : "#c8ccd2" }}
                >
                  매체 리스트
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>통계/정산 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(6);
                  }}
                  to={"/stats/lists"}
                  style={{ color: btnCheck === 6 ? "#d89dff" : "#c8ccd2" }}
                >
                  일별 통계
                </Link>
              </dd>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(7);
                  }}
                  to={"/stats/publisher"}
                  style={{ color: btnCheck === 7 ? "#d89dff" : "#c8ccd2" }}
                >
                  퍼블리셔 정산
                </Link>
              </dd>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(8);
                  }}
                  to={"/stats/dsp-day"}
                  style={{ color: btnCheck === 8 ? "#d89dff" : "#c8ccd2" }}
                >
                  DSP 통계
                </Link>
              </dd>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(9);
                  }}
                  to={"/stats/dsp"}
                  style={{ color: btnCheck === 9 ? "#d89dff" : "#c8ccd2" }}
                >
                  DSP 정산
                </Link>
              </dd>
            </dl>
            <dl className="gnb_cell clearfix">
              <dt>기타 관리</dt>
              <dd>
                <Link
                  onClick={(e) => {
                    setStatus(!status);
                    setBtnCheck(10);
                  }}
                  to={"/etc/zonetype"}
                  style={{ color: btnCheck === 10 ? "#d89dff" : "#c8ccd2" }}
                >
                  영역 타입
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
