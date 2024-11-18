import Proprietorship from "../Components/Startup-Pages/Proprietorship";
import Partnership from "../Components/Startup-Pages/Partnership"
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Content } from "../Components/ReusableComponents/Content";
import OnePersonCompany from "../Components/Startup-Pages/OnePersonCompany";
import LimitedLiabilityPartnership from "../Components/Startup-Pages/LimitedLiabilityPartnership";
import PrivateLimitedCompany from "../Components/Startup-Pages/PrivateLimitedCompany";
import Section8Company from "../Components/Startup-Pages/Section8Company";
import TrustRegistration from "../Components/Startup-Pages/TrustRegistration";

const Startup = () => {
  return (
    <div>
      <Routes>
        <Route path="/proprietorship" element={<Proprietorship content={Content.proprietorship}/>} />
        <Route path='/partnership' element={<Partnership />} />
        <Route path="/opc" element={<OnePersonCompany />} />
        <Route path="/llp" element={<LimitedLiabilityPartnership />} />
        <Route path="private-limited-company" element={<PrivateLimitedCompany />} />
        <Route path="section-8-company" element={<Section8Company />} />
        <Route path="trust-registration" element={<TrustRegistration />} />
        {/* <Route path="*" element={<NotFound />} /> */}
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
