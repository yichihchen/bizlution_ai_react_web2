import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom"; //為了顯示出巢狀路由
import { AlternateEmailOutlined } from "@mui/icons-material";
import "/src/index.css";
import "../assets/css/header.css";
// import another layout
import Footer from "./footer";

import logo from "../assets/images/logo/bizlution_ai_primary.png";


const Layout = () => {
  const [open, setOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSystemMenu, setShowSystemMenu] = useState(false);
  const [showHardwareMenu, setShowHardwareMenu] = useState(false);

  console.log(open);

  useEffect(() => {
    if (open) {
      //forbidden the scroll
      document.body.style.overflow = "hidden";
      console.log(open);
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);



  return (
    <div>
      <header>
        <div className="header-wrap">
          <div className="container mx-auto">

            <div className="relative -mx-4 flex items-center justify-between">

              {/* logo add property: z-30 */}
              <div className="w-60 max-w-full px-4">
                {/* logo */}
                <Link to="/" className="block w-full py-5">
                  <img
                    src={logo}
                    alt="logo"
                    className="hidden dark:block"
                  />
                </Link>

              </div>
              <div className="hamburger flex w-full items-center justify-between px-4">
                <div className="">
                  {/*hamburger */}
                  <button
                    onClick={() => setOpen(!open)}
                    id="navbarToggler"
                    className={`  ${open && "navbarTogglerActive"
                      } absolute z-30 right-4 top-1/2 block rounded-lg px-3 py-[6px] xl:hidden`}
                  >

                    <span className="relative my-[6px] block h-[2px] w-[30px] dark:bg-white duration-100"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] dark:bg-white duration-100"></span>
                  </button>


                  <nav
                    id="navbarCollapse"
                    className={`absolute z-30 right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow xl:static xl:block xl:w-full xl:max-w-full xl:shadow-none dark:bg-dark-2 xl:dark:bg-transparent ${!open && "hidden"}`}
                  >

                    <ul className="block xl:flex">
                      {/*人工智慧管理、設備設施管理*/}
                      <li className="relative group xl:ml-8">
                        <Link
                          to="/aims"
                          className="flex py-4 text-base font-medium text-body-color xl:text-white hover:text-dark lg:inline-flex dark:hover:text-yellow-dark"
                        >
                          <span className="flex text-base font-medium text-body-color xl:text-white hover:text-dark lg:ml-0 lg:inline-flex dark:hover:text-yellow-dark group inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:w-0 before:duration-300 group-hover:before:w-full before:hidden before:xl:block">人工智慧管理</span>
                        </Link>
                      </li>
                      <li className="relative group xl:ml-8">
                        <Link
                          to="/fms"
                          className="flex py-4 text-base font-medium text-body-color xl:text-white hover:text-dark lg:inline-flex dark:hover:text-yellow-dark"
                        >
                          <span className="flex text-base font-medium text-body-color xl:text-white hover:text-dark lg:ml-0 lg:inline-flex dark:hover:text-yellow-dark group inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:w-0 before:duration-300 group-hover:before:w-full before:hidden before:xl:block">
                            設施與設備管理
                          </span>
                        </Link>
                      </li>
                      <li className="relative group xl:ml-8">
                        <Link
                          to="/cms"
                          className="flex py-4 text-base font-medium text-body-color xl:text-white xl:inline-flex dark:hover:text-yellow-dark"
                        ><span className="flex text-base font-medium text-body-color xl:text-white hover:text-dark lg:ml-0 lg:inline-flex dark:hover:text-yellow-dark group inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:w-0 before:duration-300 group-hover:before:w-full before:hidden before:xl:block">
                            數位看板管理</span>
                        </Link>
                      </li>

                      {/* 硬體規格li */}
                      <li className="relative group xl:ml-8">
                        {/* 偽元素_硬體規格內容*/}
                        <div className={`absolute left-0 top-full mt-2 w-52 bg-white text-black rounded shadow-lg 
                            invisible opacity-0 group-hover:visible group-hover:opacity-100
                            hover:visible hover:opacity-100
                            transition-all duration-300 z-20
                            before:content-[''] before:absolute before:-top-2 before:left-6
                            before:border-8 before:border-transparent before:border-b-white 
                            hidden xl:block
                            `}
                        >
                          <div className="rounded-xl bg-white p-2 xl:p-8 dark:bg-dark">
                            <div className="">
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    BXP-PC
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    SigneffeX
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    NPU Card
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* pseudo-elements yellow line */}
                        <button
                          onClick={() => setShowHardwareMenu(!showHardwareMenu)}
                          className="flex py-4 text-base font-medium text-body-color xl:text-white hover:text-dark lg:ml-0 lg:inline-flex dark:hover:text-yellow-dark 
                          group inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:w-0 before:duration-300 group-hover:before:w-full before:hidden before:xl:block"
                        >

                          硬體規格
                          <span
                            className={`hardware_svg ${showHardwareMenu ? "-rotate-45" : ""
                              } duration-200 ml-1`}
                          >
                            {/* add className="xl:hidden" */}
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="xl:hidden"
                            >
                              <path
                                d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                        {/* add lg hidden */}
                        <div
                          className={`w-full xl:absolute xl:left-0 xl:top-full xl:w-[850px] xl:rounded-xl xl:shadow-lg ${showHardwareMenu ? "block" : "hidden"
                            } xl:hidden`}
                        >
                          <div className="rounded-xl bg-white p-2 xl:p-8 dark:bg-dark ">
                            <div className="">
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    SigneffeX
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    BXP-PC
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to="/devices"
                                className="hover:bg-gray-1 xl:flex-row "
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                    NPU Card
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* 硬體規格li end */}

                      <li>
                        <Link
                          to="/contact"
                          className="xl:hidden flex py-4 text-base font-medium text-body-color xl:text-white xl:ml-8 xl:inline-flex dark:hover:text-yellow-dark"
                        >
                          聯絡我們
                        </Link>
                      </li>
                    </ul>

                    {/*The darker background behind the header sidebar  */}
                    {/* <div className={`openbackground ${open ? "bg-[#FBBF24]/50 w-screen h-screen absolute top-0 z-10" : " hidden"}`}>
                    </div> */}
                  </nav>

                </div>


                <div className="justify-end pr-16 sm:flex xl:pr-0">
                  <div>
                    <Link to="/contact" className="contactbutton px-5 py-2.5 text-sm xl:text-base font-medium text-white hidden xl:block">
                      Contact Us  <AlternateEmailOutlined />
                    </Link>
                  </div>

                  <ul>
                    <li className="relative">
                      <button
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        className=
                        "flex w-full py-2 text-xs md:text-base font-medium text-body-color hover:text-dark xl:ml-8 xl:inline-flex xl:w-auto justify-center items-center xl:justify-center text-white dark:hover:text-yellow-dark"
                      >
                        選擇語系
                        <span
                          className={`${showLangMenu ? "scale-y-100 -rotate-45" : ""
                            } duration-200 ml-1`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`w-full absolute xl:left-0 xl:top-full w-[100px] md:w-[160px] xl:rounded-xl xl:shadow-xl ${showLangMenu ? "block" : "hidden"
                          }`}
                      >
                        <div className="rounded-xl bg-white p-4 xl:p-8 dark:bg-dark">
                          <div className="">
                            <a
                              href="#"
                              className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                            >

                              <div>
                                <p className="py-4 text-xs md:text-base text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                  繁體中文
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="hover:bg-gray-1 xl:flex-row dark:hover:bg-white/5"
                            >
                              <div>
                                <p className="py-4 text-xs md:text-base text-body-color dark:text-dark-3 hover:text-yellow-dark">
                                  英語
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header >
      {/*The darker background behind the header sidebar  */}
      <div className={`openbackground ${open ? "bg-[#404040]/70 h-full w-full absolute z-20" : ""}`}>
      </div>

      <Outlet />
      <Footer />

    </div >

  );
};
export default Layout;
