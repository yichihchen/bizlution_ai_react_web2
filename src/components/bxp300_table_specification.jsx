
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TdStyle = {
    ThStyle: `w-4/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xl font-medium lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const Bxp300tablespecifiction = () => {
    return (
        <section className='bg-white dark:bg-dark py-10 '>
            <div className='container'>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <table className='w-full table-fixed'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> 特點 </th>
                                        <th className={TdStyle.ThStyle}> BXP-300</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>CPU</td>
                                        <td className={TdStyle.TdStyle2}>ARM 四核心 1.8GHz 處理器</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>GPU</td>
                                        <td className={TdStyle.TdStyle2}>Mali-T764 繪圖處理</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>系統快閃</td>
                                        <td className={TdStyle.TdStyle2}>DDR3 2GB 記憶體</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>儲存空間</td>
                                        <td className={TdStyle.TdStyle2}>內建32GB的eMMC V5.1</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>作業系統</td>
                                        <td className={TdStyle.TdStyle2}>SELinux + Android 5.1 SDK</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>管理方式</td>
                                        <td className={TdStyle.TdStyle2}>免費的 SignEffex 區網管理套件軟體
                                            HTML5 + JavaScript + CSS網址嵌入式連結 (單畫面顯示)<br />
                                            第三方開發解決方案 (使用W3C SMIL + HTML5設計)<br />
                                            Android 平台APK 自行安裝應用<br />
                                            HTML Web Widget 開發套件</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>後台支援</td>
                                        <td className={TdStyle.TdStyle2}>Beacon (BLE)<br />
                                            Watchdog Timer<br />
                                            RTC 即時時鐘<br />
                                            系統排程開關/定時重啟<br />
                                            UR 遠程更新APP (XML格式)<br />
                                            開機預設自動執行APP</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(影片)</td>
                                        <td className={TdStyle.TdStyle2}>H.264/MPEG-4</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(音樂)</td>
                                        <td className={TdStyle.TdStyle2}>MP3</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(圖片)</td>
                                        <td className={TdStyle.TdStyle2}>JPEG/ PNG</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='w-full table-fixed'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> 規格 </th>
                                        <th className={TdStyle.ThStyle}> BXP-300</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>IO介面</td>
                                        <td className={TdStyle.TdStyle2}>1組 HDMI 1.4b 數位輸出，支援最高3840 x 2160解析度<br />
                                            2組 USB 2.0連接埠<br />
                                            10/100/1000Mbps Giga 網路RJ-45連接埠<br />
                                            802.11 b/g/n Wi-Fi 無線網路<br />
                                            S/PDIF數位音效輸出<br />
                                            音效/麥克風二合一 4極 3.5mm 接頭<br />
                                            RS232連接埠 (預留)<br />
                                            Bluetooth Low Energy (BLE)支援<br />
                                            Micro SDHC擴充 (上限64GB)</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>電源規格</td>
                                        <td className={TdStyle.TdStyle2}>電壓轉換:12V, 1.5A 伏特直流電壓</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>環境壓力</td>
                                        <td className={TdStyle.TdStyle2}>操作溫度: -20 °C to 70 °C<br />
                                            操作濕度: 5 % to 90 %，非冷凝狀態下</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>認證標章</td>
                                        <td className={TdStyle.TdStyle2}>BSMI, NCC /CE /FCC</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>重量</td>
                                        <td className={TdStyle.TdStyle2}>415公克</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>主體容積</td>
                                        <td className={TdStyle.TdStyle2}>165 x 118.5 x 27 (mm)</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>保固範圍</td>
                                        <td className={TdStyle.TdStyle2}>三年有限硬體保固，以及電話諮詢服務</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Bxp300tablespecifiction;

