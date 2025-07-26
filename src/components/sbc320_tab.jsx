
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sbc320tabledownload from './sbc320_table_download';
import Sbc320tablespecifiction from "./sbc320_table_specification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faApple } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import livein from "../assets/images/devices/bxp301_pages/livein.jpg";
import UHD from "../assets/images/devices/bxp301_pages/UHD.jpg";
import wrotation from "../assets/images/devices/bxp301_pages/w-rotation.jpg";
import ble from "../assets/images/devices/bxp301_pages/ble.jpg";
import fhd100wifi from "../assets/images/devices/bxp301_pages/fhd100-wifi.jpg";
import smil from "../assets/images/devices/bxp301_pages/p_smil.jpg";
import stable from "../assets/images/devices/bxp301_pages/stable.jpg";
import plug from "../assets/images/devices/bxp301_pages/off-by-plug.jpg";
import signeffexbundle from "../assets/images/devices/bxp301_pages/signeffex-bundle.jpg";

const Sbc320tab = () => {
    const [open, setOpen] = useState("home");

    const handleTabOpen = (tabCategory) => {
        setOpen(tabCategory);
    };

    return (
        <>
            <section className="py-20 lg:py-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-0 md:px-4">
                            <div className="mb-14 w-full">
                                <div className="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                                    <Link
                                        onClick={() => handleTabOpen("home")}
                                        className={`cursor-pointer rounded-md px-4 py-3 text-base font-medium md:text-xl lg:px-6 ${open === "home"
                                            ? "bg-secondary text-black"
                                            : "text-body-color hover:bg-secondary hover:text-white dark:text-dark-3 dark:hover:text-white"
                                            }`}
                                    >
                                        商品特色
                                    </Link>
                                    <Link
                                        onClick={() => handleTabOpen("about")}
                                        className={`cursor-pointer rounded-md px-4 py-3 text-base font-medium md:text-xl lg:px-6 ${open === "about"
                                            ? "bg-secondary text-black"
                                            : "text-body-color hover:bg-secondary hover:text-white dark:text-dark-3 dark:hover:text-white"
                                            }`}
                                    >
                                        規格資源
                                    </Link>
                                    <Link
                                        onClick={() => handleTabOpen("team")}
                                        className={`cursor-pointer rounded-md px-4 py-3 text-base font-medium md:text-xl lg:px-6 ${open === "team"
                                            ? "bg-secondary text-black"
                                            : "text-body-color hover:bg-secondary hover:text-white dark:text-dark-3 dark:hover:text-white"
                                            }`}
                                    >
                                        下載SignCMS
                                    </Link>


                                </div>
                                <TabContent1
                                    title="即時畫面與個人廣告整合可能"
                                    details="您可以整合一組HDMI 1920 x 1080p的外部影像匯入，重新編譯加入自己的廣告版塊再重新播放出來。達到公播放送系統的額外廣告增值可能！"

                                    subtitle1="4K UHD的極致細膩畫質"
                                    subtitle1details="高清屏幕 4K UHD 解析度可高達一般FHD(1920x1080)的四倍畫質，超越視網膜帶來身臨其境的視覺體驗，讓畫面細膩變化栩栩如生，讓您的商品精華耀眼。"

                                    subtitle2="直立式四向支援"
                                    subtitle2details="採用Andriod Screen螢幕旋轉提供最佳的顯示器方向設定，能滿足直接90至360度共四個螢幕方向定位，不需再特別處理煩惱你的影像圖片的自行後製轉向，直接就能完整直立顯示。若你有直立式螢幕播放需求，務必挑選這款！"

                                    subtitle3="提供iBeacon (BLE)"
                                    subtitle3details="使用廣告機也能兼差當iBeacon傳輸器使用，你可以輕易的將商品打入大型空間，結合自行開發應用始做為室內微定位可能，滿足行銷與導覽應用。適合具備商用程式開發的設計群朋友。"

                                    subtitle4="內建無線網路Wi-Fi"
                                    subtitle4details="支援無線傳輸的實際需求，提供802.11b/g/n Wi-Fi無線網路模組，適用於各種不適合施工的商用空間應用。使用彈性更上一階。"

                                    subtitle5="HTML5+SMIL開發需求"
                                    subtitle5details="可做速成開發的HTML5掛載應用。降低門檻提供有效的第三方整合設計。適合做為Web看板考量。另釋出API完整XML控制碼。以W3C的SMIL做為基礎標準延伸，供各種客製化的看板設計，創造更加樣的看板定位。"

                                    subtitle6="商用嚴苛耐用等級"
                                    subtitle6details="外殼採用硬化塗層的全金屬機身無風扇設計，高溫耐久能抵抗外在干擾的嚴苛環境。機身更輕薄並安靜無聲。"

                                    subtitle7="自動斷電防護設計"
                                    subtitle7details="沒有多餘電源紐，只要通電就能自我開機作業，因為有內建WatchDog Timer工具能不斷修復並保護系統運作資源，您可以大膽放心關閉展示間的總電源，下次送電繼續運作。"

                                    subtitle8="SignCMS 微型商務系統 ???"
                                    subtitle8details="您可以搭配使用我們的SignCMS的微型商務管理軟體，提供四大功能輕鬆完成編輯、排程、傳輸與管理。滿足各種食衣住行等空間消費的小型商務使用。"

                                    tabCategory="home"
                                    open={open}
                                />
                                <TabContent2
                                    title="Download"
                                    details=""

                                    subtitle1="Specification"
                                    subtitle1details=""

                                    tabCategory="about"
                                    open={open}
                                />
                                <TabContent3
                                    title="Download"
                                    details=""
                                    tabCategory="team"
                                    open={open}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sbc320tab;

const TabContent1 = ({ open,
    tabCategory,
    details,
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    subtitle5,
    subtitle6,
    subtitle7,
    subtitle8,
    subtitle1details,
    subtitle2details,
    subtitle3details,
    subtitle4details,
    subtitle5details,
    subtitle6details,
    subtitle7details,
    subtitle8details,
}) => {
    return (
        <div>
            <div
                className={`text-base leading-relaxed dark:text-dark-4 ${open === tabCategory ? "block" : "hidden"
                    } `}
            >
                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{title}</h4>
                    <p className="text-xl md:text-2xl">{details}</p>
                    <img className="w-full lg:w-9/12" src={livein} alt="livein" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle1}</h4>
                    <p className="text-xl md:text-2xl">{subtitle1details}</p>
                    <img className="w-full lg:w-9/12" src={UHD} alt="UHD" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle2}</h4>
                    <p className="text-xl md:text-2xl">{subtitle2details}</p>
                    <img className="w-full lg:w-9/12" src={wrotation} alt="wrotation" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle3}</h4>
                    <p className="text-xl md:text-2xl">{subtitle3details}</p>
                    <img className="w-full lg:w-9/12" src={ble} alt="ble" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle4}</h4>
                    <p className="text-xl md:text-2xl">{subtitle4details}</p>
                    <img className="w-full lg:w-9/12" src={fhd100wifi} alt="fhd100wifi" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle5}</h4>
                    <p className="text-xl md:text-2xl">{subtitle5details}</p>
                    <img className="w-full lg:w-9/12" src={smil} alt="smil" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle6}</h4>
                    <p className="text-xl md:text-2xl">{subtitle6details}</p>
                    <img className="w-full lg:w-9/12" src={stable} alt="stable" />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle7}</h4>
                    <p className="text-xl md:text-2xl">{subtitle7details}</p>
                    <img className="w-full lg:w-9/12" src={plug} alt="plug" />
                </div>
                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle8}</h4>
                    <p className="text-xl md:text-2xl">{subtitle8details}</p>
                    <img className="w-full lg:w-9/12" src={signeffexbundle} alt="signeffexbundle" />
                </div>

            </div>
        </div>
    );
};

