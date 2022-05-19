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
      <div className={style.image}>
        <img src={home2} alt="service" />
      </div>
      <div className={style.description}>
        <h2>
          Hight <span>quality</span> services
        </h2>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={clock} alt="Clock" />
              <span>Efficient</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={teamwork} alt="Clock" />
              <span>Teamwork</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={diaphragm} alt="Clock" />
              <span>Diaphragm</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={money} alt="Clock" />
              <span>Affordable</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services