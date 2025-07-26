import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/header";

import "/src/index.css";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <>
      {/* bg fixed */}
      <div className="contact-bg">
      </div>
      <section className="z-10 overflow-hidden pt-20 lg:pt-[120px]">

        <div className="container flex-row md:flex px-20 pt-20 pb-40">
          {/* white line */}
          <div className="contact_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

          <div className="pt-10 md:pt-1 w-full md:w-7/12">
            <h2 className="contact_title mb-8 font-bold text-dark dark:text-white text-2xl sm:text-4xl md:text-6xl">Contact Us</h2>
            <h2 className="contact_title mb-8 font-bold text-dark dark:text-white text-2xl sm:text-4xl md:text-6xl">聯絡我們</h2>

          </div>
        </div>

        <div className="dark:bg-dark">
          {/* upper row1 */}
          <div className="grid grid-cols-12">
            <div className="h-20 col-span-12 bg_border_r"></div>
            {/* <div className="h-20 col-span-10 bg_border_r bg_border_b"></div>
            <div className="h-20 col-span-1"></div> */}
          </div>


          <div className="grid grid-cols-12 container">
        
            <div className="col-span-12 flex-row md:flex justify-center bg_border_l bg_border_r bg_border_t bg_border_b py-10">
              <div className="w-full px-4 lg:w-2/5 xl:w-2/5">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="mb-4 block font-semibold text-primary text-4xl">
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
                        className="w-full rounded border border-primary bg-primary p-3 text-black transition hover:bg-opacity-90"
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
            <div className="h-20 col-span-12 bg_border_r"></div>
            {/* <div className="h-20 col-span-10 bg_border_r"></div>
            <div className="h-20 col-span-1"></div> */}
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
