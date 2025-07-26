import React from 'react';

import "/src/index.css";
import "../assets/css/fms_database.css";

const Fmsdatabase = () => {
    return (
        <section className="py-20 dark:bg-dark">
            <div className="container">
                <div className="">
                    <span className="little_number">03</span><br />
                    <span className="text-white">Our Spaces</span>
                </div>
                <h4 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold py-8">優化空間利用</h4>
            </div>
            <div className="container flex-row lg:flex justify-center">
                <div className="w-full lg:w-2/3 p-8">
                    <div className="text-white text-center flex-row justify-between md:flex lg:justify-evenly py-8">
                        <div className="mb-8 overflow-hidden rounded-xl pr-0 md:pr-6">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">30%</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">空間節省</p>
                            <p className="text-xl">透過數據分析優化辦公空間配置</p>
                        </div>
                        <div className="mb-8 overflow-hidden rounded-xl pt-8 md:pt-0">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">85%</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">使用率提升</p>
                            <p className="text-xl">會議室和共享空間的平均使用效率</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl text-white w-full flex justify-center">
                        <div className="text-center">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">25%</h4>
                            <p className="text-3xl font-bold py-4">成本降低</p>
                            <p className="text-xl">每平方米的設施管理成本減少</p>
                        </div>
                    </div>
                </div>


                <div className="space-bg rounded-xl w-1/3 w-full h-[300px] lg:w-1/3 lg:h-[500px]">
                </div>
            </div>

        </section>
    )
}

export default Fmsdatabase;