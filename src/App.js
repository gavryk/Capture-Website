import React, { useState, useEffect } from 'react';
import { Nav } from './components';
import { AboutUs, Contact, Works } from './pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from "./components/ScrollTop";

const headerNav = [
  {title: 'About Me', link: '/'},
  {title: 'My Works', link: '/works'},
  {title: 'Contact Me', link: '/contact'}
]

const App = () => {
  const location = useLocation();

  const [navLinks, setNavLinks] = useState([]);
  const [activeMobileMenu, setActiveMobileBenu] = useState(false);

  const toggleMenu = () => {
    setActiveMobileBenu(!activeMobileMenu);
  };

  useEffect(() => {
    setNavLinks(headerNav);
  }, [])


  return (
    <div className="App">
      <Nav links={navLinks} toggleMenu={toggleMenu} activeMobileMenu={activeMobileMenu} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<AboutUs />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <ScrollTop setActiveMobileBenu={setActiveMobileBenu} />
    </div>
  );
}

export default App