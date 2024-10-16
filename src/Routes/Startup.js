import Proprietorship from "../Components/Startup-Pages/Proprietorship";
import Partnership from "../Components/Startup-Pages/Partnership"
import React from "react";
import { Routes, Route } from 'react-router-dom';

const Startup = () => {
  return (
    <div>
      <Routes>
        <Route path="/proprietorship" element={<Proprietorship />} />
        <Route path='/partnership' element={<Partnership />} />
        {/* <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<About />} />
    <Route path='/business-stats' element={<BusinessStats />} />
    <Route path='/testimonials' element={<Testimonials />} />
    <Route path='/footer' element={<Footer />} />
    <Route path='/contactUs' element={<ContactUs />} /> */}
      </Routes>
    </div>
  );
};

export default Startup;
