import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Setting = lazy(() => import("../pages/Setting"));

export const routerList = [
  {
    element: Home,
    auth: true,
    title: "首页",
    path: "/",
  },
  {
    element: Setting,
    auth: true,
    title: "设置",
    path: "/setting",
  },
];
