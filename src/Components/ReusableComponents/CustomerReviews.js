import React from 'react'

const CustomerReviews = () => {
    const reviews = [
        {
            name: "SHREE ANDAL SHAKTHI S",
            date: "26 July 2022",
            feedback: "Thanks for done the process ASAP"
        },
        {
            name: "PONNULAKSHMI R",
            date: "07 February 2022",
            feedback: "excellent service"
        },
        {
            name: "SHARMILA S",
            date: "24 September 2021",
            feedback: "Sharmila so far has done a good job on servicing us. Thanks Sharmila appreciate your effort"
        },
        {
            name: "BENITA STELLA J",
            date: "05 March 2021",
            feedback: "The service was brilliant and very helpful"
        },
        {
            name: "ANANTHAVALLI",
            date: "16 February 2021",
            feedback: "Great feedback"
        },
        {
            name: "SHOBANA S",
            date: "21 January 2021",
            feedback: "excellent service"
        },
        {
            name: "KIRUTHIGA G",
            date: "16 January 2021",
            feedback: "She was helpful"
        },
        {
            name: "LALITHA R",
            date: "10 January 2021",
            feedback: "Ok"
        }
    ];

    return (
        <div className="container mx-auto p-4 lg:px-32">
            <h1 className="text-3xl font-semi-bold text-center mt-20 mb-8">Customer Reviews For Proprietorship</h1>
            <p className="text-center text-base mb-12">
                IndiaFilings has over 1 lakh customers and we have completed over 7 lakh services through our platform. At IndiaFilings, we take pride in the services delivered<br /> by us and guarantee your satisfaction with our services and support. We constantly improve and strive to deliver the best accounting, financial or secretarial<br /> services through the internet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md h-60 overflow-y-auto">
                        <div className="flex items-center mb-2">
                            <div className="text-yellow-500">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <h2 className="text-base font-bold mb-1">{review.name}</h2>
                        <p className="text-xs text-gray-600 mb-1">Proprietorship</p>
                        <p className="text-xs text-green-500 mb-1"><i className="fas fa-check-circle"></i> Verified Customer</p>
                        <p className="text-xs text-gray-600 mb-1">{review.date}</p>
                        <p className="text-xs text-gray-800 mb-1">How can we improve?</p>
                        <p className="text-xs text-gray-800">{review.feedback}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-start mt-8">
                <button className="border border-blue-500 text-[#488FCD] hover:bg-[#488FCD] hover:text-white px-4 py-2 rounded text-sm">LOAD MORE</button>
            </div>
        </div>
    );
}

export default CustomerReviews