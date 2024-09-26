import React, { useState } from "react";
import logo from "../Assets/logo-design.png";
import img1 from "../Assets/Homepage-iamges/img-1.jpg";
import img2 from "../Assets/Homepage-iamges/img-2.jpg";
import img3 from "../Assets/Homepage-iamges/img-3.jpg";
import img4 from "../Assets/Homepage-iamges/growth-img.jpg";
import search from "../Assets/search.png";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="md:bg-white bg-[#F8F8F8]">
      {/* Header Section */}
      <header className="bg-white md:drop-shadow-xl rounded-full mx-5 md:mx-20 mt-4">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="object-cover w-32 h-28 md:w-52 md:h-20"
            />
            {/* <span className="font-bold text-xl">POTEBAKI</span> */}
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-6 md:mr-10">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                About
              </a>
              {dropdownOpen && (
                <div className="absolute left-0 z-10 w-48 bg-white shadow-lg rounded mt-2">
                  <div className="grid grid-cols-1 gap-5 p-4">
                    <div>
                      <a
                        href="#"
                        className="block text-gray-700 hover:text-black"
                      >
                        Proprietorship
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 hover:text-black"
                      >
                        Partnership
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 hover:text-black"
                      >
                        One Person Company
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 hover:text-black"
                      >
                        Limited Liability Partnership
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 hover:text-black"
                      >
                        Private Limited Company
                      </a>
                    </div>
                    {/* <div>
                <a href="#" className="block text-gray-700 hover:text-black">Link 5</a>
                <a href="#" className="block text-gray-700 hover:text-black">Link 6</a>
                <a href="#" className="block text-gray-700 hover:text-black">Link 7</a>
                <a href="#" className="block text-gray-700 hover:text-black">Link 8</a>
              </div>
              <div>
                <a href="#" className="block text-gray-700 hover:text-black">Link 9</a>
                <a href="#" className="block text-gray-700 hover:text-black">Link 10</a>
              </div> */}
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-black">
              Startup
            </a>

            <a href="#" className="text-gray-700 hover:text-black">
              Registrations
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Trademark
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Goods & Services Tax
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Income Tax
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Compliance
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Bookkeeping
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Consultation
            </a>
          </nav>

          {/* Log In and Sign Up buttons for desktop */}
          {/* <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-black py-2">Log In</a>
            <a href="#" className="bg-[#488FCD] text-white px-4 py-2 rounded-full hover:bg-blue-500">
              Sign up Free
            </a>
          </div> */}

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-full">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 hover:text-black">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Startup
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Registrations
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Trademark
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Goods & Services Tax
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Income Tax
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Compliance
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Bookkeeping
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Consultation
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="md:bg-white bg-[]">
        {/* Hero Section */}
        <section className="text-center py-20 mx-4 md:mx-0">
          <h1 className="text-2xl md:text-6xl font-semibold text-gray-800">
            Seamless Financial Solutions <br /> for the{" "}
            <span className="text-[#488FCD]">Modern Era</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Simplify your financial journey with Potebaki—your all-in-one
            platform for smooth payments,
            <br className="hidden md:block" /> seamless transactions, and
            intelligent financial management.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-4 w-full rounded-full shadow-[10px_20px_50px_rgba(8,_112,_184,_0.7)] focus:outline-none pr-60"
              />
              <img
                src={search}
                alt="Search Icon"
                className="absolute w-8 h-8 cursor-pointer right-4 top-3 p-1"
              />
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="container mx-auto px-4 py-12 md:pb-0 flex justify-center">
          <div className="flex md:space-x-6 overflow-x-auto no-scrollbar justify-center">
            <img
              src={img1}
              alt="People working on financial documents"
              className="shadow-md flex-none w-1/2 md:w-[20%] h-[150px] md:h-[300px]"
            />
            <img
              src={img2}
              alt="Team collaboration"
              className="shadow-md flex-none w-[40%] md:w-[20%] h-[150px] md:h-[300px]"
            />
            <img
              src={img3}
              alt="Person on a call with a laptop"
              className="shadow-md flex-none w-[40%] md:w-[20%] h-[150px] md:h-[300px]"
            />
            <img
              src={img4}
              alt="Team meeting"
              className="shadow-md flex-none w-1/2 md:w-[20%] h-[150px] md:h-[300px]"
            />
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-[#F8F8F8] pb-12 pt-0 md:pt-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              We earn trust by working efficiently
            </h2>
            <div className="mt-8 flex justify-center space-x-12">
              <div>
                <span className="text-3xl font-bold text-gray-800">15+</span>
                <p className="text-gray-600">Years of experience</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-800">84k</span>
                <p className="text-gray-600">Customers worldwide</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-800">600+</span>
                <p className="text-gray-600">Project completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white py-20 w-auto">
          <div className="container mx-auto px-4 flex justify-center space-x-12">
            <img src="https://placehold.co/100x40" alt="coinbase logo" />
            <img src="https://placehold.co/100x40" alt="Dropbox logo" />
            <img src="https://placehold.co/100x40" alt="Google logo" />
            <img src="https://placehold.co/100x40" alt="Slack logo" />
            <img src="https://placehold.co/100x40" alt="Square logo" />
            <img src="https://placehold.co/100x40" alt="Zoom logo" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
