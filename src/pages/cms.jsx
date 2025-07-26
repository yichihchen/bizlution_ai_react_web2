import React from 'react';
import Freeconsole from "../components/freeconsole";
import { Link } from 'react-router-dom';
import Gotop from "../components/gotop";
import Cmssswiper from "../components/cms_swiper";
import Cmsanalysis from "../components/cms_analysis";
import Cmsautomatic from "../components/cms_automatic";

import "/src/index.css";
import "../assets/css/cms.css";
const Cms = () => {
  return (
    <>
      {/* bg fixed */}
      <div className="cms-bg">
      </div>

      <div className="container flex-row md:flex md:h-[600px] p-20">
        {/* white line */}
        <div className="contact_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

        <div className="pt-10 md:pt-1 w-full">
          <h2 className="contact_title mb-8 font-bold text-dark dark:text-white text-3xl sm:text-4xl md:text-6xl">數位看板內容管理系統 Digital Signage CMS</h2>
          <p className="section-content text-white leading-6 sm:leading-7 text-sm sm:text-base md:text-xl">
            集中管理、建立、排程、派送及監控數位看板內容的核心軟體平台，為企業提供高效率的視覺傳播解決方案。
          </p>
          <div className="xl:flex mt-4">
            <div className="freeconsolebutton mr-4 p-2 text-center lg:w-[200px] md:w-[200px] w-[160px] mt-4">
              <Link to="/signeffexdetail" className="px-5 py-2.5 sm:text-base md:text-lg lg:text-xl font-bold">
                <span>SignEffeX</span>
              </Link>
            </div>
            <div className="freeconsolebutton mr-4 p-2 text-center lg:w-[200px] md:w-[200px] w-[160px] mt-4">
              <Link to="/devices" className="px-5 py-2.5 sm:text-base md:text-lg lg:text-xl font-bold">
                <span>Box PC</span>
              </Link>
            </div>
            <div className="freeconsolebutton p-2 text-center lg:w-[200px] md:w-[200px] w-[160px] mt-4">
              <Link to="/contact" className="px-5 py-2.5 sm:text-base md:text-lg lg:text-xl font-bold">
                <span>聯繫我們</span>
              </Link>
            </div>
          </div>



        </div>
      </div>

      {/* cms核心功能 */}
      <section className="z-10 overflow-hidden pt-20 lg:pt-[120px] dark:bg-dark">
        <div className="text-white px-4 container relative">
          < Gotop />
          <div className="">
            <span className="little_number">01</span><br />
            <span className="text-white">Our Services</span>
          </div>
          <div className="py-8">
            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold">Bizlution Digital Signage CMS 的核心功能</h4>
          </div>
        </div>

        <div className="relative container lg:flex flex-row pb-20">
          <div className="w-full lg:w-1/2">
            <div className="function_card flex">
              <div className="p-4 text-white">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src="../src/assets/images/icons/building.svg" alt="building_svg" />
                </div>
              </div>
              <div className="flex items-center px-8 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">內容管理</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">上傳、儲存、組織管理各種媒體檔案，包括圖片、影片、網頁、跑馬燈文字、簡報及PDF等。部分系統提供簡易的內容編輯或範本套用功能。</p>
                </div>
              </div>
            </div>

            <div className="function_card flex">
              <div className="p-4">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src="../src/assets/images/icons/tool.svg" alt="building_svg" />

                </div>
              </div>
              <div className="flex items-center px-8 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">排程與播放清單</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">設定內容在特定時間、日期、週期播放；可針對不同看板或看板群組設定不同的播放排程與內容順序。</p>
                </div>
              </div>
            </div>

            <div className="function_card flex">
              <div className="p-4">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src="../src/assets/images/icons/database.svg" alt="building_svg" />

                </div>
              </div>
              <div className="flex items-center px-8 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">設備管理與監控</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">遠端監控所有數位看板播放器或螢幕的狀態，並可進行遠端重啟、更新軟體、擷取畫面等管理操作。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fms_picture w-full lg:w-1/2 lg:h-auto h-96">
          </div>
        </div>



        {/* 提升吸睛度與互動性 */}
        <div className="dark:bg-dark">
          <div className="py-20 container">

            <div className="">
              <span className="little_number">05</span><br />
              <span className="text-white">Enhance Interactivity</span>
            </div>
            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white">提升吸睛度與互動性</h4>
            <Cmssswiper />
          </div>
        </div>

        {/* 進階觀眾分析 */}
        <Cmsanalysis />

        {/* 情境感知自動排程 */}
        <div className="container py-20 relative">
          <div className="">
            < Gotop />
            <span className="little_number">04</span><br />
            <span className="text-white">Automated Scheduling</span>
          </div>
          <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white py-8">情境感知自動排程</h4>
          <Cmsautomatic />
        </div>

      </section>
    </>
  )
}

export default Cms;