import React from 'react'

const VideoPlaySection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 md:mx-52 py-10">
            <div className="flex justify-center flex-col items-center md:text-left md:w-1/2 md:mt-28">
                <h1 className="flex justify-start text-start items-start text-4xl font-semi-bold mb-4">Smarter Banking</h1>
                <p className="text-gray-700 font-light text-xl text-center items-center">
                    Avail a range of banking services<br /> through <a href="https://www.potebaki.com" className="text-blue-600">potebaki.com</a>.<br /> Potebaki can help you open a current account,<br /> get a payment gateway or avail loans<br /> through our Partner Banks.
                </p>
            </div>
            <div className="w-full md:w-4/6 h-64 md:h-4/6">
                <video controls className="w-full h-full">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default VideoPlaySection