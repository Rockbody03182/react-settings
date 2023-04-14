import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "./Context";
import { CookiesProvider } from "react-cookie";

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
                <Route path="*" name={Home} element={<DefaultLayout />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;
