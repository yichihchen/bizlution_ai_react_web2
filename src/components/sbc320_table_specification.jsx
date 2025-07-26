
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xl font-medium lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const Sbc320tablespecifiction = () => {
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
                                        <th className={TdStyle.ThStyle}> SBC-320</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>CPU</td>
                                        <td className={TdStyle.TdStyle2}>Rockchip RK3399 Hexa-core 2x Cortex-A72 + 4x Cortex-A53</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>GPU</td>
                                        <td className={TdStyle.TdStyle2}>Mali-T860MP4</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>系統快閃</td>
                                        <td className={TdStyle.TdStyle2}>DDR3 4GB 記憶體</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>儲存空間</td>
                                        <td className={TdStyle.TdStyle2}>eMMC 32GB</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>作業系統</td>
                                        <td className={TdStyle.TdStyle2}>Android 13</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>管理方式</td>
                                        <td className={TdStyle.TdStyle2}>SignCMS 區網管理套件軟體
                                            HTML5 + JavaScript + CSS網址嵌入式連結 (單畫面顯示)<br />
                                            Android 平台APK 自行安裝應用<br />
                                            HTML Web Widget 開發套件(例如天氣、跑馬燈、時鐘等等)</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>後台支援</td>
                                        <td className={TdStyle.TdStyle2}>
                                            Watchdog Timer<br />
                                            RTC 即時時鐘<br />
                                            系統排程關閉/定時重啟<br />
                                            UR 遠程更新APP (XML格式)<br />
                                            開機預設自動執行APP</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(影片)</td>
                                        <td className={TdStyle.TdStyle2}>Avi, Ts, Vob, Mkv, Mov, ISO, wmv, asf, flv, dat, mpg, mpeg, mp4</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(音樂)</td>
                                        <td className={TdStyle.TdStyle2}>MP3, WMA, AAC, WAV, OGG, FLAC</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>檔案支援(圖片)</td>
                                        <td className={TdStyle.TdStyle2}>HD JPEG, BMP, GIF, PNG, WEB</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> 規格 </th>
                                        <th className={TdStyle.ThStyle}> SBC-320</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>IO介面</td>
                                        <td className={TdStyle.TdStyle2}>
                                            1組 HDMI 1.4b 數位輸出，支援最高3840 x 2160解析度<br />
                                            1組 HDMI 1.4b 數位輸入，支援最高1920 x 1080解析度<br />
                                            1組 TypeC型 x 1 –支持OTG<br /> 
                                            1組 USB 2.0連接埠<br />
                                            1組 USB 3.0連接埠<br />
                                            乙太網 10/100/1000M標準 RJ45<br />
                                            無線2.4G/5G雙頻Wi-Fi,IEEE802.11 a/b/g/n/ac<br />
                                            耳機 + 麥克風<br />
                                            RS232連接埠<br />
                                            藍芽 5.0 版<br />
                                            Micro SDHC擴充 (上限64GB)</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>電源規格</td>
                                        <td className={TdStyle.TdStyle2}>電壓轉換:直流電 12V/2.0A 電源變壓器（CE、FCC、PSE、BSMI 認證）</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>環境壓力</td>
                                        <td className={TdStyle.TdStyle2}>操作溫度: 0°C ~ 50°C<br />
                                            儲存： -10°C ~ 55°C</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>認證標章</td>
                                        <td className={TdStyle.TdStyle2}>CE、FCC、PSE、BSMI、NCC</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>重量</td>
                                        <td className={TdStyle.TdStyle2}>478公克</td>
                                    </tr>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>主體容積</td>
                                        <td className={TdStyle.TdStyle2}>153 x 108 x 30 (mm)</td>
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

export default Sbc320tablespecifiction;

