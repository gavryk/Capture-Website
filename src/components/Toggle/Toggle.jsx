import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Toggle.module.scss";

const Toggle = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className={style.question}
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{question}</motion.h4>
      {toggle && (
        <div className={style.answer}>
          <p>{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Toggle;
