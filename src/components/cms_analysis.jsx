import React from 'react';

import "/src/index.css";
import "../assets/css/cms_analysis.css";

const Cmsanalysis = () => {
    return (
        <section className="py-20">
            <div className="container">
                <div className="">
                    <span className="little_number">03</span><br />
                    <span className="text-white">Our Efficiency</span>
                </div>
                <h4 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold py-8">進階觀眾分析</h4>
            </div>

            <div className="container flex-row lg:flex justify-center">
                <div className="w-full lg:w-2/3 p-8">

                    <div className="text-white text-center flex-row justify-between md:flex lg:justify-evenly py-8">
                        <div className="mb-8 overflow-hidden rounded-xl pr-0 md:pr-6">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">68%</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">觀看率</p>
                            <p className="text-xl">經過的人群中停下觀看的比例</p>
                        </div>
                        <div className="mb-8 overflow-hidden rounded-xl pt-8 md:pt-0">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold">42秒</h4>
                            <p className="text-2xl md:text-2xl lg:text-3xl font-bold py-4">平均觀看時間</p>
                            <p className="text-xl">觀眾停留觀看的平均時間</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl text-white w-full">
                        <div className="">
                            <h4 className="text-white text-7xl md:text-5xl py-4 font-bold text-center">23%</h4>
                            <p className="text-3xl font-bold py-4 text-center">互動轉化率</p>
                            <p className="text-xl text-center">觀看後進行互動的比例</p>
                        </div>
                        <p className="py-8">利用AI影像分析技術，系統可更精確地估算觀看人數、平均觀看時長、人群流動方向、甚至大致的情緒反應（在合規前提下進行匿名分析），提供比傳統播放次數更深入的洞察，幫助評估內容和活動的成效，了解受眾輪廓，優化未來的內容策略與投放。</p>
                    </div>
                </div>

                <div className="cmsanalysis-bg rounded-xl w-full h-[300px] lg:w-1/3 lg:h-[500px]">
                </div>
            </div>

        </section>
    )
}

export default Cmsanalysis;