import React from "react";
import peoplebg from "../Assets/people-bg.jpeg"

const Testimonials = () => {
  return (
    <section className="bg-[#F8F8F8] py-20">
      <img
          src={peoplebg}
          alt="Person working on a laptop"
          className="w-full h-96 object-cover"
        />
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Users Are
            <br /> Saying
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Organize your finances with WealthTrack. Follow your spending, save
            prudently in an easy-to-navigate app.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-[#488FCD] text-white p-2 rounded-full">
                <i className="fas fa-bolt"></i> {/* Icon */}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">5 stars</h3>
              </div>
            </div>
            <p className="text-gray-900 mb-4 text-xl font-bold">
              Partnering with this platform has unlocked new opportunities for
              our business.
            </p>
            <p className="text-gray-600 mb-4">
              "I’ve tried several finance apps, but Savi is by far the best and
              incredibly user-friendly. Using Savi has transformed the way I
              manage my finances. The spending targets feature helped me save
              more than I ever thought possible!"
            </p>
            <p className="text-gray-800 font-bold">Sarah White</p>
            <p className="text-gray-500">Software Engineer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-[#488FCD] text-white p-2 rounded-full">
                <i className="fas fa-bolt"></i> {/* Icon */}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">5 stars</h3>
              </div>
            </div>
            <p className="text-gray-900 mb-4 text-xl font-bold">
              Partnering with this platform has unlocked new opportunities for
              our business.
            </p>
            <p className="text-gray-600 mb-4">
              "Thanks to Savi, I finally have control over my finances and the
              insights are helpful. The spending targets feature helped me save
              more than I ever thought possible!"
            </p>
            <p className="text-gray-800 font-bold">Daniel Brown</p>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#488FCD] text-white py-3 px-8 rounded-lg hover:bg-indigo-500 transition">
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
