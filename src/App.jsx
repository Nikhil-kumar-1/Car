import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
