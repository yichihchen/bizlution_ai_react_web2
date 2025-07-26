import React from "react";
import chevrondouble from "../assets/images/icons/chevron-down-double.svg";

import "/src/index.css";
import "../assets/css/aims_prospect.css";

const Amisprospect = () => {
    return (
        <div>
            <ul>
                <li className="predict-circle1 py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="flex w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="robot" data-prefix="fal" aria-hidden="true"><path d="M320 0c8.8 0 16 7.2 16 16V96H448c53 0 96 43 96 96V416c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96H304V16c0-8.8 7.2-16 16-16zM192 128c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H320 192zm16 256h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM48 224H64v32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16H64v32H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zM592 384c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H576V224h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V384h16z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">自動化模型開發 (AutoML整合)</p>
                            <p className="text-white mt-2 text-lg">未來的AIMS將更深入整合AutoML功能，進一步自動化特徵工程、模型選擇與超參數調優過程，使非專業人員也能創建高質量模型。</p>
                        </div>
                    </div>
                </li>
                <div className="w-[50px] py-2">
                    {/* <img className="w-full" src="../src/assets/images/icons/chevron-down-double.svg" alt="chevron-down-double" /> */}
                    <img className="w-full" src={chevrondouble} alt="chevron-down-double" />
                </div>
                <li className="predict-circle1 flex py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="flex w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" data-icon="eye" data-prefix="fal" aria-hidden="true"><path d="M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">強化可解釋性與透明度</p>
                            <p className="text-white mt-2 text-lg">隨著AI監管要求提高，AIMS將加強模型可解釋性工具，幫助企業理解並解釋AI決策過程，滿足「可解釋AI」(XAI)的需求。</p>
                        </div>
                    </div>
                </li>
                <div className="w-[50px] py-2">
                    <img className="w-full" src={chevrondouble} alt="chevron-down-double" />
                </div>
                <li className="predict-circle1 flex py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="flex w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="rectangle-history" data-prefix="fal" aria-hidden="true"><path d="M480 192c0-17.7-14.3-32-32-32L64 160c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256zm-32-64c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l384 0zm0-64c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0zM400 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L112 32c-8.8 0-16-7.2-16-16s7.2-16 16-16L400 0z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">多雲與混合雲支持</p>
                            <p className="text-white mt-2 text-lg">未來AIMS將提供更靈活的部署選項，支持跨多個雲平台與本地環境的無縫模型管理，適應企業多元化的IT架構。</p>
                        </div>

                    </div>
                </li>
                <div className="w-[50px] py-2">
                    <img className="w-full" src={chevrondouble} alt="chevron-down-double" />
                </div>
                <li className="predict-circle1 flex py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="flex w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="shield" data-prefix="fal" aria-hidden="true"><path d="M268.5 37.3c-8-3.4-17-3.4-25 0l-176.7 75C55.5 117 47.9 127.7 48 139.8c.5 94 39.3 259.8 195.4 334.5c7.9 3.8 17.2 3.8 25.1 0c156.1-74.7 195-240.4 195.5-334.5c.1-12.1-7.5-22.8-18.8-27.6l-176.7-75zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">AI倫理與責任管理</p>
                            <p className="text-white mt-2 text-lg">隨著AI倫理問題日益受到重視，AIMS將納入更多工具來評估與管理AI的社會影響、公平性與道德合規性。</p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Amisprospect;