import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={style.navigate}>
        <nav>
            <a id="logo" className={style.logo} href="#">Gvozd</a>
            <ul className={style.navMenu}>
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='works'>My Works</Link></li>
                <li><Link to='contact'>Contact Me</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav