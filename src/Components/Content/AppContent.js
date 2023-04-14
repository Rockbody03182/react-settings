import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { useCookies } from "react-cookie";

// routes config
import routes from "../../routes/routes";

const AppContent = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  // const ckAuthUser = (c, r) => {
  //     console.log('Current User Cookies Data : ', r);
  //     // 로그인 처리가 안된 유저
  //     // 로그인 페이지로 리디렉션 시키면 될 것 같음
  //     // if (!r) return <UserLogin />
  //     if (!r) return console.log('로그인 안됐음');
  //     // 로그인 처리가 된 유저 해당 컴포넌트 반환
  //     else return c;
  // }
  return (
    <>
      <Suspense>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  // element={ckAuthUser(<route.element />, cookies.accessToken)}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="Home" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default React.memo(AppContent);
