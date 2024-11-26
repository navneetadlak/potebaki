import Proprietorship from "../Components/Startup-Pages/Proprietorship";
import TradeLicense from "../Components/Registrations-Pages/Trade-License/TradeLicense";
import StartupIndia from "../Components/Registrations-Pages/Startup-India/StartupIndia";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FssaiRegistration from "../Components/Registrations-Pages/FSSAI-Registration/FssaiRegistration";

const Registrations = () => {
  return (
    <div>
      <Routes>
        <Route path="/startup-india" element={<StartupIndia />} />
        <Route path="/trade-license" element={<TradeLicense />} />
        <Route path="/fssai-registration" element={<FssaiRegistration />} />
        <Route path="/fssai-license" element={<FssaiRegistration />} />
        

      </Routes>
    </div>
  );
};

export default Registrations;
