import { react } from "react";
//import Navbar from "./Navbar";
import gal from "../assets/images/ai/babycat.jpg";
import "../assets/css/hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { motion, useAnimation } from "framer-motion";

import Particle from "../components/particle";
const Hero3 = () => {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = window.innerWidth / 2 - clientX;
    const moveY = window.innerHeight / 2 - clientY;
    const offsetFactor = 20;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    });
  };
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <div
          className="width-100%  z-2
           overflow-hidden
           object-cover
      "
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto"
            }}
            globalFactorX={0.2}
            globalFactorY={0.2}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.25}
              factorY={0.25}
            ></MouseParallaxChild>
            <MouseParallaxChild factorX={0.25} factorY={0.25}>
              <div className="height-30 width-30">
                <Particle />
              </div>
              <motion.img
                className="z-3"
                //animate={imgAnimation}
                // transition={{
                //   type: "spring",
                //   stiffness: 30
                // }}
                onMouseMove={(e) => handleMouseMove(e)}
                src={gal}
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
             </div>
    </>
  );
};

export default Hero3;
