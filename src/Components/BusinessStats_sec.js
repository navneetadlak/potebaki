import React from 'react'
import { Link } from 'react-router-dom'

const BusinessStats_sec = () => {
  return (
    <div className="bg-[#F8F8F8] p-4 md:p-0">
        <div className="flex md:flex-row md:p-24 justify-center bg-white">
        <section className="text-balance mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-4">
            Track Finances for Smarter Decisions
          </h2>
          <p className="text-gray-600 max-w-xl md:text-xl mb-8 ">
            Empowering Your Business with Real-Time Insights <br />
            and Efficient Financial Management. Effortlessly <br /> Track,
            Manage, and Optimize.
          </p>
          <button className="bg-[#488FCD] text-white py-2 px-4 rounded-full md:mt-10">
            <Link to='/contactUs'>
            Contact Us
            </Link>
          </button>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-white p-6 md:p-12 rounded-lg shadow-md w-full md:w-1/2 mb-4 md:mb-0 md:mr-7">
            <div className="flex items-center mb-4">
              <i className="fas fa-smile text-[#488FCD] text-2xl md:text-5xl mr-2"></i>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-800">
                Satisfaction
              </h3>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-2 md:mt-7">
              80% <span className="md:text-2xl font-medium">of users</span>
            </p>
            <p className="text-gray-600 text-base">
              improved their savings within the first three months.
            </p>
          </div>
          <div className="bg-white p-6 md:p-12 rounded-lg shadow-md w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <i className="fas fa-comments text-[#488FCD] text-2xl md:text-5xl mr-2"></i>
              <h3 className="text-xl md:text-3xl  font-semibold text-gray-800">
                Feedbacks
              </h3>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-2 md:mt-7">
              500k <span className="md:text-2xl font-medium">reviews</span>
            </p>
            <p className="text-gray-600">
              highlighting our app's effectiveness and ease of use.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BusinessStats_sec