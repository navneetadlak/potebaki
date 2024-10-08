import React from "react";
import img1 from "../Assets/Homepage-iamges/img-1.jpeg";
import img2 from "../Assets/Homepage-iamges/img-2.jpeg";
import img3 from "../Assets/Homepage-iamges/img-3.jpeg";
import img4 from "../Assets/Homepage-iamges/img-4.jpeg";
import search from "../Assets/search.png";
import TrustSection from "./TrustSection";
import BusinessStats from "./BusinessStats";
import BusinessStats_sec from "./BusinessStats_sec";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <>
      <div className="md:bg-white bg-[#F8F8F8]">
        {/* Main Section */}
        <main className="md:bg-white bg-[]">
          {/* Hero Section */}
          <section className="text-center py-20 mx-4 md:mx-0">
            <h1 className="text-2xl md:text-6xl font-semibold text-gray-800">
              Seamless Financial Solutions <br /> for the{" "}
              <span className="text-[#488FCD]">Modern Era</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Simplify your financial journey with Potebaki—your all-in-one
              platform for smooth payments,
              <br className="hidden md:block" /> seamless transactions, and
              intelligent financial management.
            </p>
            {/* <div className="mt-8 flex justify-center items-center z-10">
              <div className="w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-4 w-full rounded-full shadow-[10px_20px_50px_rgba(8,_112,_184,_0.7)] focus:outline-none pr-60"
                />
                <button
                  className="flex items-center justify-center w-8 h-8 cursor-pointer right-4 top-3 p-1">
                     <img src={search} alt="Search Icon" className="w-6 h-6" />
                </button>
              </div>
            </div> */}
            <div className="mt-8 flex justify-center items-center z-10 relative">
  <div className="w-full max-w-md">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-4 w-full rounded-full shadow-[10px_20px_50px_rgba(8,_112,_184,_0.7)] focus:outline-none pr-12" // Adjust padding for space
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer"
        onClick={() => {
          // Add your search functionality here
        }}
      >
        <img src={search} alt="Search Icon" className="w-6 h-6" />
      </button>
    </div>
    </div>
    </div>


          </section>

          {/* Images Section */}
          <section className="container mx-auto px-4 py-12 md:pb-0 flex justify-center">
            <div className="flex md:space-x-6 overflow-x-auto no-scrollbar justify-center">
              <img
                src={img1}
                alt="People working on financial documents"
                className="shadow-md flex-none w-1/2 md:w-[23%] h-[150px] md:h-[300px]"
              />
              <img
                src={img2}
                alt="Team collaboration"
                className="shadow-md flex-none w-[40%] md:w-[23%] h-[150px] md:h-[300px]"
              />
              <img
                src={img3}
                alt="Person on a call with a laptop"
                className="shadow-md flex-none w-[40%] md:w-[23%] h-[150px] md:h-[300px]"
              />
              <img
                src={img4}
                alt="Team meeting"
                className="shadow-md flex-none w-1/2 md:w-[23%] h-[150px] md:h-[300px]"
              />
            </div>
          </section>

          <TrustSection />

        {/* Partners Section */}
<section className="bg-white py-20 md:w-auto">
  <div className="container mx-auto px-4 flex flex-wrap justify-center space-x-2 md:space-x-12 space-y-6 md:space-y-0">
    <img src="https://placehold.co/100x40" alt="coinbase logo" className="w-24 h-auto" />
    <img src="https://placehold.co/100x40" alt="Dropbox logo" className="w-24 h-auto" />
    <img src="https://placehold.co/100x40" alt="Google logo" className="w-24 h-auto" />
    <img src="https://placehold.co/100x40" alt="Slack logo" className="w-24 h-auto" />
    <img src="https://placehold.co/100x40" alt="Square logo" className="w-24 h-auto" />
    <img src="https://placehold.co/100x40" alt="Zoom logo" className="w-24 h-auto" />
  </div>
</section>

        </main>
      </div>
      <BusinessStats />
      <BusinessStats_sec />
      <Testimonials />
    </>
  );
};

export default Homepage;
