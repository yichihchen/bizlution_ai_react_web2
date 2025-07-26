import React from "react";
import chevrondouble from "../assets/images/icons/chevron-down-double.svg";

import "/src/index.css";
import "../assets/css/fms_prospect.css";

const Fmsprospect = () => {
    return (
        <div>
            <ul>
                <li className="predict-circle1 py-8 w-full lg:w-10/12 relative">
             
                    <div className="px-8 flex">
                        <div className="w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="robot" data-prefix="fal" aria-hidden="true"><path d="M320 0c8.8 0 16 7.2 16 16V96H448c53 0 96 43 96 96V416c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96H304V16c0-8.8 7.2-16 16-16zM192 128c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H320 192zm16 256h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM48 224H64v32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16H64v32H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zM592 384c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H576V224h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V384h16z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">自主決策系統</p>
                            <p className="text-white mt-2 text-lg">未來的 FMS 將具備更強的自主決策能力，能在無需人工干預的情況下，自動執行複雜的設施管理任務。</p>
                        </div>
                    </div>
                </li>
                <div className="w-[50px] py-2">
                    <img className="w-full" src={chevrondouble} alt="chevron-down-double" />
                </div>
                <li className="predict-circle1 flex py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="vr-cardboard" data-prefix="fal" aria-hidden="true"><path d="M576 96H64c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H200.4c12.1 0 23.2-6.8 28.6-17.7L268.2 320c9.8-19.6 29.9-32 51.8-32s42 12.4 51.8 32l-21.5 10.7L371.8 320l39.2 78.3c5.4 10.8 16.5 17.7 28.6 17.7H576c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM64 64H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H439.6c-24.2 0-46.4-13.7-57.2-35.4l-39.2-78.3c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-39.2 78.3c-10.8 21.7-33 35.4-57.2 35.4H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64zM176 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm336 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-128 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">虛擬與擴增實境應用</p>
                            <p className="text-white mt-2 text-lg">VR/AR 技術將與 FMS 結合，使技術人員能透過虛擬指導進行維修，或在實際環境中查看設備數據疊加層。</p>
                        </div>
                    </div>
                </li>
                <div className="w-[50px] py-2">
                    <img className="w-full" src={chevrondouble} alt="chevron-down-double" />
                </div>
                <li className="predict-circle1 flex py-8 w-full lg:w-10/12 relative">
                    <div className="px-8 flex">
                        <div className="w-[120px] md:w-[80px] mr-8">
                            <svg class="colorable-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="building-user" data-prefix="fal" aria-hidden="true"><path d="M64 32H320c17.7 0 32 14.3 32 32V393.4c9.2-10.2 20-18.9 32-25.6V271.8 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64h64 32 64 32 64c3.2 0 6.4-.2 9.5-.7c-5.5-9.2-8.9-19.9-9.4-31.3l-.1 0H256V416c0-35.3-28.7-64-64-64s-64 28.7-64 64v64H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM224 416v64H160V416c0-17.7 14.3-32 32-32s32 14.3 32 32zM64 120v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm32 8h32v32H96V128zM248 96c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H248zm8 64V128h32v32H256zM64 248v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V248c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm32 8h32v32H96V256zm152-32c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V248c0-13.3-10.7-24-24-24H248zm8 64V256h32v32H256zm192-16a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM384 477.1c0-33.7 27.4-61.1 61.1-61.1H546.9c33.7 0 61.1 27.4 61.1 61.1c0 1.6-1.3 2.9-2.9 2.9H386.9c-1.6 0-2.9-1.3-2.9-2.9zM445.1 384c-51.4 0-93.1 41.7-93.1 93.1c0 19.3 15.6 34.9 34.9 34.9H605.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H496 445.1z" fill="#f3dd52"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-xl font-bold">全面智慧建築整合</p>
                            <p className="text-white mt-2 text-lg">FMS 將成為智慧建築的中樞神經系統，整合所有子系統，實現建築環境的完全智能化和自適應。</p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Fmsprospect;