import React from 'react';
import { Nav } from './components';
import { AboutUs, Contact, Works } from './pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<AboutUs />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App