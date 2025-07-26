import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Gotop from "../components/gotop";
import Aimsdeployline from "../components/aims_deployline";
import Aimseffective from "../components/aims_effective";
import Amisswiper from "../components/aims_swiper";
import Aimssteps from "../components/aims_steps";
import Amisprospect from "../components/aims_prospect"; //改
import "/src/index.css";
import "../assets/css/aims.css";

const Aims = () => {
    return (
        <>
            {/* <div className="aims-box relative"> */}
                {/* bg fixed */}
                <div className="aims-bg">
                </div>

                <div className="container flex-row md:flex h-fit p-8 lg:p-20 md:pb-0 min-h-[500px] md:h-[600px]">
                    {/* white line */}
                    <div className="contact_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

                    <div className="pt-10 md:pt-1 w-full">
                        <h2 className="contact_title mb-8 font-bold text-dark dark:text-white text-2xl sm:text-4xl md:text-6xl">人工智慧模型管理系統 AIMS</h2>
                        <p className="section-content text-white leading-6 sm:leading-7 text-sm sm:text-base md:text-xl my-4">
                            集中管理、監控和自動化企業內人工智慧與機器學習模型的整個生命週期，提高效率、降低風險，加速實現AI商業價值。
                        </p>
                        <div className="flex-none xl:flex">
                            <div className="aims_linkbutton mt-4 p-2 text-center lg:w-[500px] md:w-10/12 w-10/12 mr-4">
                                <Link to="/contact" className="py-2.5 text-xs sm:text-base md:text-lg lg:text-xl font-bold">
                                    <span>選擇最佳AI生態系統整合夥伴的關鍵指南</span>
                                </Link>
                            </div>
                            <div className="aims_linkbutton mt-4 p-2 text-center lg:w-[300px] md:w-7/12 w-7/12">
                                <Link to="/contact" className="py-2.5 text-xs sm:text-base md:text-lg lg:text-xl font-bold">
                                    <span>選擇適合您的伺服器</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <section className="relative z-10 overflow-hidden lg:pt-[120px] ">
                    {/* 模型開發與訓練管理 */}
                    <div className="dark:bg-dark">

                        <div className="mx-auto container relative">
                      
                            {/* upper space */}
                            <div className="grid grid-cols-13">

                                <div className="h-20 md:h-28 col-span-1 bg_border_r"></div>
                                <div className="h-20 md:h-28 col-span-2 bg_border_r p-2 flex flex-row items-center">
                                    <div className="">
                                        <span className="little_number">04</span><br />
                                        <span className="text-white">Our Research</span>
                                    </div>
                                </div>
                                <div className="col-span-9 text-white px-4">
                                    <div className="py-8">
                                        <h4 className="text-xl sm:text-4xl md:text-6xl font-bold">Research and Developement</h4>
                                        <p className="text-base sm:text-xl mt-3 dark:text-gray-5">模型開發與訓練管理</p>
                                    </div>
                                </div>
                                <div className="h-20 md:h-28 col-span-1"></div>

                            </div>

                            <div className="grid grid-cols-12">
                                {/* left space */}
                                <div className="h-20 md:h-24 col-span-1 bg_border_r hidden md:block"></div>
                                <div className="h-20 md:h-24 col-span-1 bg_border_r hidden md:block"></div>
                                <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 text-center bg-dark-brighter">
                                    <div className="p-0">
                                        <h2 className="agent_title text-2xl mb-2 font-semibold text-dark dark:text-white ">
                                            協作環境
                                        </h2>
                                        <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                            為數據科學家和工程師提供統一的工作平台，促進團隊合作。
                                        </p>
                                    </div>
                                </div>
                                <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 col-start-1 bg-dark-brighter text-center">
                                    <div className="p-0">
                                        <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                            實驗追蹤
                                        </h2>
                                        <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                            記錄並比較不同實驗結果，幫助團隊選擇最佳模型。
                                        </p>
                                    </div>
                                </div>
                                <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                                    <div className="p-0">
                                        <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                            版本控制
                                        </h2>
                                        <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                            管理程式碼、數據集和模型參數的版本，確保可重現性。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 模型部署流程 */}
                    <Aimsdeployline />

                    {/* 提升效率的價值 */}
                    <Aimseffective />

                    {/* 促進跨團隊合作 */}
                    <div className="dark:bg-dark">
                        <div className="py-20 container">
                       
                            <div className="">
                                <span className="little_number">05</span><br />
                                <span className="text-white">User Experience</span>
                            </div>
                            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white">促進跨團隊協作</h4>
                            <Amisswiper />
                        </div>
                    </div>

                    {/* AIMS實施步驟 */}
                    <div className="dark:bg-dark">
                        <div className="container py-20 relative">
                            <div className="">
                             
                                <span className="little_number">04</span><br />
                                <span className="text-white">Implementation Steps</span>
                            </div>
                            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white py-8">AIMS實施步驟</h4>
                            <Aimssteps />
                        </div>
                    </div>

                    {/* AIMS的未來發展趨勢 */}
                    <div className="dark:bg-dark">
                        <div className="container py-20 relative">
                            <div className="">
                          
                                <span className="little_number">05</span><br />
                                <span className="text-white">Our Prospects</span>
                            </div>
                            <h4 className="text-xl sm:text-4xl md:text-6xl font-bold text-white py-8">AI 驅動的 FMS 未來展望</h4>

                            <Amisprospect />
                        </div>
                    </div>
                </section>
            {/* </div> */}
        </>
    )
}

export default Aims;