import React from 'react'
import { About, Faq, Services } from '../../components';
import style from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={style.aboutUsPage}>
      <About />
      <Services />
      <Faq/>
    </div>
  );
}

export default AboutUs