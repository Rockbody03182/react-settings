import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = ({ header }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const [userId, setUserId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호

  const handleUsernameChange = (e) => {
    setUserId(e.target.value); // 사용자 아이디 입력 시 state 업데이트
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 비밀번호 입력 시 state 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    const textId = "admin";
    const correctPassword = "park2023!!";

    if (userId === textId && password === correctPassword) {
      // // 로그인 성공 시 쿠키에 토큰 저장
      setCookie("auth", "data.token", { path: "/" });
      // // 세션에 사용자 정보 저장
      sessionStorage.setItem("user", JSON.stringify("data.user"));
      // 로그인 성공 시 로그인 상태를 업데이트하고, 콜백 함수를 호출하여 로그인 상태를 알립니다.
      if (typeof onLogin === "function") {
        header(true);
      }
      alert("로그인 성공!");
      navigate("/");
    } else {
      // 로그인 실패 시 에러 처리를 진행합니다.
      alert("로그인 실패!");
    }
  };
  return (
    <div className="login_wrap d-flex justify-content-center align-items-center">
      <div className="login_box d-flex">
        <div className="login_box__title">
          <div className="adtive_logo">ADTIVE SSP</div>
          <h1>애드티브 SSP 관리자</h1>
          <p>
            애드티브의 매체 영역 잔여 인벤토리를 관리하고 광고수익을 극대화
            하기위해
            <br />
            다양한 관리기능을 제공합니다.
          </p>
          <span className="copyright">
            @ Copyright 2022 Adtive Innovation. All rights reserved.
          </span>
        </div>
        <div className="login_box__form">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h2 className="text-primary">로그인</h2>
            <div className="form_wrap">
              <div className="com_box id_box form-group">
                <label htmlFor="inputID" className="input_tit">
                  ID
                </label>
                <input
                  type="text"
                  id="inputID"
                  name="userid"
                  className="form-control"
                  placeholder="아이디를 입력해주세요."
                  defaultValue={userId}
                  required=""
                  autoFocus=""
                  autoComplete="new-password"
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="com_box pass_box form-group">
                <label htmlFor="inputPassword" className="input_tit">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  name="userpass"
                  className="form-control"
                  placeholder="패스워드를 입력해주세요."
                  defaultValue={password}
                  required=""
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                />
              </div>
              {/* 						
								<div className="err_msg" style="color: red">
									에러메세지입니다. 추후에 아래의 php코드를 이용하세요.
								</div> */}
              <button type="submit" className="btn btn-primary">
                시작하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
