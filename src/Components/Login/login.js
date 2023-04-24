import React from "react";

const Login = () => {
  return (
    <div class="login_wrap d-flex justify-content-center align-items-center">
      <div class="login_box d-flex">
        <div class="login_box__title">
          <div class="adtive_logo">ADTIVE SSP</div>
          <h1>애드티브 SSP 관리자</h1>
          <p>
            애드티브의 매체 영역 잔여 인벤토리를 관리하고 광고수익을 극대화
            하기위해
            <br />
            다양한 관리기능을 제공합니다.
          </p>
          <span class="copyright">
            @ Copyright 2022 Adtive Innovation. All rights reserved.
          </span>
        </div>
        <div class="login_box__form">
          <form class="form-signin" method="POST">
            <h2 class="text-primary">로그인</h2>
            <div class="form_wrap">
              <div class="com_box id_box form-group">
                <label for="inputID" class="input_tit">
                  ID
                </label>
                <input
                  type="text"
                  id="inputID"
                  name="userid"
                  class="form-control"
                  placeholder="아이디를 입력해주세요."
                  value=""
                  required=""
                  autofocus=""
                  autocomplete="new-password"
                />
              </div>
              <div class="com_box pass_box form-group">
                <label for="inputPassword" class="input_tit">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  name="userpass"
                  class="form-control"
                  placeholder="패스워드를 입력해주세요."
                  required=""
                  autocomplete="new-password"
                />
              </div>
              {/* 						
								<div class="err_msg" style="color: red">
									에러메세지입니다. 추후에 아래의 php코드를 이용하세요.
								</div> */}
              <button type="submit" class="btn btn-primary">
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
