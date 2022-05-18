import React from 'react';
import style from './Services.module.scss';
//icons
import clock from '../../img/clock.svg';
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";

const Services = () => {
  return (
    <div className={style.servicesSection}>
      <div className={style.description}>
        <h2>
          Hight <span>quality</span> services
        </h2>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={teamwork} alt="Clock" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={diaphragm} alt="Clock" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={money} alt="Clock" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className={style.image}>
          <img src={home2} alt="" />
      </div>
    </div>
  );
}

export default Services