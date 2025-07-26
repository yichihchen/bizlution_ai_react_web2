
import React from "react";
import { Link } from "react-router-dom";
import livein from "../assets/images/devices/bxp301_pages/livein.jpg";
import UHD from "../assets/images/devices/bxp301_pages/UHD.jpg";
import wrotation from "../assets/images/devices/bxp301_pages/w-rotation.jpg";
import ble from "../assets/images/devices/bxp301_pages/ble.jpg";
import fhd100wifi from "../assets/images/devices/bxp301_pages/fhd100-wifi.jpg";
import smil from "../assets/images/devices/bxp301_pages/p_smil.jpg";

import Devicesidebar from "../components/devicesidebar";

import se01 from "../assets/images/signeffex/se-01.jpg";
import se02 from "../assets/images/signeffex/se-02.jpg";
import se03 from "../assets/images/signeffex/se-03.jpg";
import se04 from "../assets/images/signeffex/se-04.jpg";
import se05 from "../assets/images/signeffex/se-05.jpg";

const SignEffexdetail = () => {

    return (
        <>
            {/* bg fixed */}
            <div className="devices-bg">
            </div>

            <section className="lg:py-[120px]">
                <div className="container py-20">
                    <Devicesidebar/>

                    <div className="-mx-4 flex flex-wrap bg-white rounded-xl">
                        <div className="w-full px-0 md:px-4">

                            <div className="p-6">
                                <h4 className="text-2xl md:text-6xl dark:text-dark-3 font-semibold py-6">快速了解我們的SignEffex</h4>
                                <p className="text-xl md:text-2xl">SignEffeX 數位看版播放系統，採用輕盈的介面直覺操作設計可滿足一般人使用，並擁有個性化的自訂版面廣告。符合消費者大多數的播放顯示應用，能適應於餐廳、服飾業、美容業者、醫療診所、商辦大樓等各種商用展示空間。</p>
                            </div>
                            {/* 嵌入一個youtube */}
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/4SZlhA73dHI" frameborder="0" allowfullscreen="">
                            </iframe>



                            <div className="mb-14 w-full">
                                <TabContent1
                                    title="輕商務型的集客式行銷電子看板"
                                    details="超輕巧的新世代管理數位看版套件！符合終端真正客戶所量身規劃的編輯發佈軟體，開發核心依據智能優化與上手簡便為目標。真正滿足簡單廉價又好上手的唯一方案，滿足你真正需求。"

                                    subtitle1="彈性又快速的多區域版面設計"
                                    subtitle1details="我們最大的特色是保留了複合拼區的分割畫面卻不限制，能智能化彈性調整每一塊區域之邊界與位置，可多達5組區域使用分配，然而你可以自由發揮各種分配組合而不受上限。容易規劃又不失彈性，是我們的優勢。"

                                    subtitle2="連續多版面的輪流播放"
                                    subtitle2details="擺脫單調乏味的版型放送，你可以在我們的系統上連續使用多組不同的版型進行輪流播放，並指定每一個版型的顯示秒數，達到主題式的切換內容效果。將廣告持續抽換保持新鮮感，放大客戶的視艷盡情的譁眾取寵吧！"

                                    subtitle3="不可或缺的定時排程規劃"
                                    subtitle3details="做為數位看版當然要有排程規劃功能才對。深入廉價無排程的低階應用市場，允許你根據不同7天24小時內指定對應的促銷內容播送。輕鬆滿足你的個人廣告時段或不同消費優惠時段放送。"

                                    subtitle4="數位看版四大功能集於一身"
                                    subtitle4details="SignEffeX擁有數位看板系統該有的四大基礎功能，輕鬆完成你所要的數位看板建置。具備網路式管理以及手動排程匯出，可滿足各種終端市場各行業自行輕鬆使用。"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignEffexdetail;

const TabContent1 = ({
    details,
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    subtitle1details,
    subtitle2details,
    subtitle3details,
    subtitle4details,
}) => {
    return (
        <div>
            <div
                className={`p-6 text-base leading-relaxed dark:text-dark-4 `}
            >
                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{title}</h4>
                    <p className="text-xl md:text-2xl">{details}</p>
                    <img className="w-full lg:w-9/12" src={se01} alt="se01" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle1}</h4>
                    <p className="text-xl md:text-2xl">{subtitle1details}</p>
                    <img className="w-full lg:w-9/12" src={se02} alt="se02" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle2}</h4>
                    <p className="text-xl md:text-2xl">{subtitle2details}</p>
                    <img className="w-full lg:w-9/12" src={se03} alt="se03" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle3}</h4>
                    <p className="text-xl md:text-2xl">{subtitle3details}</p>
                    <img className="w-full lg:w-9/12" src={se04} alt="se04" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle4}</h4>
                    <p className="text-xl md:text-2xl">{subtitle4details}</p>
                    <img className="w-full lg:w-9/12" src={se05} alt="se05" />
                </div>

            </div>
        </div>
    );
};



