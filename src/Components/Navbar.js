import { useState } from "react";
import logo from "../Assets/logo-design.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(null); // Track the hovered link

  const handleMouseEnter = (link) => setDropdownOpen(link);
  const handleMouseLeave = () => setDropdownOpen(null);

  // Dropdown content for each nav link
  const dropdownContent = {
    startup: (
      <div className="absolute left-0 z-20 w-60 bg-white shadow-lg rounded ">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/proprietorship"
            className="block text-gray-700 hover:text-black"
          >
            Proprietorship
          </Link>
          <Link
            to="/partnership"
            className="block text-gray-700 hover:text-black"
          >
            Partnership
          </Link>
          <Link to="/opc" className="block text-gray-700 hover:text-black">
            One Person Company
          </Link>
          <Link to="/llp" className="block text-gray-700 hover:text-black">
            Limited Liability Partnership
          </Link>
          <Link
            to="/private-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            Private Limited Company
          </Link>
          <Link
            to="/section-8-company"
            className="block text-gray-700 hover:text-black"
          >
            Section 8 Company
          </Link>
          <Link
            to="/trust-registration"
            className="block text-gray-700 hover:text-black"
          >
            Trust Registration
          </Link>
          <Link
            to="/public-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            Public Limited Company
          </Link>
          <Link
            to="/producer-company"
            className="block text-gray-700 hover:text-black"
          >
            Producer Company
          </Link>
          <Link
            to="/mca-name-approval"
            className="block text-gray-700 hover:text-black"
          >
            MCA Name Approval
          </Link>
          <Link
            to="/indian-subsidiary"
            className="block text-gray-700 hover:text-black"
          >
            Indian Subsidiary
          </Link>
        </div>
      </div>
    ),
    registrations: (
      <div className="absolute left-0 w-60 bg-white shadow-lg rounded z-50">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/proprietorship"
            className=" text-gray-700 hover:text-black"
          >
            Startup India
          </Link>
          <Link
            to="/partnership"
            className="block text-gray-700 hover:text-black"
          >
            Trade License
          </Link>
          <Link to="/opc" className="block text-gray-700 hover:text-black">
            FSSAI Registration
          </Link>
          <Link to="/llp" className="block text-gray-700 hover:text-black">
            FSSAI License
          </Link>
          <Link
            to="/private-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            ICEGATE Registration
          </Link>
          <Link
            to="/section-8-company"
            className="block text-gray-700 hover:text-black"
          >
            Import Export Code
          </Link>
          <Link
            to="/trust-registration"
            className="block text-gray-700 hover:text-black"
          >
            ISO Registration
          </Link>
          <Link
            to="/public-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            PF Registration
          </Link>
          <Link
            to="/producer-company"
            className="block text-gray-700 hover:text-black"
          >
            ESI Registration
          </Link>
          <Link
            to="/mca-name-approval"
            className="block text-gray-700 hover:text-black"
          >
            Professional Tax Registration
          </Link>
          <Link
            to="/indian-subsidiary"
            className="block text-gray-700 hover:text-black"
          >
            12A and 80G Registration
          </Link>
          <Link
            to="/proprietorship"
            className="block text-gray-700 hover:text-black"
          >
            12A Registration
          </Link>
          <Link
            to="/partnership"
            className="block text-gray-700 hover:text-black"
          >
            80G Registration
          </Link>
          <Link to="/opc" className="block text-gray-700 hover:text-black">
            Barcode Registration
          </Link>
          <Link to="/llp" className="block text-gray-700 hover:text-black">
            BIS Registration
          </Link>
          <Link
            to="/private-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            Certificate of Incumbency
          </Link>
          <Link
            to="/section-8-company"
            className="block text-gray-700 hover:text-black"
          >
            Darpan Registration
          </Link>
          <Link
            to="/trust-registration"
            className="block text-gray-700 hover:text-black"
          >
            Digital Signature
          </Link>
          <Link
            to="/public-limited-company"
            className="block text-gray-700 hover:text-black"
          >
            Digital Signature - DGFT Version
          </Link>
          <Link
            to="/producer-company"
            className="block text-gray-700 hover:text-black"
          >
            Drug License
          </Link>
          <Link
            to="/mca-name-approval"
            className="block text-gray-700 hover:text-black"
          >
            Udyam Registration
          </Link>
          <Link
            to="/indian-subsidiary"
            className="block text-gray-700 hover:text-black"
          >
            Fire License
          </Link>
        </div>
      </div>
    ),
    trademark: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/trademark-registration"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Registration
          </Link>
          <Link
            to="/trademark-search"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Search
          </Link>
          <Link
            to="/trademark-objection"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Objection
          </Link>
          <Link
            to="/trademark-certificate"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Certificate
          </Link>
          <Link
            to="/trademark-opposition"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Opposition
          </Link>
          <Link
            to="/trademark-hearing"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Hearing
          </Link>
          <Link
            to="/trademark-rectification"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Rectification
          </Link>
          <Link
            to="/tm-infringement-notice"
            className="block text-gray-700 hover:text-black"
          >
            TM Infringement Notice
          </Link>
          <Link
            to="/trademark-renewal"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Renewal
          </Link>
          <Link
            to="/trademark-transfer"
            className="block text-gray-700 hover:text-black"
          >
            Trademark Transfer
          </Link>
          <Link
            to="/expedited-tm-registration"
            className="block text-gray-700 hover:text-black"
          >
            Expedited TM Registration
          </Link>
          <Link
            to="/design-registration"
            className="block text-gray-700 hover:text-black"
          >
            Design Registration
          </Link>
          <Link
            to="/design-objection"
            className="block text-gray-700 hover:text-black"
          >
            Design Objection
          </Link>
          <Link
            to="/copyright-registration"
            className="block text-gray-700 hover:text-black"
          >
            Copyright Registration
          </Link>
          <Link
            to="/copyright-objection"
            className="block text-gray-700 hover:text-black"
          >
            Copyright Objection
          </Link>
          <Link
            to="/patent-registration"
            className="block text-gray-700 hover:text-black"
          >
            Patent Registration
          </Link>
        </div>
      </div>
    ),
    gst: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/gst-amendment"
            className="block text-gray-700 hover:text-black"
          >
            GST Amendment
          </Link>
          <Link
            to="/gst-annual-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            GST Annual Return Filing (GSTR-9)
          </Link>
          <Link
            to="/gst-e-invoicing-software"
            className="block text-gray-700 hover:text-black"
          >
            GST E-Invoicing Software
          </Link>
          <Link
            to="/gst-lut-form"
            className="block text-gray-700 hover:text-black"
          >
            GST LUT Form
          </Link>
          <Link
            to="/gst-notice"
            className="block text-gray-700 hover:text-black"
          >
            GST Notice
          </Link>
          <Link
            to="/gst-registration"
            className="block text-gray-700 hover:text-black"
          >
            GST Registration
          </Link>
          <Link
            to="/gst-registration-for-foreigners"
            className="block text-gray-700 hover:text-black"
          >
            GST Registration for Foreigners
          </Link>
          <Link
            to="/gst-return-filing-accountant"
            className="block text-gray-700 hover:text-black"
          >
            GST Return Filing by Accountant
          </Link>
          <Link
            to="/gst-revocation"
            className="block text-gray-700 hover:text-black"
          >
            GST Revocation
          </Link>
          <Link
            to="/invoicing-gst-software"
            className="block text-gray-700 hover:text-black"
          >
            Invoicing & GST Software
          </Link>
          <Link to="/gstr-10" className="block text-gray-700 hover:text-black">
            GSTR-10
          </Link>
          <Link
            to="/gst-software-accountants"
            className="block text-gray-700 hover:text-black"
          >
            GST Software for Accountants
          </Link>
        </div>
      </div>
    ),
    income: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/income-tax-e-filing"
            className="block text-gray-700 hover:text-black"
          >
            Income Tax E-Filing
          </Link>
          <Link
            to="/business-tax-filing"
            className="block text-gray-700 hover:text-black"
          >
            Business Tax Filing
          </Link>
          <Link
            to="/itr-1-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-1 Return Filing
          </Link>
          <Link
            to="/itr-2-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-2 Return Filing
          </Link>
          <Link
            to="/itr-3-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-3 Return Filing
          </Link>
          <Link
            to="/itr-4-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-4 Return Filing
          </Link>
          <Link
            to="/itr-5-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-5 Return Filing
          </Link>
          <Link
            to="/itr-6-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-6 Return Filing
          </Link>
          <Link
            to="/itr-7-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ITR-7 Return Filing
          </Link>
          <Link
            to="/15ca-15cb-filing"
            className="block text-gray-700 hover:text-black"
          >
            15CA - 15CB Filing
          </Link>
          <Link
            to="/tan-registration"
            className="block text-gray-700 hover:text-black"
          >
            TAN Registration
          </Link>
          <Link
            to="/tds-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            TDS Return Filing
          </Link>
          <Link
            to="/income-tax-notice"
            className="block text-gray-700 hover:text-black"
          >
            Income Tax Notice
          </Link>
        </div>
      </div>
    ),
    mca: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
        <Link to="/company-compliance" className="block text-gray-700 hover:text-black">
        Company Compliance
      </Link>
      <Link to="/llp-compliance" className="block text-gray-700 hover:text-black">
        LLP Compliance
      </Link>
      <Link to="/opc-compliance" className="block text-gray-700 hover:text-black">
        OPC Compliance
      </Link>
      <Link to="/name-change-company" className="block text-gray-700 hover:text-black">
        Name Change - Company
      </Link>
      <Link to="/registered-office-change" className="block text-gray-700 hover:text-black">
        Registered Office Change
      </Link>
      <Link to="/din-ekyc-filing" className="block text-gray-700 hover:text-black">
        DIN eKYC Filing
      </Link>
      <Link to="/din-reactivation" className="block text-gray-700 hover:text-black">
        DIN Reactivation
      </Link>
      <Link to="/director-change" className="block text-gray-700 hover:text-black">
        Director Change
      </Link>
      <Link to="/remove-director" className="block text-gray-700 hover:text-black">
        Remove Director
      </Link>
      <Link to="/adt-1-filing" className="block text-gray-700 hover:text-black">
        ADT-1 Filing
      </Link>
      <Link to="/dpt-3-filing" className="block text-gray-700 hover:text-black">
        DPT-3 Filing
      </Link>
      <Link to="/llp-form-11-filing" className="block text-gray-700 hover:text-black">
        LLP Form 11 Filing
      </Link>
      <Link to="/dormant-status-filing" className="block text-gray-700 hover:text-black">
        Dormant Status Filing
      </Link>
      <Link to="/moa-amendment" className="block text-gray-700 hover:text-black">
        MOA Amendment
      </Link>
      <Link to="/aoa-amendment" className="block text-gray-700 hover:text-black">
        AOA Amendment
      </Link>
      <Link to="/authorized-capital-increase" className="block text-gray-700 hover:text-black">
        Authorized Capital Increase
      </Link>
      <Link to="/share-transfer" className="block text-gray-700 hover:text-black">
        Share Transfer
      </Link>
      <Link to="/demat-of-shares" className="block text-gray-700 hover:text-black">
        Demat of Shares
      </Link>
      <Link to="/winding-up-llp" className="block text-gray-700 hover:text-black">
        Winding Up - LLP
      </Link>
      <Link to="/winding-up-company" className="block text-gray-700 hover:text-black">
        Winding Up - Company
      </Link>
          </div>
          </div>
    ),
    compliance: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4">
          <Link
            to="/fssai-renewal"
            className="block text-gray-700 hover:text-black"
          >
            FSSAI Renewal
          </Link>
          <Link
            to="/fssai-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            FSSAI Return Filing
          </Link>
          <Link
            to="/ie-code-modification"
            className="block text-gray-700 hover:text-black"
          >
            IE Code Modification
          </Link>
          <Link
            to="/hr-payroll"
            className="block text-gray-700 hover:text-black"
          >
            HR & Payroll
          </Link>
          <Link
            to="/pf-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            PF Return Filing
          </Link>
          <Link
            to="/esi-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            ESI Return Filing
          </Link>
          <Link
            to="/professional-tax-return-filing"
            className="block text-gray-700 hover:text-black"
          >
            Professional Tax Return Filing
          </Link>
          <Link
            to="/partnership-compliance"
            className="block text-gray-700 hover:text-black"
          >
            Partnership Compliance
          </Link>
          <Link
            to="/proprietorship-compliance"
            className="block text-gray-700 hover:text-black"
          >
            Proprietorship Compliance
          </Link>
          <Link
            to="/bookkeeping"
            className="block text-gray-700 hover:text-black"
          >
            Bookkeeping
          </Link>
        </div>
      </div>
    ),
    consultation: (
      <div className="absolute left-0 z-10 w-60 bg-white shadow-lg rounded ">
        <div className="col-lg-1 col-md-4 gap-6 px-4 p-4"></div>
      </div>
    ),
  };

  return (
    <div className="md:bg-white bg-[#F8F8F8] relative z-10">
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

          <nav className="hidden md:flex space-x-6 md:mr-10">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
              {/* {dropdownOpen === 'about' && dropdownItems} */}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("startup")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Startup
              </a>
              {dropdownOpen === "startup" && dropdownContent.startup}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("registrations")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Registrations
              </a>
              {dropdownOpen === "registrations" &&
                dropdownContent.registrations}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("trademark")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Trademark
              </a>
              {dropdownOpen === "trademark" && dropdownContent.trademark}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("gst")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Goods & Services Tax
              </a>
              {dropdownOpen === "gst" && dropdownContent.gst}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("income")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Income Tax
              </a>
              {dropdownOpen === "income" && dropdownContent.income}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("mca")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                MCA Services
              </a>
              {dropdownOpen === 'mca' && dropdownContent.mca}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("compliance")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Compliance
              </a>
              {dropdownOpen === "compliance" && dropdownContent.compliance}
            </div>

            

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("consultation")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-black">
                Consultation
              </a>
              {/* {dropdownOpen === 'consultation' && dropdownContent.consultation} */}
            </div>
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
              <Link to="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
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
              MCA Services
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Compliance
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
