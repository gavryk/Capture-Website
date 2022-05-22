import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Toggle.module.scss";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className={style.question}
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle && <div className={style.answer}>{children}</div>}
    </motion.div>
  );
};

export default Toggle;
