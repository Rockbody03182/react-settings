import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "./Context/index";
import { CookiesProvider } from "react-cookie";

// 실서버 배포시 삭제
// import {
//   AppContent,
//   Header,
//   Footer,
//   Aside,
//   ContentHeader,
// } from "./Components/Pull/index";
// const DefaultLayout = () => {
//   return (
//     <div className="page--auction">
//       <div id="wrap">
//         <Aside />
//         <Header />
//         <div className="main-container">
//           <ContentHeader />
//           <AppContent />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// react lazy 코드 스플리팅
const DefaultLayout = React.lazy(() =>
  import("../src/Components/Layout/DefaultLayout")
);

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Provider>
          <BrowserRouter>
            <Suspense fallback={loading}>
              <Routes>
                <Route exact path="*" name={Home} element={<DefaultLayout />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;
