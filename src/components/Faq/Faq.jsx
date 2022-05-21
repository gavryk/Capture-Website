import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import style from "./Faq.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { motion } from "framer-motion";
import { fade } from "../../animations";

const faqsList = [
  {
    question: "How Do I Start?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    question: "Daily Schedule?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    question: "Diferrent Payment Methods?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo blanditiis obcaecati perferendis repudiandae exercitationem dolor nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus incidunt beatae molestiae soluta optio.",
    active: false,
  },
  {
    question: "What Products Do You Offer?",
    answer:
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
            />
          );
        })}
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Faq;
