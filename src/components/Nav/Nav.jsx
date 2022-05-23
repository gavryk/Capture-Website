import React from 'react';
import { Link, useMatch, useResolvedPath, } from 'react-router-dom';
import style from './Nav.module.scss';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className={`${match ? style.active : ""}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Nav = () => {
  
  return (
    <div className={style.navigate}>
        <nav>
            <Link id="logo" className={style.logo} to="/">Gvozd</Link>
            <ul className={style.navMenu}>
                <CustomLink to='/'>About Me</CustomLink>
                <CustomLink to='works'>My Works</CustomLink>
                <CustomLink to='contact'>Contact Me</CustomLink>
            </ul>
        </nav>
    </div>
  )
}

export default Nav