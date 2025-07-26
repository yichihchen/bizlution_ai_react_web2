import React from 'react';

import "/src/index.css"
import '../assets/css/cms_automatic.css';


const Cmsautomatic = () => {
  return (

    <div className="predict-wrap w-full flex-none md:flex bg-white/90 rounded-xl py-8 md:py-14 px-10 md:px-20">
      <ul className="w-full md:w-1/2">
        <ListItem count={1} text="情境因素" />
        <ListItem count={2} text="下雨天氣" />
        <ListItem count={3} text="用餐時間" />
        <ListItem count={4} text="特定節日" />
        <ListItem count={5} text="庫存變化" />
      </ul>
      <ul className="w-full md:w-1/2">
        <ListItem count={6} text="AI反應" />
        <ListItem count={7} text="天氣API偵測降雨" />
        <ListItem count={8} text="時間感知系統" />
        <ListItem count={9} text="日曆事件識別" />
        <ListItem count={10} text="庫存系統整合" />
      </ul>
      <ul className="w-full md:w-1/2">
        <ListItem count={11} text="顯示內容" />
        <ListItem count={12} text="雨具廣告、室內活動" />
        <ListItem count={13} text="餐廳優惠、美食推薦" />
        <ListItem count={14} text="節慶相關促銷活動" />
        <ListItem count={15} text="庫存充足商品推廣" />
      </ul>
    </div>

  );
};

export default Cmsautomatic;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color flex items-center text-base md:text-lg lg:text-xl text-black w-full my-2">
      <span className="predict-list-number mr-2 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full text-base lg:text-xl font-semibold mr-5">
        {count}
      </span>
      {text}
    </li>
  );
};
