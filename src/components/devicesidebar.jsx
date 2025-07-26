import React from "react";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import backarrow from "../assets/images/icons/backarrow.svg";
import "/src/index.css";
import "../assets/css/devicesidebar.css";


//創建一個navItems
const hardware = [
  {
    text: "BXP-300 4K畫質推播廣告機",
    link: "/bxp300"
  },
  {
    text: "BXP-301 4K畫質 Video-In 廣告機",
    link: "/bxp301"
  },
  {
    text: " SBC-320 超4K畫質推播廣告機",
    link: "/sbc320"
  },
  {
    text: " NPU Card",
    link: "/sbc320"
  },
];

const software = [
  {
    text: "SignEffeX 播放器軟體",
    link: "/signeffexdetail"
  },
  {
    text: "SignCMS 播放器軟體",
    link: "/signeffexdetail"
  },
];

//取最後一個斜線之前的
console.log(window.location.href);

const Devicesidebar = () => {

  return (
    <>
      <div className="text-white text-4xl p-4 w-full lg:w-6/12 xl:w-5/12 mr-0 sm:mr-4">
        <h5>商品目錄</h5>

        {/* URL為devices，就不會跳出 */}
        <Link to="/devices" className="flex items-center mt-10">
          <img className="mr-2" src={backarrow} alt="backarrow" />
          <p className="text-white text-2xl hover:font-bold">回到主頁</p>
        </Link>


        <p className="text-white text-2xl mt-10 mb-5">數位看板播放主機</p>
        <ul className="hardware_navwrap relative">
          {hardware.map(({ text, link }) => {
            return (
              <li className="hardware_nav relative text-gray-5 py-4 text-base sm:text-xl rounded-3xl md:text-xl lg:text-lg xl:text-lg" key={text}>
                <Link to={link} className="px-6">
                  {text}
                </Link>
              </li>
            )
          })}

        </ul>

        <p className="text-white text-2xl mt-10 mb-5">數位看板軟體</p>
        <ul className="software_navwrap">
          {software.map(({ text, link }) => {
            return (
              <li className="software_nav relative text-gray-5 py-4 text-base sm:text-xl rounded-3xl md:text-xl lg:text-lg xl:text-lg" key={text}>
                <Link to={link} className="px-6">
                  {text}
                </Link></li>

            )
          })}

        </ul>
      </div>

    </>
  )
}

export default Devicesidebar;