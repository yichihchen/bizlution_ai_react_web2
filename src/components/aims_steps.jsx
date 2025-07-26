import React from 'react';

import "/src/index.css"
import '../assets/css/aims_steps.css';


const Aimssteps = () => {
  return (

    <div className="aimssteps-wrap w-full flex-none md:flex bg-white/90 rounded-xl py-8 md:py-14 px-10 md:px-20">
      <ul className="w-full md:w-1/2">
        <ListItem count={1} text="需求評估與規劃" />
        <ListItem count={2} text="平台選擇與配置" />
        <ListItem count={3} text="流程標準化" />
        <ListItem count={4} text="團隊培訓與推廣" />
        <ListItem count={5} text="持續優化" />
      </ul>
    </div>

  );
};

export default Aimssteps;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color flex items-center text-base md:text-lg lg:text-xl text-black w-full my-2">
      <span className="aimssteps-list-number mr-2 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full text-base lg:text-xl font-semibold mr-5">
        {count}
      </span>
      {text}
    </li>
  );
};
