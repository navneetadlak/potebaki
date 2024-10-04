import React from "react";
import FAQAccordion from "./FAQAccordion";


const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-2 md:mb-4">
          We Have A Variety Of <br /> Attractive Offers
        </h1>
        <p className="text-center text-gray-600 mb-4 md:mb-8">
          Our have a variety of offers that we provide, which can be
          <br /> an option according to your needs
        </p>
        {/* <iframe
        src="https://maps.app.goo.gl/thEZgp8CDuG7RrZMA"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg mb-4 md:mb-8"
        title="Map showing various locations"
      ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.899491818582!2d77.57179917430506!3d13.105553311928865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae188602e90e4d%3A0x8c150990d4a9515d!2sYelahanka%205th%20Phase%20BBMP%20Park!5e0!3m2!1sen!2sin!4v1727859086126!5m2!1sen!2sin"
          width="90%"
          height="500"
          style={{ border: 0 }}
          title="map"
          allowfullscreen=""
          loading="lazy"
          className="rounded-lg mb-6 md:mb-8"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl">
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg ">
            <i className="fas fa-envelope text-3xl md:text-4xl text-[#488FCD] mb-2 md:mb-4"></i>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
              Email Us
            </h2>
            <p className="text-center text-gray-600 mb-2 md:mb-4">
              Ask us a question by email and we will respond within a few days.
            </p>
            <a href="#" className="text-[#488FCD]">
              Leave A Messages
            </a>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg ">
            <i className="fas fa-map-marker-alt text-3xl md:text-4xl text-[#488FCD] mb-2 md:mb-4"></i>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
              Official Office
            </h2>
            <p className="text-center text-gray-600 mb-2 md:mb-4">
              You can meet us at our office and discuss the details of your
              question.
            </p>
            <a href="" className="text-[#488FCD]">
              Get Directions
            </a>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg ">
            <i className="fas fa-phone-alt text-3xl md:text-4xl text-[#488FCD] mb-2 md:mb-4"></i>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
              Customer Support
            </h2>
            <p className="text-center text-gray-600 mb-2 md:mb-4">
              Call us if your question requires an immediate response.
            </p>
            <a href="tel:+6323892402" className="text-[#488FCD]">
              +(000) 0000000
            </a>
          </div>
        </div>
      </div>

      {/* contact_us form Section */}
      <div className="bg-white p-6 m-28 rounded-lg shadow-md w-100%">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Contact our sales team
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Built for every team across your company, Jobify Enterprise boosts
          productivity with upgraded security and account support. Contact us
          today to unlock:
        </p>
        <form className="space-y-6 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#488FCD] focus:border-[#488FCD] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#488FCD] focus:border-[#488FCD] sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#488FCD] focus:border-[#488FCD] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How Can Our Sales Team Help?
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Choose company size"
                className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#488FCD] focus:border-[#488FCD] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Anything Else You'd Like Us To Know?
            </label>
            <textarea
              placeholder="Type anything"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#488FCD] focus:border-[#488FCD] sm:text-sm h-32"
            ></textarea>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-[#488FCD] border-gray-300 rounded"
              />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to Potebaki's Terms of Service and Privacy Policy.
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#488FCD] hover:bg-[#366fa0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#488FCD]"
            >
              Contact Sales
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-[#488FCD] mb-4">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">My Account</h3>
            <p className="text-gray-600">
              From how to setup your account to how to apply for a job
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-[#488FCD] mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Campaigns</h3>
            <p className="text-gray-600">
              Engage your contacts using the best mobile-friendly email design
              tools
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-[#488FCD] mb-4">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Jobify Academy</h3>
            <p className="text-gray-600">
              Learn everything about client declaration and partner management
            </p>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Website</h2>
          <p className="text-gray-500">
            Frequently asked question about our website
          </p>
        </div>

        <FAQAccordion />
      </div>
    </>
  );
};

export default ContactUs;
