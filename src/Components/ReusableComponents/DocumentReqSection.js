import React from 'react';

const DocumentReqSection = ({ documentsRequired }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto mb-10">
      <h1 className="text-2xl font-bold mb-8 text-center">
        {documentsRequired.title}
      </h1>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full">
        {/* Left Section */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/2">
          {documentsRequired.leftSection.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/2">
          {documentsRequired.rightSection.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
              <a href="#" className="text-blue-600">
                {item.label}
              </a>
              <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentReqSection;
