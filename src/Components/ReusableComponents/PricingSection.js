import React from 'react'

const PricingSection = () => {
  return (
    <>
    {/* Pricing Section */}
    <div className="flex flex-col lg:flex-row justify-center py-10 px-4 lg:px-0 md:mx-52">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-3/4 flex flex-col lg:flex-row mb-6 lg:mb-0">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0">
        <img
          src="https://placehold.co/400x300"
          alt="Woman smiling in a shop"
          className="rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Documents Required</h2>
        <ul className="list-disc list-inside mb-4">
          <li>PAN Card</li>
          <li>Aadhaar Card</li>
        </ul>
        <a href="#" className="text-blue-600">
          Load more
        </a>
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-2">Proprietorship</h1>
        <div className="flex items-center mb-4">
          <span className="text-green-600 text-lg font-bold">4.7</span>
          <span className="text-gray-600 ml-2">8533 customers</span>
        </div>
        <p className="mb-4">
          Easily set up a sole proprietorship online with GST registration.
        </p>
        <div className="relative mb-4">
          <select className="border rounded-lg w-full p-2">
            <option>GST Registration</option>
            <option>Trademark</option>
            <option>GSTIN + Accountant</option>
          </select>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">GST Registration</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold">INR 2899</span>
            <span className="text-gray-600">All Inclusive</span>
          </div>
          <span className="text-green-600 mb-2 block">
            3 Exclusive Offers
          </span>
          <ul className="list-disc list-inside mb-4">
            <li>GST Application Submission</li>
            <li>GST Application Tracking</li>
            <li>GST Registration certificate</li>
            <li>Bank Account Opening</li>
          </ul>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Trademark</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold">INR 6988</span>
            <span className="text-gray-600">All Inclusive</span>
          </div>
          <span className="text-green-600 mb-2 block">
            3 Exclusive Offers
          </span>
          <ul className="list-disc list-inside mb-4">
            <li>Trademark Filing</li>
            <li>1 Trademark Class</li>
            <li>Individuals & MSMEs</li>
          </ul>
        </div>
        <a href="#" className="text-blue-600 mb-4 block">
          Terms and conditions
        </a>
        <a href="#" className="text-blue-600">
          Refer a Friend
        </a>
      </div>
    </div>
    <div className="w-full lg:w-1/4 md:ml-7">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <img
          src="https://placehold.co/300x100"
          alt="Personalised Quotes! Great Service, Great Price!"
          className="rounded-lg mb-4"
        />
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg w-full p-2 mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg w-full p-2 mb-4"
          />
          <div className="flex mb-4">
            <select className="border rounded-l-lg p-2">
              <option value="+91">+91</option>
            </select>
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-r-lg w-full p-2"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="gstin" className="mr-2" />
            <label htmlFor="gstin">Enter GSTIN to get 18% GST Credit</label>
          </div>
          <button className="bg-green-500 text-white rounded-lg w-full p-2">
            Get Started
          </button>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default PricingSection