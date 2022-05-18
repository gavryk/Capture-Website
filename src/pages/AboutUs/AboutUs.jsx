import React from 'react'
import { About, Services } from '../../components';
import style from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={style.aboutUsPage}>
      <About />
      <Services />
    </div>
  );
}

export default AboutUs