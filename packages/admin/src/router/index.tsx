import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { routerList } from "./routerList";
const Layout = lazy(() => import("../layout"));
const Login = lazy(() => import("../pages/Login"));

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";

function isAuth() {
  return !!(
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("token") !== null
  );
}
function RequireAuth({ children }: any) {
  // if (!isAuth()) {
  //   return <Navigate to='/login' replace />;
  // }

  return (
    <Suspense
      fallback={
        <div>
          <Spin size="large" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

function RootRoute() {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Suspense
          fallback={
            <div className="">
              <Spin size="large" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              {routerList.map((item) => {
                if (item.auth) {
                  return (
                    <Route
                      key={item.path}
                      path={item.path}
                      element={
                        <RequireAuth>
                          <item.element />
                        </RequireAuth>
                      }
                    />
                  );
                } else {
                  return (
                    <Route
                      key={item.path}
                      path={item.path}
                      element={
                        <RequireAuth>
                          <div className="text-center mt-260px">
                            暂无权限查看！
                          </div>
                        </RequireAuth>
                      }
                    />
                  );
                }
              })}
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
}
export default RootRoute;
