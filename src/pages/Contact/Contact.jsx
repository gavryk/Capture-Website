import React from 'react';
import style from './Contact.module.scss';
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={style.contactPage}
      style={{backgroundColor: '#fff'}}
    >
      <h1>Contact</h1>
    </motion.div>
  );
}

export default Contact