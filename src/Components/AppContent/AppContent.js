import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

// routes config
import routes from "../../routes/routes";
// import Page404 from "../../pages/Page404";

const AppContent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  // 쿠키 인증 토큰 리다이렉팅
  if (!cookies.auth) {
    return <Navigate to="/Login" replace />;
  }

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
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="Home" replace />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default React.memo(AppContent);
