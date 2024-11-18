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
import PublicLimitedCompany from "../Components/Startup-Pages/PublicLimitedCompany";
import ProducerCompany from "../Components/Startup-Pages/ProducerCompany";
import McaNameApproval from "../Components/Startup-Pages/McaNameApproval";
import IndianSubsidiary from "../Components/Startup-Pages/IndianSubsidiary";

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
        <Route path="public-limited-company" element={<PublicLimitedCompany />} />
        <Route path="producer-company" element={<ProducerCompany />} />
        <Route path="mca-name-approval" element={<McaNameApproval />} />
        <Route path="indian-subsidiary" element={<IndianSubsidiary />} />
      </Routes>
    </div>
  );
};

export default Startup;
