import React from 'react';

import "/src/index.css";
import "../assets/css/aims_effective.css";

const Aimseffective = () => {
    return (
        <section className="py-20 dark:bg-dark">
            <div className="container">
                <div className="">
                    <span className="little_number">03</span><br />
                    <span className="text-white">Our Efficiency</span>
                </div>
                <h4 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold py-8">提升效率的價值</h4>
            </div>
            
            <div className="container flex-row lg:flex justify-center">
                <div className="w-full lg:w-2/3 p-8">

                    <div className="text-white text-center flex-row justify-between md:flex lg:justify-evenly py-8">
                        <div className="mb-8 overflow-hidden rounded-xl pr-0 md:pr-6">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">60%</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">開發時間縮短</p>
                            <p className="text-xl">自動化重複性高的任務，顯著減少從概念到部署的時間。</p>
                        </div>
                        <div className="mb-8 overflow-hidden rounded-xl pt-8 md:pt-0">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">75%</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">工程師生產力提升</p>
                            <p className="text-xl">減少手動操作，讓數據科學家專注於創新而非繁瑣流程。</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl text-white w-full flex justify-center">
                        <div className="text-center">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">3x</h4>
                            <p className="text-3xl font-bold py-4">迭代速度增加</p>
                            <p className="text-xl">加速模型優化與更新頻率，更快回應市場變化。</p>
                        </div>
                    </div>
                </div>

                <div className="effective-bg rounded-xl w-full h-[300px] lg:w-1/3 lg:h-[500px]">
                </div>
            </div>

        </section>
    )
}

export default Aimseffective;