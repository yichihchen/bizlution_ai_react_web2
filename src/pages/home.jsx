import React, { useState, useEffect } from "react";
import Agent from "../components/ai_agent";
// import Brand1 from "../components/brand";

// import PageTitle4 from "../components/pagetitle";
import CaseStudies from "../components/casestudies";
import Freeconsole from "../components/freeconsole";
import Historyline from "../components/home_experience"; //導入動畫
import Systemlist from "../components/systemlist";
import Contact from "../components/contact";
import HomeCustomer from "../components/home_customer";
import Hero3 from "../components/herotest";



import "/src/index.css";
import "../assets/css/home.css";

const Home = () => {

  return (
    <div className="home-container">
      {/* bg fixed */}
      <div className="section-bg">
      </div>

      <div className="section p-20 container flex-row md:flex h-[600px] md:h-[660px]">
        {/* white line */}
        <div className="section_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

        <div className="pt-10 md:pt-1 w-full md:w-7/12">
          <h1 className="section-title mb-8 font-bold text-dark dark:text-white text-2xl sm:text-4xl md:text-6xl">從平台到模型，打造您的 AI 競爭優勢</h1>
          <p className="section-content text-white leading-6 sm:leading-7 text-sm sm:text-base md:text-xl">
            我們提供量身打造企業級的 AIMS人工智慧管理、FMS設施與設備管理、CMS數位看板管理系統，結合專業 AI 模型優化與高效硬體整合，助您實現卓越營運與智慧創新。
          </p>
          <Freeconsole />
        </div>
      </div>

      <Agent />
      <Historyline />
      <Systemlist />
      <CaseStudies />

      <Contact />
      <HomeCustomer />
      <Hero3 />
    </div>
  );
};

export default Home;
