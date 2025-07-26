import React from 'react';
import bxp300 from '../assets/images/devices/bxp300.jpg';
import bxp301 from '../assets/images/devices/bxp301.jpg';
import SBC320 from '../assets/images/devices/SBC-320-t.jpg';

// 引入 Font Awesome 的核心元件
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 引入想要使用的 icon（這裡用 Windows）
import { faWindows, faApple } from "@fortawesome/free-brands-svg-icons";

import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import Devicesidebar from "../components/devicesidebar"
import "/src/index.css";
import "../assets/css/devices.css";

const devices = () => {
  return (
    <>
      {/* bg fixed */}
      <div className="devices-bg">
      </div>

      <div className="container flex-none xl:flex">
        <Devicesidebar />

        <div>
          <h4 className="text-4xl md:text-6xl font-bold text-white pt-20">硬體規格</h4>

          {/* 硬體列表 */}
          <section className="py-10 md:py-20 shrink-0">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="device-box">
                <Link to="/bxp300">
                  <div className="device-contentwrap h-full">
                    <div className="device-content h-full overflow-hidden bg-white p-8">
                      <img
                        src={bxp300}
                        alt="bxp300 image"
                        className="w-full object-cover object-center"
                      />
                      <p className="text-xl sm:text-2xl md:text-4xl text-center">BXP-300 4K畫質推播廣告機</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="device-box">
                <Link to="/bxp301">
                  <div className="device-contentwrap h-full">
                    <div className="device-content h-full overflow-hidden rounded-xl bg-white p-8">
                      <img
                        src={bxp301}
                        alt="bxp301 image"
                        className="w-full object-cover object-center"
                      />
                      <p className="text-xl sm:text-xl md:text-3xl text-center">BXP-301 4K畫質 Video-In 廣告機</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="device-box">
                <Link to="/sbc320">
                  <div className="device-contentwrap h-full">
                    <div className="device-content h-full overflow-hidden rounded-xl bg-white p-8">
                      <img
                        src={SBC320}
                        alt="sbc320 image"
                        className="w-full object-cover object-center"
                      />
                      <p className="text-xl sm:text-2xl md:text-4xl text-center"> SBC-320 4K畫質推播廣告機</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </section>



          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-center justify-start my-10">
              <h4 className="text-4xl md:text-6xl font-bold text-white mr-10">播放器軟體下載 SignEffeX</h4>

              <div className="freeconsolebutton p-3 text-center lg:w-[260px] md:w-[260px] w-[200px] mt-10 lg:mt-0">
                <Link to="/signeffex_detail" className="px-5 py-2.5 text-lg lg:text-xl font-bold">
                  <span>認識SignEffeX</span>
                </Link>
              </div>
            </div>

            {/* 硬體列表 */}
            <section className="py-0 lg:py-14 rounded-xl">
              <div className="container">
                <div className="flex flex-col lg:flex lg:flex-row justify-between items-center">
                  <div className="download-round-box group bg-white hover:bg-white/0 duration-200 hover:text-white overflow-hidden rounded-xl relative mx-4 flex justify-center items-center my-4">
                    <Link to="https://www.dropbox.com/scl/fi/lalvvw1xc8g62z9ihjy9u/SignEffeX_Setup_1_3_15.exe?rlkey=bcrgk9n9q0o6tr85mmkko49dq&amp;st=8h1a3oi8&amp;dl=1">
                      <div className="download-round-lines"></div>
                      <div className="download-round-linem"></div>
                      <div className="download-round-lineb"></div>
                      <FontAwesomeIcon icon={faWindows} className="font-icon" style={{ color: "#6DD3D1" }} />
                      {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                      <p className="text-3xl md:text-3xl p-8 text-black group-hover:text-white font-semibold">Windows</p>
                    </Link>
                  </div>

                  <div className="download-round-box group bg-white hover:bg-white/0 duration-200 overflow-hidden overflow-hidden rounded-xl relative mx-4 flex justify-center items-center my-4">
                    <Link to="https://www.dropbox.com/s/qjqn16nk8ku1ous/SignEffeX-mac-software-setup.zip?dl=1">
                      <div className="download-round-lines"></div>
                      <div className="download-round-linem"></div>
                      <div className="download-round-lineb"></div>
                      <FontAwesomeIcon icon={faApple} className="font-icon" style={{ color: "#CCC" }} />
                      <p className="text-3xl md:text-3xl p-8 group-hover:text-white text-black font-semibold">iMac用戶</p>
                    </Link>
                  </div>
                  <div className="download-round-box group bg-white overflow-hidden hover:bg-white/0 duration-200 overflow-hidden rounded-xl relative mx-4 flex justify-center items-center my-4" >
                    <Link to="https://www.dropbox.com/s/9l1vffjfu5wac42/2017_SignEffeX.pdf?dl=1">
                      <div className="download-round-lines"></div>
                      <div className="download-round-linem"></div>
                      <div className="download-round-lineb"></div>
                      <FontAwesomeIcon icon={faFilePdf} className="font-icon" style={{ color: "#db251d" }} />
                      <p className="text-3xl sm:text-2xl md:text-3xl p-8 group-hover:text-white text-black font-semibold">商品型錄</p>
                    </Link>
                  </div>
                </div>
              </div>

            </section>

          </div>

          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-center justify-start my-10">
              <h4 className="text-4xl md:text-6xl font-bold text-white mr-10">播放器軟體下載 SignCMS</h4>

              <div className="freeconsolebutton p-3 text-center lg:w-[260px] md:w-[260px] w-[200px] mt-10 lg:mt-0">
                <Link to="/signeffexdetail" className="px-5 py-2.5 text-xl lg:text-2xl font-bold">
                  <span>認識SignCMS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default devices;