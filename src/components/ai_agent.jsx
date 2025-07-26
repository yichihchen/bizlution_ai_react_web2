import React from "react";
import "/src/index.css";
import "../assets/css/home.css";
import "../assets/css/ai_agent.css";
import "../assets/css/grid.css";
import Gotop from "../components/gotop";


const Agent = () => {
    return (

        <section className="relative agent-wrap dark:bg-dark">
            <div className="mx-auto container">

                {/* upper space */}
                <div className="relative grid grid-cols-12 bg_border_b">
                    <Gotop />
                    <div className="h-20 md:h-28 col-span-2 bg_border_r p-2 flex flex-row items-center">
                        <div className="">
                            <span className="little_number">01</span><br />
                            <span className="text-white">Our Services</span>
                        </div>
                    </div>
                    <div className="col-span-9 text-white px-4">
                        <div className="py-8">
                            <h4 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold">您的挑戰，我們的客製化解方</h4>
                        </div>
                    </div>
                    <div className="h-20 md:h-28 col-span-1 hidden lg:block"></div>

                </div>

                <div className="grid grid-cols-12 pb-20">
                    {/* left space */}

                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 text-center bg-dark-brighter">
                        <div className="p-0">
                            <h2 className="agent_title text-2xl mb-2 font-semibold text-dark dark:text-white ">
                                標準方案不符所需？
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                我們深入了解您的獨特流程，提供 100% 客製化系統。
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 col-start-1 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                AI 導入困難重重？
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                我們提供從模型驗證優化到管理平台的一站式 AI 專業服務。
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                軟硬體整合複雜？
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                我們為您配置並提供經最佳化的 AI 伺服器、IPC 與 IoT 裝置，確保效能。
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                需要值得信賴的夥伴？
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                我們立足台灣 台北市南港區，提供在地化、專業且持續的技術支援。
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
export default Agent;