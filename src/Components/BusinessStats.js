import React from "react";
import people from "../Assets/people-working-1.jpeg"

const BusinessStats = () => {
  return (
    <div className="bg-[#F8F8F8] p-4 md:p-0 ">
      <section className="text-center mb-8 md:py-16 md:mb-12">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          Empowering Your Business with us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Potebaki, we are committed to empowering your business with
          cutting-edge financial solutions that drive growth and efficiency. Our
          platform is designed to simplify transactions
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center mb-8 md:mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full md:w-96 mb-4 md:mb-0 md:mr-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Rise in conversion
          </h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">+20%</p>
          <div className="flex justify-evenly gap-3 items-end">
            <div className="bg-[#488FCD] h-10 w-14 rounded-md"></div>
            <div className="bg-[#488FCD] h-24 w-14 rounded-md"></div>
            <div className="bg-[#488FCD] h-16 w-14 rounded-md"></div>
            <div className="bg-[#488FCD] h-32 w-14 rounded-md"></div>
          </div>
        </div>
        <img
          src={people}
          alt="People working together in an office setting"
          className="rounded-lg shadow-md w-full md:w-1/2"
        />
      </section>
    </div>
  );
};

export default BusinessStats;
