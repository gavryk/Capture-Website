import React from 'react'
import { About, Faq, Services } from '../../components';
import style from './AboutUs.module.scss';
import { motion } from "framer-motion";
import ScrollTop from '../../components/ScrollTop';
// import { pageAnimation } from "../../animations";

const AboutUs = () => {
  return (
    <motion.div
      // variants={pageAnimation}
      // initial="hidden"
      // animate="show"
      // exit="exit"
      className={style.aboutUsPage}
    >
      <About />
      <Services />
      <Faq />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs