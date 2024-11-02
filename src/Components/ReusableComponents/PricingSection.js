import React from 'react';

const PricingSection = ({ pricingSection }) => {
  const { title, customerRating, description, documentTitle, documents, products } = pricingSection;

  return (
    <div className="flex flex-col lg:flex-row justify-center py-10 px-4 lg:px-0 md:mx-52">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-3/4 flex flex-col lg:flex-row mb-6 lg:mb-0">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0">
          <img src="https://placehold.co/400x300" alt="Woman smiling in a shop" className="rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">{documentTitle}</h2>
          <ul className="list-disc list-inside mb-4">
            {documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          <a href="#" className="text-blue-600">Load more</a>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-green-600 text-lg font-bold">{customerRating.rating}</span>
            <span className="text-gray-600 ml-2">{customerRating.count} customers</span>
          </div>
          <p className="mb-4">{description}</p>
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">{product.price}</span>
                <span className="text-gray-600">{product.allInclusive ? "All Inclusive" : ""}</span>
              </div>
              <span className="text-green-600 mb-2 block">3 Exclusive Offers</span>
              <ul className="list-disc list-inside mb-4">
                {product.offers.map((offer, i) => (
                  <li key={i}>{offer}</li>
                ))}
              </ul>
            </div>
          ))}
          <a href="#" className="text-blue-600 mb-4 block">Terms and conditions</a>
          <a href="#" className="text-blue-600">Refer a Friend</a>
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
          <button className="bg-[#488FCD] text-white rounded-lg w-full p-2">
            Get Started
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PricingSection;
