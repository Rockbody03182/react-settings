import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

// routes config
import routes from "../../routes/routes";

const AppContent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  return (
    <>
      <Suspense>
        <Routes>
          {cookies.auth !== undefined ? (
            <>
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
            </>
          ) : (
            <Route path="/" element={<Navigate to="login" replace />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
};

export default React.memo(AppContent);
