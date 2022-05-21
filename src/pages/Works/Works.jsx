import React from "react";
import style from "./Works.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../img/athlete-small.png";
import img2 from "../../img/theracer-small.png";
import img3 from "../../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll"
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  rainbow,
  rainbowContainer,
} from "../../animations";

const Works = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  
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
        <motion.div className={style.work}>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className={style.line}></motion.div>
          <Link to="#">
            <motion.img variants={photoAnim} src={img1} alt="wokr1" />
          </Link>
        </motion.div>
        <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className={style.work}>
          <motion.h2 variants={fade}>The Racer</motion.h2>
          <motion.div variants={lineAnim} className={style.line}></motion.div>
          <Link to="#">
            <motion.img variants={photoAnim} src={img2} alt="wokr2" />
          </Link>
        </motion.div>
        <motion.div ref={element2} variants={fade} animate={controls2} initial="hidden" className={style.work}>
          <motion.h2 variants={fade}>Good Times</motion.h2>
          <motion.div variants={lineAnim} className={style.line}></motion.div>
          <Link to="#">
            <motion.img variants={photoAnim} src={img3} alt="wokr3" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;