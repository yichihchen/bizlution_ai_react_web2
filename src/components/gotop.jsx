import React from 'react';
import {
    KeyboardArrowUpOutlined,
} from "@mui/icons-material";

import "/src/index.css";
import "../assets/css/gotop.css";

const Gotop = () => {
    return (
        <div className="absolute arrowup flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
            {/* <a href="#" className="transition duration-150"><KeyboardArrowUpOutlined /></a> */}
            <button onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className=""><KeyboardArrowUpOutlined /></button>
        </div>
    )
}

export default Gotop;