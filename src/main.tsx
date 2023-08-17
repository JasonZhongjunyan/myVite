import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "virtual:windi.css";

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
