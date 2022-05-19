import React from 'react';
import style from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={style.navigate}>
        <nav>
            <a id="logo" className={style.logo} href="#">Gvozd</a>
            <ul className={style.navMenu}>
                <li><a href="#">About Me</a></li>
                <li><a href="#">My Works</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav