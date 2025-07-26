import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom"; //為了顯示出巢狀路由
import { AlternateEmailOutlined } from "@mui/icons-material";
import "/src/index.css";
import "../assets/css/header.css";
// import another layout
import Footer from "./footer";



const Layout = () => {

  return (
    <div>
<header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>

        <nav className="hidden md:flex space-x-8">
          {/* Dropdown 容器：主 group */}
          <div className="relative group">
            {/* 主選單連結 */}
            <Link
              to="#"
              className="py-2 inline-block relative
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:w-0 before:bg-yellow-400
                before:transition-all before:duration-300
                group-hover:before:w-full"
            >
              系統方案
            </Link>

            {/* Dropdown 選單，支援滑入 dropdown 不收回 */}
            <div
              className="
                absolute left-0 top-full mt-2 w-52 bg-white text-black rounded shadow-lg 
                invisible opacity-0 group-hover:visible group-hover:opacity-100
                hover:visible hover:opacity-100
                transition-all duration-300 z-20
                before:content-[''] before:absolute before:-top-2 before:left-6
                before:border-8 before:border-transparent before:border-b-white
              "
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">AIMS</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">FMS</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Digital Signage</a>
            </div>
          </div>

          <Link
            to="#"
            className="py-2 relative inline-block
              before:content-[''] before:absolute before:bottom-0 before:left-0
              before:h-[2px] before:w-0 before:bg-yellow-400
              before:transition-all before:duration-300
              hover:before:w-full"
          >
            客戶案例
          </Link>
        </nav>
      </div>
    </header>
      <Outlet />
      <Footer />
    </div>

  );
};
export default Layout;
