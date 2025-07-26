import React from 'react';
import Bxp301tab from "../components/bxp301_tab";

import bxp301 from '../assets/images/devices/bxp301.jpg';
import Devicesidebar from "../components/devicesidebar";


const Bxp301 = () => {
  return (
    <>
      <div className="devices-bg">
      </div>

      <div className="container">

        <Devicesidebar />

        <div className="bg-white rounded-xl my-28">
          <h4 className="text-2xl sm:text-4xl md:text-6xl font-bold pt-20 text-center">BXP-301 超4K畫質 Video-In 廣告機</h4>

          {/* Bxp300  */}
          <section className="p-10 md:p-20 flex-none lg:flex justify-evenly">
            <div className="device-box">
              <div className="device-content overflow-hidden rounded-xl p-8">
                <img
                  src={bxp301}
                  alt="gallery image"
                  className="w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="device-brief">
              <ul className="text-xl sm:text-xl md:text-2xl mb-6 space-y-2">
                <li>庫存狀況：現貨供應</li>
                <li>產品型號：BXP-301</li>
                <li>適用方案：SignEffeX</li>
              </ul>
              <ul className="text-xl sm:text-xl md:text-2xl space-y-3">
                <li>支援即時HDMI影像輸入1080p</li>
                <li>4K畫質3840*2160p Urtal HD解析度</li>
                <li>商務Andriod 5.1作業系統</li>
                <li>支援旋轉播放直立顯示</li>
                <li>無風扇設計安靜輕巧</li>
                <li>低碳排放節能省電</li>
                <li>內建32GB儲存空間</li>
                <li>開機系統自動錯誤偵測</li>
                <li>搭載SignEffeX軟體直覺操作</li>
                <li>適合開發人員應用多元整合</li>
              </ul>
            </div>
          </section>
          < Bxp301tab />
        </div>
      </div>
    </>


  )
}

export default Bxp301;