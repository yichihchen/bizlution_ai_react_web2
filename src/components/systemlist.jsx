import React from 'react';
import { motion } from 'framer-motion'; //add
import Tilt from 'react-parallax-tilt';

import "/src/index.css";
import "../assets/css/systemlist.css";
import card1 from "../assets/images/homepage/card/card_1.png";
import card2 from "../assets/images/homepage/card/card_2.png";
import card3 from "../assets/images/homepage/card/card_3.png";
import Gotop from "../components/gotop";

const Systemlist = () => {
    return (
        <>
            <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">

                <div className="container relative">
                    <Gotop />
                    <div className="">
                        <span className="little_number">03</span><br />
                        <span className="text-white">Our Systems</span>
                    </div>

                    <div className="py-8">
                        <h4 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold text-white">我們的系統方案</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <SingleCard
                            image={card1}
                            CardTitle="AIMS 人工智慧管理系統"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="我們的 AIMS 系統為您的 AI 資產提供完整生命週期管理，從開發、測試到部署與監控，全方位提升 AI 專案的成功率與投資回報。"
                            Button="View Details"
                        />
                        <SingleCard
                            image={card2}
                            CardTitle="FMS 設施管理系統優勢"
                            CardDescription="我們的設施管理系統為企業提供全方位的智慧建築解決方案，將先進技術與實用功能完美結合，協助您優化設施運營、降低成本並提升整體效能。"
                            Button="View Details"
                        />
                        <SingleCard
                            image={card3}
                            CardTitle="數位看板管理系統"
                            CardDescription="結合 AI 分析，根據觀眾特徵、時間、位置等因素自動調整顯示內容，提高互動率。"
                            Button="View Details"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
}) => {
    return (
        <>
            <Tilt
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                scale={1}
                transitionSpeed={450}
                className="w-full"
            >
                <div className="systemlist_wrap">

                    <div className="systemlist_card overflow-hidden rounded-lg  dark:bg-dark shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 ">
                        <img src={image} alt="" className="w-full" />
                        <div className=" p-8 text-center sm:p-9 md:p-7 xl:p-9">
                            <h3>
                                <a
                                    href={titleHref ? titleHref : "/#"}
                                    className="card_title mb-4 block text-xl font-semibold text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                >
                                    {CardTitle}
                                </a>
                            </h3>
                            <p className="mb-7 text-base md:text-lg leading-relaxed text-body-color dark:text-gray-5 min-h-fit sm:h-[150px] md:h-[180px] lg:h-[130px] ">
                                {CardDescription}
                            </p>

                        </div>
                    </div>

                </div>
            </Tilt>
        </>
    );
};

export default Systemlist;
