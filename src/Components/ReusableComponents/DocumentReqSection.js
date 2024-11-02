import React from 'react'
    {/* Documents Required Section */}


const DocumentReqSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto mb-10">
    <h1 className="text-2xl font-bold mb-8 text-center">
      Documents Required For Proprietorship
    </h1>

    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full">
      {/* Left Section */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/2">
        <div className="mb-4 border-b border-gray-300 pb-4">
          <h2 className="text-lg font-bold">PAN Card</h2>
          <p>PAN card of the Proprietor.</p>
        </div>
        <div className="pt-4">
          <h2 className="text-lg font-bold">Aadhaar Card</h2>
          <p>Aadhaar card of the Proprietor.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
          <a href="#" className="text-blue-600">
            Documents Required for LLP Registration
          </a>
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
            8
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
          <a href="#" className="text-blue-600">
            Documents Required for Trademark Registration
          </a>
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
            7
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
          <a href="#" className="text-blue-600">
            Documents Required for GST Registration
          </a>
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
            10
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
          <a href="#" className="text-blue-600">
            Documents Required for Partnership Firm Registration
          </a>
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
            5
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600">
            Documents Required for Company Registration
          </a>
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
            7
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DocumentReqSection