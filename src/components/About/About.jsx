import React from 'react';
import style from './About.module.scss';
import homeImg1 from '../../img/home1.png';

const About = () => {
  return (
    <div className={style.aboutSection}>
      <div className={style.description}>

        <div className={style.title}>
          <div className={style.hide}>
            <h2>We Work to make</h2>
          </div>
          <div className={style.hide}>
            <h2>your <span>dreams</span> come</h2>
          </div>
          <div className={style.hide}>
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography ideas thet you have. 
            We have proffesionals with amazing skills</p>
        <button>Contact Us</button>

      </div>

        <div className={style.image}>
            <img src={homeImg1} alt="About Me" />
        </div>
    </div>
  );
}

export default About