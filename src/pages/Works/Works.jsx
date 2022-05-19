import React from "react";
import style from "./Works.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../img/athlete-small.png";
import img2 from "../../img/theracer-small.png";
import img3 from "../../img/goodtimes-small.png";

const Works = () => {
  return (
    <div className={style.worksPage}>
      <div className={style.worksWrapper}>
        <div className={style.work}>
          <h2>The Athlete</h2>
          <div className={style.line}></div>
          <Link to="#">
            <img src={img1} alt="wokr1" />
          </Link>
        </div>
        <div className={style.work}>
          <h2>The Racer</h2>
          <div className={style.line}></div>
          <Link to="#">
            <img src={img2} alt="wokr2" />
          </Link>
        </div>
        <div className={style.work}>
          <h2>Good Times</h2>
          <div className={style.line}></div>
          <Link to="#">
            <img src={img3} alt="wokr3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;