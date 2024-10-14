import React from 'react'

const RelatedBusinessReg = () => {
    return (
        <div className="container mx-auto py-20">
            <h2 className="text-center text-3xl font-semibold mb-4">Related Business Registrations</h2>
            <p className="text-center text-gray-600 mb-8">
                In addition to registration or incorporation, a business may require other registrations depending on the business activity undertaken. Talk to an Advisor to <br /> find out registrations your business may require post registration.
            </p>
            <div className="flex flex-wrap justify-center md:mx-32">
                <div className="bg-w p-2  text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="FSSAI Registration" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">FSSAI Registration</h3>
                    <p className="text-gray-600">From ₹ 2899</p>
                </div>
                <div className="bg-white p-2  text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="IE Code" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">IE Code</h3>
                    <p className="text-gray-600">From ₹ 2899</p>
                </div>
                <div className="bg-white p-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="Trade License" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">Trade License</h3>
                    <p className="text-gray-600">From ₹ 5899</p>
                </div>
                <div className="bg-white p-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="Professional Tax" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">Professional Tax</h3>
                    <p className="text-gray-600">From ₹ 7899</p>
                </div>
                <div className="bg-white p-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="Digital Signature" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">Digital Signature</h3>
                    <p className="text-gray-600">From ₹ 1988</p>
                </div>
                <div className="bg-white p-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-1/2 mb-4">
                    <img src="https://placehold.co/300x300" alt="GST Registration" className="w-full h-40 sm:h-48 object-cover mb-4"/>
                    <h3 className="text-lg font-semibold">GST Registration</h3>
                    <p className="text-gray-600">From ₹ 2899</p>
                </div>
            </div>
        </div>
    );
}

export default RelatedBusinessReg