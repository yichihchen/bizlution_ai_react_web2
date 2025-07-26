import React from 'react';
import { Link } from 'react-router-dom';
import "/src/index.css";
import "../assets/css/freeconsole.css";

const Freeconsole = () => {
    return (
        <div className="freeconsolebutton mt-4 p-2 text-center lg:w-[200px] md:w-[200px] w-[160px]">
            <Link to="/contact" className="px-5 py-2.5 text-base sm:text-base md:text-lg font-bold">
                <span>立即免費諮詢</span>
            </Link>
        </div>
    )
}

export default Freeconsole;