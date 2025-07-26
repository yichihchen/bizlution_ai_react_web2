import React from "react";
import More from "../components/more";
import case1 from "../assets/images/homepage/casestudies/square1.jpg";
import case2 from "../assets/images/homepage/casestudies/square2.jpg";
import case3 from "../assets/images/homepage/casestudies/square3.jpg";
import case4 from "../assets/images/homepage/casestudies/square4.jpg";
import Gotop from "../components/gotop";
import "/src/index.css";
import "../assets/css/home.css";
import "../assets/css/casestudies.css";
import "../assets/css/border.css";
import "../assets/css/grid.css";
import "../assets/css/title.css";


// Our Accomplishments
const CaseStudies = () => {
    return (
        <section className="casetitle dark:bg-dark bg_border_tb ">
            {/* add container */}
            <div className="grid grid-cols-12 container">

                {/*標題  */}
                <div className="col-span-12 md:col-span-2 bg_border_r p-2">
                    <span className="little_number">04</span><br />
                    <span className="text-white">About Us</span>
                </div>
                <div className="col-span-12 md:col-span-10 px-4 relative">
                    <Gotop />
                    <div className="py-8">
                        <h4 className="font-bold text-dark dark:text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                            {/* Our Accomplishments */}
                            核心服務項目
                        </h4>
                    </div>
                </div>

                {/*內容  */}

                <div className="col-span-12 lg:col-span-2 bg_border_r"></div>
                <div className="col-span-12 lg:col-span-10 bg_border_r bg-dark-brighter">

                    <div className="grid grid-cols-3 bg_border_tb">
                        <div className="col-span-3 md:col-span-1 mr-6 w-full overflow-hidden">
                            <img
                                src={case1}
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="col-span-3 md:col-span-2 flex items-center justify-center px-8 py-4">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-base md:text-lg lg:text-2xl font-bold">系統平台開發</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">AIMS (AI 管理系統)：高效管理 AI 模型生命週期，加速 AI 應用落地。</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">FMS (設施管理系統)：整合 IoT 數據，實現智慧化設施營運與預測性維護。</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">Digital Signage CMS：精準、彈性的數位內容投放、管理與互動。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 md:col-span-2 flex items-center justify-center px-8 py-4 order-last md:order-1">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-base md:text-lg lg:text-2xl font-bold">專業 AI 技術服務</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">AI 模型驗證與優化：深入評估、調優您的 AI 模型，提升效能、降低偏見、確保商業價值實現。讓您的 AI 不只可用，更能卓越有效。</p>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1 mr-6 w-full overflow-hidden order-1 md:order-last">
                            <img
                                src={case2}
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 md:col-span-1 mr-6 w-full overflow-hidden">
                            <img
                                src={case3}
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="col-span-3 md:col-span-2 flex items-center px-8 py-4">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-base md:text-lg lg:text-2xl font-bold">高效能硬體整合</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">AI Server / AI PC / IPC：提供從雲端到邊緣的最適 AI 運算硬體。</p>
                                <p className="text-base lg:text-xl dark:text-gray-5 mt-2">AI 運算卡 / IoT 感測器：嚴選高效能組件與數據採集裝置。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 md:col-span-2 flex items-center justify-center px-8 order-last md:order-1 py-4">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-base md:text-lg lg:text-2xl font-bold">客製化開發服務</p>
                                <p className="text-base lg:text-xl dark:text-gray-5">量身定制解決方案：依據您的業務需求與流程，提供完全客製化的軟體開發服務。</p>
                                <p className="text-base lg:text-xl dark:text-gray-5">全程顧問諮詢：從需求分析、系統設計到實施部署，提供專業的技術指導與支援。</p>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1 mr-6 w-full overflow-hidden order-1 md:order-last">
                            <img
                                src={case4}
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部空格 #2f3742*/}
            <div className="grid grid-cols-12">
                <div className="h-20 md:h-24 col-span-12"></div>
            </div>

        </section>
    );
};

export default CaseStudies;
