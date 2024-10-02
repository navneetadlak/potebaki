import React from "react";
import TrustSection from "./TrustSection";
import BusinessStats_sec from "./BusinessStats_sec";
import Testimonials from "./Testimonials";
import about from "../Assets/about.jpg"
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <>
        <div className="flex p-20 justify-center">
        <img 
            src={about}
            className="rounded-xl w-full h-96"
        />
        </div>

      <TrustSection />

      <BusinessStats_sec />
      
      <div className="flex flex-col items-center justify-center h-auto p-20 bg-[#F8F8F8]">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:mt-8 max-w-4xl">
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-magic text-[#488FCD] text-2xl"></i>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Innovation</h2>
                                <p className="text-gray-600">Continuously pushing the boundaries of what's possible in data analytics to deliver cutting-edge solutions.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-check-square text-[#488FCD] text-2xl"></i>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Integrity</h2>
                                <p className="text-gray-600">Building trust with our customers through transparency, privacy, and reliability.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-users text-[#488FCD] text-2xl"></i>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Collaboration</h2>
                                <p className="text-gray-600">Fostering a culture of teamwork and partnership, both within our organization and with our customers and partners.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-star text-[#488FCD] text-2xl"></i>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Excellence</h2>
                                <p className="text-gray-600">Striving for excellence in every aspect of our business, from product development to customer support.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <TeamSection />
      <Testimonials />
    </>
  );
};

export default About;
