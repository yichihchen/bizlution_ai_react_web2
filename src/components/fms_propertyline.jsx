import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "/src/index.css"; //add

import "react-vertical-timeline-component/style.min.css"; //css被它擋住

import { styles } from "../styles";
import { fmspropertyline } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


import "../assets/css/title.css";

const FmspropertylineCard = ({ fmspropertyline }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: "rgb(23, 35, 55)",
            // #1d1836
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={fmspropertyline.date}
        iconStyle={{ background: fmspropertyline.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={fmspropertyline.icon}
                    alt={fmspropertyline.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {fmspropertyline.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Fmspropertyline = () => (
    <>
        <motion.div variants={textVariant()}>
            <span className="little_number">02</span><br />
            <span className="text-white">Our Properties</span>
            <h2 className={`${styles.sectionHeadText} text-center`}>延長資產壽命</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {fmspropertyline.map((fmspropertyline, index) => (
                    <FmspropertylineCard key={`experience-${index}`} fmspropertyline={fmspropertyline} />
                ))}
            </VerticalTimeline>
        </div>
    </>
);

export default SectionWrapper(Fmspropertyline, "work");