import React from "react";
import style from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={style.faqSection}>
      <div className={style.title}>
        <h2>
          Any Questions <span>FAQ</span>?
        </h2>
      </div>
      <div className={style.question}>
        <h4>
         How Do I Start?
        </h4>
        <div className={style.answer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo
            blanditiis obcaecati perferendis repudiandae exercitationem dolor
            nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus
            incidunt beatae molestiae soluta optio.
          </p>
        </div>
      </div>
      <div className={style.question}>
        <h4>
          Daily Schedule?
        </h4>
        <div className={style.answer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo
            blanditiis obcaecati perferendis repudiandae exercitationem dolor
            nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus
            incidunt beatae molestiae soluta optio.
          </p>
        </div>
      </div>
      <div className={style.question}>
        <h4>
          Diferrent Payment Methods?
        </h4>
        <div className={style.answer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo
            blanditiis obcaecati perferendis repudiandae exercitationem dolor
            nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus
            incidunt beatae molestiae soluta optio.
          </p>
        </div>
      </div>
      <div className={style.question}>
        <h4>
          What Products Do You Offer.?
        </h4>
        <div className={style.answer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat illo
            blanditiis obcaecati perferendis repudiandae exercitationem dolor
            nobis, fuga, enim hic suscipit velit laboriosam! Magnam accusamus
            incidunt beatae molestiae soluta optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;