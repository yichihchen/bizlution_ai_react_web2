import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/header";
import Gotop from "../components/gotop";

import "/src/index.css";
import "../assets/css/contact.css";

const Contact = () => {
    return (
        <>
            <section className="dark:bg-dark">
                <div className="container">

                    <div className="grid grid-cols-12 relative">
                        <Gotop />
                        <div className="col-span-12 flex-row md:flex justify-center bg_border_l bg_border_r bg_border_b py-10">
                            <div className="w-full px-4 lg:w-2/5 xl:w-2/5">
                                <div className="mb-12 max-w-[570px] lg:mb-0">
                                    <span className="mb-4 block font-semibold text-[#f3dd52] text-4xl">
                                        聯絡我們
                                    </span>
                                    <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                        GET IN TOUCH WITH US
                                    </h2>
                                    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        晁碁科技股份有限公司是您實現安全邊緣AI解決方案的專業合作夥伴。我們提供全方位的平台與服務，從邊緣AI模型到安全策略管理，滿足您的企業需求。
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                    <form>
                                        <ContactInputBox
                                            type="text"
                                            name="name"
                                            placeholder="您的名字"
                                        />
                                        <ContactInputBox
                                            type="text"
                                            name="email"
                                            placeholder="您的信箱"
                                        />
                                        <ContactInputBox
                                            type="text"
                                            name="phone"
                                            placeholder="您的電話"
                                        />
                                        <ContactTextArea
                                            row="6"
                                            placeholder="您的留言"
                                            name="details"
                                            defaultValue=""
                                        />
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full rounded border border-primary bg-[#f3dd52] hover:bg-primary p-3 text-black transition hover:bg-opacity-90"
                                            >
                                                提交
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* upper row1 */}
                    <div className="grid grid-cols-12">
                        <div className="h-20 col-span-12 bg_border_lr"></div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};
