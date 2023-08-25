// import { Breadcrumb, Layout as LayoutWrap } from "antd";
// import { Outlet, useNavigate } from "react-router-dom";
// import SliderMenu from "./SliderMenu";
// import LayoutHeader from "./LayoutHeader";
import { Link, useLocation } from "react-router-dom";
// import "./index.scss";
// import { useState } from "react";
// import useMount from "@/hooks/useMount";

function Layout() {
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbNameMap = {
    "/": "",
    "/setting": "设置",
  };

  //   const extraBreadcrumbItems = pathSnippets.map((val, index) => {
  //     const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
  //     if (pathSnippets[pathSnippets.length - 1] === val) {
  //       return {
  //         key: url,
  //         title: <span>{breadcrumbNameMap?.[url]}</span>,
  //       };
  //     }
  //     return {
  //       key: url,
  //       title: <Link to={url}>{breadcrumbNameMap?.[url]}</Link>,
  //     };
  //   });

  //   const breadcrumbItems = [
  //     // {
  //     //   title: <Link to='/'>Home</Link>,
  //     //   key: 'home',
  //     // },
  //   ].concat(extraBreadcrumbItems);

  return (
    <>
      layout
      {/* <LayoutWrap className="layoutWrap">
        <LayoutHeader menuClick={toggleMenu} isToggle={isToggle} />
        <div className="layout-content">
          <SliderMenu isToggle={isToggle} />
          <div className={isToggle ? "contentClose" : "content"}>
            {pathSnippets.length ? (
              <div className="breadCrumb">
                <Breadcrumb separator=">" items={breadcrumbItems}></Breadcrumb>
              </div>
            ) : null}
            <div className="contentWrap">
              <LayoutWrap.Content>
                <Outlet />
              </LayoutWrap.Content>
            </div>
          </div>
        </div>
      </LayoutWrap> */}
    </>
  );
}
export default Layout;
