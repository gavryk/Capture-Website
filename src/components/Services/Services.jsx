import React from 'react';
import style from './Services.module.scss';
import { motion } from "framer-motion";
import { fade } from "../../animations";
//icons
import reactIcon from "../../img/react-logo.svg";
import jsIcon from "../../img/js.svg";
import reduxIcon from "../../img/redux.svg";
import frontEndIcon from "../../img/front-end-logo.png";
import home2 from "../../img/serviceImg.jpg";
//custom hooks
import {useScroll} from '../../hooks/useScroll';

const Services = () => {
  const [element, controls] = useScroll();
  
  return (
    <motion.div
      variants={fade}
      animate={controls}
      className={style.servicesSection}
      ref={element}
    >
      <div className={style.image}>
        <img src={home2} alt="service" />
      </div>
      <div className={style.description}>
        <h2>
          <span>Skills</span>
        </h2>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={jsIcon} alt="javascript" />
              <span>Javascript</span>
            </div>
            <p>
              Good knowledge javascript / jQuery.I use it every day in my
              projects on curent projects.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={reactIcon} alt="reactjs" />
              <span>React JS</span>
            </div>
            <p>I am developing in this direction, I have some pet projects in my GitHub.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={reduxIcon} alt="Clock" />
              <span>Redux</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={frontEndIcon} alt="Clock" />
              <span>Front End Technologies</span>
            </div>
            <p>And More Web Technologies.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services