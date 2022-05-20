import React from 'react';
import style from './About.module.scss';
import homeImg1 from '../../img/home1.png';
import { motion } from 'framer-motion';
import Wave from '../Wave/Wave';
import { titleAnim, container } from '../../animations';


const About = () => {

  return (
    <div className={style.aboutSection}>
      <Wave/>
      <div className={style.description}>

        <motion.div variants={container} initial="hidden" animate="show" className={style.title}>
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </div>
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
          </div>
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <p>Contact us for any photography or videography ideas thet you have. 
            We have proffesionals with amazing skills</p>
        <button>Contact Us</button>

      </div>

        <div className={style.image}>
            <img src={homeImg1} alt="About Me" />
        </div>
    </div>
  );
}

export default About