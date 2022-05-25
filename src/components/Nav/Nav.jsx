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

const Nav = ({ links, activeMobileMenu, toggleMenu }) => {
  return (
    <div className={style.navigate}>
      <nav>
        <Link id="logo" className={style.logo} to="/">
          Gvozd
        </Link>
        <div className={`${style.burgerIcon} ${activeMobileMenu ? style.active : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={`${style.navMenu} ${activeMobileMenu ? style.active : ""}`}
        >
          {links &&
            links.map(({ title, link }, index) => {
              return <CustomLink to={link} key={`${title}_${index}`}>{title}</CustomLink>;
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav