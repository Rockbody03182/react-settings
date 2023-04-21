import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./Context";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 10000,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Provider>
            <BrowserRouter>
              <Suspense fallback={loading}>
                <Routes>
                  <Route path="*" name="Home" element={<DefaultLayout />} />
                </Routes>
                <ReactQueryDevtools
                  initialIsOpen={false}
                  position="bottom-right"
                />
              </Suspense>
            </BrowserRouter>
          </Provider>
        </CookiesProvider>
      </QueryClientProvider>
    );
  }
}

export default App;
