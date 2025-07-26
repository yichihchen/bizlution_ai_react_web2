import React from 'react';
import More from "../components/more";
import Fmsswiper from "../components/fms_swiper";
import Fmsdatabase from "../components/fms_database";
import Fmspropertyline from "../components/fms_propertyline";
import Fmspredict from "../components/fms_predict";
import Gotop from "../components/gotop";
import Fmsprospect from "../components/fms_prospect";

import "/src/index.css";
import "../assets/css/fms.css";

import building from "../assets/images/icons/building.svg";
import tool from "../assets/images/icons/tool.svg";
import database from "../assets/images/icons/database.svg";
import report from "../assets/images/icons/report.svg";


const Fms = () => {
  return (
    <>
      {/* bg fixed */}
      <div className="fms-bg">
      </div>

      <div className="container flex-row md:flex p-20 min-h-[560px]  md:h-[600px]">
        {/* white line */}
        <div className="contact_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

        <div className="pt-10 md:pt-1 w-full md:w-7/12">
          <h2 className="mb-8 font-bold text-dark dark:text-white text-3xl sm:text-4xl md:text-6xl">FMS 智慧設施管理系統</h2>
          <p className="section-content text-white leading-6 sm:leading-7 text-sm sm:text-base md:text-xl">
            提升您的設施管理效率，降低營運成本，優化空間利用，並延長資產壽命。我們的 FMS 解決方案結合 AI 技術，為您的建築物和設施帶來智慧化管理體驗。
          </p>
        </div>
      </div>

      <section className="relative z-10 overflow-hidden dark:bg-dark pt-20 pb-20">
        {/* 應該改為 匯入<Agent /> 元件 */}
        <div className="text-white px-4 container relative">
          < Gotop />
          <div className="">
            <span className="little_number">01</span><br />
            <span className="text-white">Our Services</span>
          </div>
          <div className="py-8">
            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold">FMS 核心功能</h4>
          </div>
        </div>

        {/* Card:FMS 核心功能 */}
        <div className="relative container lg:flex flex-row mb-20 ">

          {/*內容  */}
          <div className="w-full lg:w-1/2">
            <div className="function_card flex">
              <div className="p-6 text-white">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src={building} alt="building_svg" />
                </div>
              </div>
              <div className="flex items-center pr-6 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">空間管理</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">追蹤與規劃空間使用率、座位安排、部門位置、樓層平面圖管理及搬遷管理。</p>
                </div>
              </div>
            </div>

            <div className="function_card flex">
              <div className="p-6">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src={tool} alt="tool_svg" />

                </div>
              </div>
              <div className="flex items-center pr-6 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">維護管理</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">安排預防性維護計畫、管理維修工單、追蹤維護歷史記錄與成本。</p>
                </div>
              </div>
            </div>

            <div className="function_card flex">
              <div className="p-6">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src={database} alt="database_svg" />
                </div>
              </div>
              <div className="flex items-center pr-6 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">資產管理</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">登錄與追蹤設施相關資產的位置、狀況、保固與生命週期。</p>
                </div>
              </div>
            </div>

            <div className="function_card flex">
              <div className="p-6">
                <div className="fmsfunction flex items-center justify-center">
                  <img className="fmsfunction_svg" src={report} alt="report_svg" />

                </div>
              </div>
              <div className="flex items-center pr-6 py-4">
                <div className="text-body-color text-white leading-8">
                  <p className="text-base md:text-lg lg:text-2xl font-bold">工單管理</p>
                  <p className="text-sm md:text-base dark:text-gray-5 mt-2">集中接收、分派、追蹤及管理來自使用者的服務請求。</p>
                </div>
              </div>
            </div>

          </div>

          <div className="fms_picture w-full lg:w-1/2 lg:h-auto h-96">
          </div>
        </div>

        {/* 延長資產壽命 */}
        <Fmspropertyline />

        {/* swiper */}
        <div className="py-20 container relative">
          <Gotop />
          <div className="">
            <span className="little_number">03</span><br />
            <span className="text-white">User Experience</span>
          </div>
          <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white">改善使用者體驗</h4>
          <Fmsswiper />
        </div>

        {/* 優化空間利用 */}
        < Fmsdatabase />

        {/*AI 驅動的預測性維護 */}
        <div className="container py-20 relative">
          <div className="">
            < Gotop />
            <span className="little_number">04</span><br />
            <span className="text-white">Predictive Maintenance</span>
          </div>
          <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white py-8">AI 驅動的預測性維護</h4>
          <Fmspredict />
        </div>

        {/* AI 驅動的 FMS 未來展望 */}
        <div className="container py-20 relative">
          <div className="">
            < Gotop />
            <span className="little_number">05</span><br />
            <span className="text-white">Our Prospects</span>
          </div>
          <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white py-8">AI 驅動的 FMS 未來展望</h4>

          <Fmsprospect />
        </div>
      </section>
    </>
  )
}

export default Fms;