const TabContent2 = ({ open,
    tabCategory,
    details,
    title,
    subtitle1,
    subtitle1details,

}) => {
    return (
        <div>
            <div
                className={`p-0 md:p-6 text-base leading-relaxed dark:text-dark-4 ${open === tabCategory ? "block" : "hidden"
                    } `}
            >
                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{title}</h4>
                    <Sbc320tabledownload />
                </div>

                <div className="my-16">
                    <h4 className="text-2xl md:text-4xl dark:text-dark-3 font-semibold">{subtitle1}</h4>
                    <Sbc320tablespecifiction />
                </div>

            </div>
        </div>
    );
};

const TabContent3 = ({
    open,
    tabCategory,
    details,
    title,

}) => {
    return (
        <div>
            <div
                className={`p-0 ma:p-6 text-base leading-relaxed dark:text-dark-4 ${open === tabCategory ? "block" : "hidden"
                    } `}
            >
                <div className="my-16">
                    <h4 className="text-3xl md:text-6xl dark:text-dark-3 font-semibold">{title}</h4>
                </div>
                {/* download sofeware */}
                <div className="container">
                    <h4 className="text-3xl md:text-4xl font-bold">播放器軟體下載 SignCMS</h4>
                    <section className="">
                        <div className="container">
                            <div className="flex flex-col lg:flex lg:flex-row justify-between items-center">
                                <div className="download-round-box group bg-white duration-200 hover:text-white overflow-hidden rounded-xl relative mx-4 flex justify-center items-center">
                                    <Link to="https://www.dropbox.com/scl/fi/lalvvw1xc8g62z9ihjy9u/SignEffeX_Setup_1_3_15.exe?rlkey=bcrgk9n9q0o6tr85mmkko49dq&amp;st=8h1a3oi8&amp;dl=1">
                                        <div className="download-round-lines"></div>
                                        <div className="download-round-linem"></div>
                                        <div className="download-round-lineb"></div>
                                        <FontAwesomeIcon className="font-icon" icon={faWindows} style={{ color: "#6DD3D1" }} />
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <p className="text-xl sm:text-2xl md:text-4xl p-8 text-black font-semibold">Windows</p>
                                    </Link>
                                </div>

                                <div className="download-round-box group bg-white hover:bg-white/0 duration-200 overflow-hidden rounded-xl relative mx-4 flex justify-center items-center">
                                    <Link to="https://www.dropbox.com/s/qjqn16nk8ku1ous/SignEffeX-mac-software-setup.zip?dl=1">
                                        <div className="download-round-lines"></div>
                                        <div className="download-round-linem"></div>
                                        <div className="download-round-lineb"></div>
                                        <FontAwesomeIcon className="font-icon" icon={faApple} style={{ color: "#CCC" }} />
                                        <p className="text-xl sm:text-2xl md:text-4xl p-8 text-black font-semibold">iMac用戶</p>
                                    </Link>
                                </div>
                                <div className="download-round-box group bg-white overflow-hidden  hover:bg-white/0 duration-200 rounded-xl relative mx-4 flex justify-center items-center">
                                    <Link to="https://www.dropbox.com/s/9l1vffjfu5wac42/2017_SignEffeX.pdf?dl=1">
                                        <div className="download-round-lines"></div>
                                        <div className="download-round-linem"></div>
                                        <div className="download-round-lineb"></div>
                                        <FontAwesomeIcon className="font-icon" icon={faFilePdf} style={{ color: "#db251d" }} />
                                        <p className="text-xl sm:text-2xl md:text-4xl p-8 text-black font-semibold">商品型錄</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
