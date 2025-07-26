import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "/src/index.css"; //add

import "react-vertical-timeline-component/style.min.css"; //css被它擋住

import { styles } from "../styles";
import { aimsdeployline } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


import "../assets/css/title.css";

const AimsdeploylinelineCard = ({ aimsdeployline }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: "rgb(23, 35, 55)",
            // #1d1836
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={aimsdeployline.date}
        iconStyle={{ background: aimsdeployline.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={aimsdeployline.icon}
                    alt={aimsdeployline.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {aimsdeployline.points.map((point, index) => (
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

const Aimsdeployline = () => (
    <>
        <motion.div variants={textVariant()}>
            <span className="little_number">02</span><br />
            <span className="text-white">Our Modals</span>
            <h2 className={`${styles.sectionHeadText} text-center`}>模型部署流程</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {aimsdeployline.map((aimsdeployline, index) => (
                    <AimsdeploylinelineCard key={`experience-${index}`} aimsdeployline={aimsdeployline} />
                ))}
            </VerticalTimeline>
        </div>
    </>
);

export default SectionWrapper(Aimsdeployline, "work");