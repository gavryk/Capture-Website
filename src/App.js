import React from 'react';
import { Nav } from './components';
import { AboutUs, Contact, Works } from './pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<AboutUs />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App