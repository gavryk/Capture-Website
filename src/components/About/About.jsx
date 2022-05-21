import React from 'react';
import style from './About.module.scss';
import homeImg1 from '../../img/myPhoto.jpg';
import { motion } from 'framer-motion';
import Wave from '../Wave/Wave';
import { titleAnim, container, photoAnim, fade } from '../../animations';
import { Link } from 'react-router-dom';


const About = () => {

  return (
    <div className={style.aboutSection}>
      <Wave />
      <div className={style.description}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={style.title}
        >
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>Hi, i'm Oleg,</motion.h2>
          </div>
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>
              <span>Front-end / Web,</span>
            </motion.h2>
          </div>
          <div className={style.hide}>
            <motion.h2 variants={titleAnim}>Developer.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade} initial="hidden" animate="show">
          I have been developing CMS Wordpress sites for 3 years, I have many
          commercial projects, but on this site the main emphasis is on React
          JS, as I am currently developing in this direction.
        </motion.p>
        <motion.button variants={fade} initial="hidden" animate="show">
          <Link to="contact">Contact Me</Link>
        </motion.button>
      </div>

      <div className={style.image}>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={homeImg1}
          alt="About Me"
        />
      </div>
    </div>
  );
}

export default About