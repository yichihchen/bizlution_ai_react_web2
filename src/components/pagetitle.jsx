import React from "react";
import Gotop from "../components/gotop";
import aibg from "../assets/images/homepage/section_bg_ai.png";
import "/src/index.css";
import "../assets/css/pagetitle.css";
import "../assets/css/border.css";
import "../assets/css/grid.css";

const PageTitle4 = () => {
  return (
    <section className="pagetitle relative dark:bg-dark bg_border_tb">
      <Gotop />
      {/* 上部空格 */}
      <div className="grid grid-cols-13 bg_border_b">
        <div className="h-20 col-span-1 bg_border_r"></div>
        <div className="h-20 col-span-2 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-1"></div>
      </div>

      <div className="grid grid-cols-13 bg_border_b container">
        {/*標題  */}
        <div className="col-span-1 bg_border_r"></div>
        <div className="col-span-2 bg_border_r p-2">
          <span className="little_number">03</span><br />
          <span className="text-white">How We Do</span>
        </div>
        <div className="col-span-9 bg_border_r px-4">
          <h4 className="py-8 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-6xl">
            AI agent management
          </h4>
        </div>
        <div className="col-span-1"></div>

        {/*內容  */}
        {/* <div className="mx-auto px-4 sm:container"> */}
        <div className="col-span-1 bg_border_r"></div>
        <div className="col-span-2 bg_border_r"></div>
        <div className="col-span-9 bg_border_r px-4">
          <div className="flex-none md:flex items-center pb-4">
            <div className="mr-6 w-full overflow-hidden">
              <img
                // src="../src/assets/images/homepage/section_bg_ai.png"
                 src={aibg}
                alt="page title"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <p className="text-sm md:text-base dark:text-gray-5 leading-7">
                AI 代理管理模組負責定義、部署和管理在平台或邊緣運行的自主 AI 代理。這些代理可以執行特定任務或分析，如異常檢測、預測維護或智能決策支援。通過直觀的配置介面，使用者可以定義代理的目標、能力與觸發條件，無需深入的編程知識。
                系統支援將代理部署到特定邊緣裝置或在平台內運行，並提供全面的監控工具，追蹤代理行為與效能。對於複雜場景，還支援建立多代理之間的協作機制，實現更高級的智能自動化。
              </p>
            </div>
          </div>
        </div>
        <div className="h-20 col-span-1"></div>
        {/* </div> */}
      </div>

      {/* 底部空格 #2f3742*/}
      <div className="grid grid-cols-13">
        <div className="h-20 col-span-1 bg_border_r"></div>
        <div className="h-20 col-span-2 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-3 bg_border_r"></div>
        <div className="h-20 col-span-1"></div>
      </div>

    </section>
  );
};

export default PageTitle4;
