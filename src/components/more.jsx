import React from 'react';
import { Link } from 'react-router-dom';
import {
    MoreHorizOutlined,
} from "@mui/icons-material";

import "/src/index.css";
import "../assets/css/more.css";

const More = () => {
    return (
        <div className="morebutton p-2">
            <Link to="/contact" className="px-5 py-2.5 text-xs md:text-lg font-bold">
                <span>more</span> <MoreHorizOutlined/>
            </Link>
        </div>
    )
}

export default More;