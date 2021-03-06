/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Dashboard, GiaoThietBi, QuanLyNhanVien
} from "views";
// import Dashboard from "views/Dashboard.jsx";
// import GiaoThietBi from "views/GiaoThietBi";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import QuanLyThietBi from "views/QuanLyThietBi";

var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/giao-thiet-bi",
    name: "Giao thiết bị",
    component: GiaoThietBi,
    layout: "/admin"
  },
  {
    path: "/nhan-thiet-bi",
    name: "Nhận thiết bị",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/quan-ly-nhan-vien",
    name: "Quản lý nhân viên",
    component: QuanLyNhanVien,
    layout: "/admin"
  },
  {
    path: "/quan-ly-thiet-bi",
    name: "Quản lý thiết bị",
    component: QuanLyThietBi,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons,
    layout: "/admin"
  }
];
export default routes;
