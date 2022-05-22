import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import style from "./Faq.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { motion } from "framer-motion";
import { fade } from "../../animations";

const faqsList = [
  {
    title: "How Do I Start?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    title: "Daily Schedule?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    title: "Diferrent Payment Methods?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    title: "What Products Do You Offer?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
];

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [element, controls] = useScroll();

  useEffect(() => {
    setFaqs(faqsList);
  }, []);

  return (
    <motion.div
      variants={fade}
      animate={controls}
      initial="hidden"
      className={style.faqSection}
      ref={element}
    >
      <div className={style.title}>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
      </div>
      <AnimateSharedLayout>
        {faqs.map((item, index) => {
          return (
            <Toggle
              key={`${item.question}_${index}`}
              {...item}
            >
              <p>{item.content}</p>
            </Toggle>
          );
        })}
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Faq;
