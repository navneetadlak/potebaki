import { useState } from 'react';
import logo from "../Assets/logo-design.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="md:bg-white bg-[#F8F8F8]">
      {/* Header Section */}
      <header className="bg-white md:drop-shadow-xl rounded-full mx-5 md:mx-20 ">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
            
            <img
              src={logo}
              alt="Logo"
              className="object-cover w-32 h-28 md:w-52 md:h-20"
            />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-6 md:mr-10">
            {/* About Link - No Dropdown */}
            <Link to="/about" className="text-gray-700 hover:text-black">
              About
            </Link>

            {/* Startup Link - Has Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Startup
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
                  </div>
                </div>
              )}
            </div>

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
    </div>
  );
};

export default Navbar;
