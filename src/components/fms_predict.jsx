import React from 'react';

import "/src/index.css"
import '../assets/css/fms_predict.css';


const Fmspredict = () => {
  return (

    <div className="w-full flex-none md:flex bg-white/90 rounded-xl py-8 md:py-14 px-10 md:px-20">
      <ul className="w-full md:w-1/2">
        <ListItem count={1} text="固定時間間隔的例行檢查" />
        <ListItem count={2} text="設備故障後才進行維修" />
        <ListItem count={3} text="基於經驗的維護決策" />
        <ListItem count={4} text="被動式問題處理" />
      </ul>
      <ul className="w-full md:w-1/2">
        <ListItem count={5} text="基於設備實際狀況的智能檢查" />
        <ListItem count={6} text="在故障發生前預測並維修" />
        <ListItem count={7} text="基於數據分析的精準決策" />
        <ListItem count={8} text="主動式問題預防" />
      </ul>
    </div>

  );
};

export default Fmspredict;

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
