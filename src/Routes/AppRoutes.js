import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import About from '../Components/About';
import BusinessStats from '../Components/BusinessStats';
import Testimonials from '../Components/Testimonials';
import ContactUs from '../Components/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/business-stats' element={<BusinessStats />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contactUs' element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;