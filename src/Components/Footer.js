import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="relative">
                <img src="" alt="Person working on a laptop" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
                    <p className="text-sm uppercase text-gray-300">We are looking forward to your visit</p>
                    <h1 className="text-4xl font-bold mt-2">Our specialists are here to assist you with inquiries</h1>
                    <p className="text-lg mt-4">We take time for you. We attach great importance to personal service and take time for you and your concerns.</p>
                    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full">Let's Get started</button>
                </div>
            </div>
            <footer className="bg-[#101010] py-12">
                <div className="container mx-auto px-4 flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-white">POTEBAKI</h2>
                        <p className="text-[#F8F8F8] mb-4">Unleash your business potential with Lemonix the invigorating SaaS platform. Elevate productivity and growth. Try it now!</p>
                        <div className="flex space-x-4">
                            <i className="fab fa-facebook-f text-[#F8F8F8]"></i>
                            <i className="fab fa-twitter text-[#F8F8F8]"></i>
                            <i className="fab fa-instagram text-[#F8F8F8]"></i>
                            <i className="fab fa-linkedin-in text-[#F8F8F8]"></i>
                        </div>
                        <p className="text-[#f8f8f8] mt-4">©2024 Potebaki</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4 text-white">Our Page</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-[#F8F8F8]">Blog</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">Our Service</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">Contact Us</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-[#F8F8F8]">FAQ</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">Pricing</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">About Us</a></li>
                            <li><a href="#" className="text-[#F8F8F8]">Style Guide</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to get an update</h3>
                        <p className="text-gray-400 mb-4">We will not spam, rent, or sell your personal information, including your email address or name.</p>
                        <form className="flex flex-col space-y-4">
                            <input type="email" placeholder="email@gmail.com" className="px-4 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none" />
                            <button className="px-4 py-2 bg-[#488FCD] text-white rounded hover:bg-indigo-500 transition">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer