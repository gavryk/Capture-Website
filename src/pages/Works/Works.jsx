import React from "react";
import style from "./Works.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../img/athlete-small.png";
import img2 from "../../img/theracer-small.png";
import img3 from "../../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  rainbow,
  rainbowContainer,
} from "../../animations";

const Works = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={style.worksPage}
    >
      <motion.div variants={rainbowContainer}>
        <motion.div variants={rainbow} className={style.frame1}></motion.div>
        <motion.div variants={rainbow} className={style.frame2}></motion.div>
        <motion.div variants={rainbow} className={style.frame3}></motion.div>
        <motion.div variants={rainbow} className={style.frame4}></motion.div>
      </motion.div>
      <div className={style.worksWrapper}>
        <div className={style.work}>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className={style.line}></motion.div>
          <Link to="#">
            <motion.img variants={photoAnim} src={img1} alt="wokr1" />
          </Link>
        </div>
        <div className={style.work}>
          <h2>The Racer</h2>
          <div className={style.line}></div>
          <Link to="#">
            <img src={img2} alt="wokr2" />
          </Link>
        </div>
        <div className={style.work}>
          <h2>Good Times</h2>
          <div className={style.line}></div>
          <Link to="#">
            <img src={img3} alt="wokr3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;