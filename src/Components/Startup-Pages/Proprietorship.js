import React, { useEffect, useRef, useState } from "react";
import CompareTable from "../ReusableComponents/CompareTable";
import PricingSection from "../ReusableComponents/PricingSection";

const Proprietorship = () => {
  const sidebarRef = useRef(null);
  const compareTableRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Stop the sticky behavior when CompareTable is in view
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null, // Viewport as the root
        threshold: 0.5, // Trigger when 10% of CompareTable is visible
      }
    );

    if (compareTableRef.current) {
      observer.observe(compareTableRef.current);
    }

    return () => {
      if (compareTableRef.current) {
        observer.unobserve(compareTableRef.current);
      }
    };
  }, []);

  // Calculate the sidebar height to prevent layout shift
  useEffect(() => {
    if (sidebarRef.current) {
      setSidebarHeight(sidebarRef.current.offsetHeight);
    }
  }, [isSticky]);

  return (
    <>
      <PricingSection />
      <div className="container mx-auto px-20 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-8">
            <h1 className="text-5xl font-medium mb-4 text-center items-center">
              Proprietorship Registration
            </h1>
            <p className="mb-4">
              Sole proprietorship is one of the oldest and easiest Business
              Structure to start in India. A proprietorship is a type of
              business that is owned, managed, and controlled by one person -
              who is the proprietor. As the proprietorship and proprietor are
              one and the same, it is very easy to start and there are very
              minimal compliance requirements.
            </p>
            <p className="mb-4">
              As the proprietor and the business are one and the same, a
              proprietorship cannot have other partners or shareholders.
              Further, there is no limited liability protection for the
              proprietor from the business activities conducted in the sole
              proprietorship. Hence, this type of business entity is best suited
              for every small businesses with no more than 5 employees.
            </p>
            <p className="mb-4">
              Potebaki can assist you in registering for a Sole proprietorship,
              a simple and efficient business structure that is ideal for solo
              entrepreneurs. With our expert guidance and streamlined process,
              you can start your proprietorship firm registration online quickly
              and hassle-free. Start your Sole Proprietorship registration with
              us and unlock the potential of your business ideas.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Sole Proprietorship Registration in India
            </h2>
            <p>
              Sole Proprietorship registration in India follows a unique
              approach, as there isn't a dedicated government-established
              registration process for this business structure. Instead, a
              proprietorship firm registration online gains recognition through
              tax registrations mandated by relevant laws and regulations. One
              pivotal tax registration is the GST (Goods and Services Tax)
              Registration, which must be secured under the proprietor's name to
              formalize the business's proprietorship status. This sole
              proprietorship registration signifies that the proprietor is
              conducting business within the framework of a proprietorship.
            </p>
          </div>
          {/* Sticky Sidebar Section */}
          <div className="lg:w-1/4 mt-8 lg:mt-4">
            <div
              ref={sidebarRef}
              className={`${isSticky ? "sticky top-20" : "relative"}`}
              style={{ height: sidebarHeight }} // Prevent layout shift
            >
              <h3 className="text-xl font-bold mb-4">RELATED GUIDES</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    Proprietorship Registration: A Comprehensive Guide for
                    Entrepreneurs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    Difference between One Person Company and Sole
                    Proprietorship
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    What is meant by a proprietorship firm?
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    What are the types of proprietorship?
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    GST Registration for Proprietorship
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-600">
                    Conversion of Proprietorship into Private Limited
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl py-6">
          <h1 className="text-xl font-semibold mb-4">
            Essential Licenses and Registrations for Proprietorships
          </h1>
          <p className="mb-4">
            To run a proprietorship in India, you need important licenses and
            registrations, including:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Get a Permanent Account Number (PAN) and an Aadhaar card for your
              business identification.
            </li>
            <li className="mb-2">
              Register under{" "}
              <a href="#" className="text-blue-600 underline">
                UDYAM
              </a>
              , which recognizes your business as a Micro, Small, or Medium
              Enterprise (MSME) and offers government benefits.
            </li>
            <li className="mb-2">
              If your business exceeds specific thresholds, you must register
              for{" "}
              <a href="#" className="text-blue-600 underline">
                Goods and Services Tax (GST)
              </a>{" "}
              to collect and pay GST.
            </li>
            <li className="mb-2">
              Open a separate{" "}
              <a href="#" className="text-blue-600 underline">
                bank account
              </a>{" "}
              for your business to manage finances smoothly.
            </li>
            <li className="mb-2">
              Depending on your business location, register under your state's
              Shops and Establishment Act to follow local labor regulations.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">
            Advantages of Proprietorship
          </h2>
          <div className="mb-4">
            <span className="font-semibold">Easy registration:</span>
            <span>
              {" "}
              Sole proprietorship registration does not have any formal
              incorporation or dissolution process - as its the same as the
              Proprietor. However, to operate a business, the proprietor may
              have to obtain certain registrations and licenses to be compliant
              with the laws and regulations of India.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Lower compliance:</span>
            <span>
              {" "}
              As most proprietorship are only registered with government
              departments like Income Tax & GST, the compliance burden will be
              lower. On the other hand, entities like LLP or Company are
              registered with the Ministry of Corporate Affairs and have to file
              various statutory returns and be audited by a Chartered Accountant
              each year.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Simplicity:</span>
            <span>
              {" "}
              As there are no partners, shareholders, or directors, the
              proprietor can easily operate this business with minimal documents
              and consent requirements. Hence, this type of business structure
              is best suited for very small businesses.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Business decision:</span>
            <span>
              {" "}
              In a proprietorship, the business owner takes all business
              decisions. There is no consent or approval required from any other
              person. Hence, a proprietor can normally take quick decisions
              regarding his business affairs.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Complete control:</span>
            <span>
              {" "}
              As sole proprietorship is owned only by the proprietor. He/she has
              complete control over the assets, revenue, expenses and all
              business operations.
            </span>
          </div>

          {/* Disadvantage section of proprietorship */}
          <h2 className="text-2xl font-semibold mb-4">
            Disadvantages of Sole Proprietorship
          </h2>
          <div className="mb-4">
            <span className="font-semibold">Funding:</span>
            <span>
              {" "}
              This type of business structure relies solely on one persons
              savings, borrowings and credit history. As there are no other
              persons are involved in this type of business structure, raising
              funds from banks will be very hard. Raising equity funds will not
              be possible - as this type of business entity does not allow for
              profit sharing or shareholding.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Personal liability:</span>
            <span>
              {" "}
              If a proprietor is unable to pay business loans or taxes, in a
              proprietorship - the personal assets of the business owner can be
              attached or encumbered. Hence, in this type of business structure
              - the proprietor will be held personally liable until all the
              liabilities are extinguished.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Business continuity:</span>
            <span>
              {" "}
              In case of death or disability of the business owner, the sole
              proprietorship will be automatically dissolved. Hence, there is
              will be no business continuity.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Growth:</span>
            <span>
              {" "}
              A proprietorship has various restrictions in terms of fundraising,
              liability and business continuity. Hence, only very small
              businesses that are in the unorganized sector operate as
              proprietorship.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Unincorporated business:</span>
            <span>
              {" "}
              Sole proprietorship are unincorporated businesses. Hence, there is
              no centralized database available to see if a sole proprietorship
              registration is active or inactive. Thus, sole proprietorship
              entities are mostly classified as unorganized business.
            </span>
          </div>

          {/* Registering a Proprietorship Online through potebaki */}
          <h1 className="text-2xl font-semibold mb-4">
            Registering a Proprietorship Online through IndiaFilings
          </h1>
          <p className="mb-4">
            You can easily complete proprietorship firm registration online
            through Potebaki. For a sole proprietorship registration, only the
            PAN & Aadhaar card of the business owner is required. We can help
            you obtain the following registrations in less than 15 days:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>GST Registration</li>
            <li>
              Zero-Balance Business Current Account with LEDGERS Accounting
              Software
            </li>
          </ul>
          <p className="mb-4">
            Once, you have registered for the proprietorship firm registration
            online on IndiaFilings, please follow the steps below and upload the
            following documents by logging into LEDGERS.
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Login to{" "}
              <a href="#" class="text-blue-600">
                LEDGERS
              </a>{" "}
              using the email address for payment.
            </li>
            <li>Go to Services Tab & Select Proprietorship Engagement</li>
            <li>Upload your PAN & Aadhaar Card Copy</li>
            <li>
              An IndiaFilings Registration Expert will file the registration
              application with GST Department and Bank for Current Account.
            </li>
            <li>
              Access to LEDGERS Accounting Software is for GST invoicing, GST
              filing and other services.
            </li>
          </ol>
          <h2 className="text-xl font-semibold mb-2">
            PAN Card for Proprietorship Firm Registration Online
          </h2>
          <p className="mb-4">
            A proprietorship is not a separate business entity. Hence, there is
            no procedure to obtain proprietorship PAN card. The PAN card of the
            business owner is used for the proprietorship.
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Obtaining GST Registration for Proprietorship
          </h2>
          <p className="mb-4">
            GST registration for a proprietorship will be obtained by
            IndiaFilings as a part of the service. The following documents are
            required for GST registration:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Permanent Account Number (PAN) of Proprietor</li>
            <li>Digital Signature Certificate of the Authorized Signatory</li>
            <li>Consent by Proprietor for obtaining GST Registration</li>
            <li>Photograph of Proprietor and Authorized Signatory</li>
            <li>
              Bank Account Details: A scanned copy of a cancelled cheque with
              the business entity's name, bank account number, and IFSC code.
            </li>
            <li>Declaration / Authorization to Authorized Signatory</li>
            <li>
              For commercial purposes, the rent / lease agreement should be in
              the name of the proprietor.
            </li>
            <li>
              Additional documents such as Aadhaar Card, Driving Licence,
              Passport, or Voter ID in the name of the Owner with the complete
              address of the premises should also be provided if the address on
              the ownership document (Property Tax Receipt or Municipal Khata
              copy or copy of Electricity Bill) is incomplete.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">
            Obtaining GST Registration for Proprietorship
          </h2>
          <p className="mb-4">
            <a href="" class="text-blue-600">
              Udyam Registration
            </a>{" "}
            can be obtained online to avail various benefits available for small
            and medium sized businesses. Once the GST registration is obtained,
            the IndiaFilings team would help obtain UDYAM registration by
            submitting Aadhaar card, PAN card and GST certificate to Government.
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Bank Account for Proprietorship
          </h2>
          <p className="mb-4">
            The bank current account for a proprietorship will be opened in the
            name of the business owner using his/her PAN. The business owner
            will have to submit proof for doing business. Any two of the
            following documents can be submitted to create a current account
            instead of savings account in the name of proprietorship:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>GST registration certificate</li>
            <li>Shop & Establishment Act license</li>
            <li>
              License issued by the Registering authority like Certificate of
              Practice issued by Institute of Chartered Accountants of India,
              Institute of Cost Accountants of India, Institute of Company
              Secretaries of India, Indian Medical Council, Food and Drug
              Control Authorities,
            </li>
            <li>
              Banks may also accept IEC (Importer Exporter Code) issued to the
              proprietary concern by the office of DGFT as an identity document
              for opening a bank account etc.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">
            Obtaining Shops & Establishment Act License for Proprietorship
          </h2>
          <p className="mb-4">
            From state to state, the process for acquiring a Shop and
            Establishment registration certificate changes. It is available both
            online and offline. In most states, Shop and Establishment Act
            registration can be obtained within 2-3 weeks.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Timelines for Sole Proprietorship Registration
          </h2>
          <p className="mb-4">
            A sole proprietorship registration can normally be done in India
            through IndiaFilings in less than 15 days. However, the timelines
            for registration will vary from case to case, depending on the
            government and bank processing timelines.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Proprietorship Business Activities
          </h2>
          <p className="mb-4">
            A proprietorship can undertake any type of business activity that an
            Indian person can undertake across most sectors and industries.
            However, there are some activities like banking, insurance,
            financial services, lending, defence, and telecommunication that
            require specialized approval. In such cases, a company is
            mandatorily required to obtain various approvals from the
            Government. Hence, the proprietorship business structure only works
            for business activities that are small-scale in nature. This might
            be one of the limitations of the proprietorship firm registration.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Compliances for Proprietorship
          </h2>
          <div className="mb-4">
            <p className="mb-2">
              The following are some of the compliances that are applicable for
              a sole proprietorship registration:
            </p>
            <span className="font-semibold">Income Tax Filing:</span>
            <span>
              {" "}
              The business owner of a proprietorship will have to file a
              personal income tax return using the form ITR-3 or ITR-4.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Business Income:</span>
            <span>
              {" "}
              Only income tax forms ITR-3 and ITR-4 allow for declaring business
              income. Hence, all proprietorships will have to file form ITR-3 or
              ITR-4 to be compliant with the income tax regulations.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">GST Return Filing:</span>
            <span>
              {" "}
              If a proprietorship has GST registration, GST return must be filed
              every month and quarter as per the scheme under which the business
              is registered.
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">TDS Returns:</span>
            <span>
              {" "}
              In case the proprietorship is having employees or purchasing
              goods/services beyond a certain threshold - tax must be deducted
              at source and TDS returns must be filed every quarter.
              <br />
              In addition to the above, various other compliance requirements
              maybe applicable to the proprietorship based on industry and
              location.
            </span>
          </div>
        </div>
        <div ref={compareTableRef}>
          <CompareTable />
        </div>
      </div>

      {/* Documents Required Section */}
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
      {/* F&Q Secction */}
      <div className="container flex flex-col lg:flex-row mx-auto px-28 py-8">
        <div className="lg:w-4/5 lg:pr-6">
          <h1 className="text-3xl font-bold mb-6">Proprietorship FAQ's</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What is meant by proprietorship firm?
            </h2>
            <p className="text-gray-700">
              A proprietorship firm is a type of business structure where a
              single individual owns and manages the entire business. The
              proprietor is personally liable for all the debts and obligations
              of the firm. Proprietorship firms are easy to set up and operate,
              making them a popular choice for small businesses and startups in
              India.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What are the types of proprietorship?
            </h2>
            <p className="text-gray-700 mb-2">
              There are mainly four types of proprietorship in India:
            </p>
            <ul className="list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-blue-500 mr-2"></i> Sole
                Proprietorship
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-blue-500 mr-2"></i> One Person
                Company (OPC)
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-blue-500 mr-2"></i> Registered
                Proprietorship
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check text-blue-500 mr-2"></i> Unregistered
                Proprietorship
              </li>
            </ul>
            <p className="text-gray-700">
              Each type of proprietorship has its advantages and disadvantages,
              and the choice of business structure depends on the proprietor's
              needs, goals, and resources.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What is the difference between proprietorship and firm?
            </h2>
            <p className="text-gray-700">
              Proprietorship and firm are often used interchangeably, but there
              is a subtle difference between the two. Proprietorship refers to a
              type of business structure where a single individual owns and
              manages the entire business, while a firm refers to a group of
              individuals who come together to carry out a business activity. In
              a firm, the ownership is shared among the partners, and the
              profits and losses are also shared among them. In contrast, in
              proprietorship, the proprietor has complete control over the
              business, and all the profits and losses belong to the proprietor
              alone.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Is there any certificate of incorporation?
            </h2>
            <p className="text-gray-700">
              No, there is no certificate of incorporation given.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Are there any compliances for the sole proprietorship?
            </h2>
            <p className="text-gray-700">
              As the sole proprietorship and the proprietor are the same the
              individual has to just file the Income-tax returns and GST returns
              filing for the proprietorship firm.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Is there any minimum requirement to start a sole proprietorship?
            </h2>
            <p className="text-gray-700">
              No, there is no minimum requirement to start a sole proprietorship
              in India.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              How long does the sole proprietorship exist?
            </h2>
            <p className="text-gray-700">
              The sole proprietorships exist as long as the proprietor is alive
              and is desiring to run the business.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Is the owner of the sole proprietorship considered to be the same
              as the sole proprietor?
            </h2>
            <p className="text-gray-700">
              Yes, a sole proprietor is considered to be the same as the sole
              proprietor.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What are the licenses required to register for sole proprietorship
              company?
            </h2>
            <p className="text-gray-700">
              It generally differs from state to state as in Maharashtra a Shop
              and Act license is required and for West Bengal, the trade license
              is required.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What is the role of the proprietor in sole proprietorship?
            </h2>
            <p className="text-gray-700">
              The proprietor owns, controls, and manages the sole
              proprietorships. He has a complete hold over the proprietorship.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Can I get PAN card for sole proprietorship?
            </h2>
            <p className="text-gray-700">
              No, PAN card cannot be obtained for proprietorship. Proprietorship
              PAN card will be the same as the proprietor’s PAN card. There is
              no separate PAN card for a proprietorship business.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Can I open a bank account in proprietorship business name?
            </h2>
            <p className="text-gray-700">
              Yes, a proprietorship current account can be opened in the name of
              the business. However, for all legal and official purposes, the
              PAN card of the proprietor will be used. Hence, the ultimate owner
              and operator of the proprietorship bank account will be the
              proprietor.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Can I operate a proprietorship from my house?
            </h2>
            <p className="text-gray-700">
              Yes, you can operate a proprietorship business from your house as
              long as it complies with other regulations that may be applicable
              to your business.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What is the address proof for proprietorship?
            </h2>
            <p className="text-gray-700">
              Any official document that has the name of the proprietor, photo,
              and address, like a driving license or passport, can be used as
              address proof for proprietorship. In addition, a utility or EB
              bill in the name of the proprietor can also be submitted.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What are the mandatory licenses to be obtained for a sole
              proprietorship?
            </h2>
            <p className="text-gray-700">
              The licenses and registrations for a sole proprietorship will vary
              depending on the type of business activity.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Is GST registration mandatory for a sole proprietorship?
            </h2>
            <p className="text-gray-700">
              No, GST registration is not mandatory for proprietorship. However,
              it is recommended that all proprietorships be registered under GST
              and have UDYAM registration to undertake various business
              activities.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              What is a sole proprietorship?
            </h2>
            <p className="text-gray-700">
              Proprietorships in India are a type of unregistered business
              entity that is owned, managed, and controlled by one person. The
              micro and small businesses that operate in the unorganized sector
              prefer getting registered as sole proprietorships.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Who can get sole proprietorship?
            </h2>
            <p className="text-gray-700">
              An Indian Citizen with a current account in the name of his/her
              business can get a registration.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              How long does it take to register a sole proprietorship in India?
            </h2>
            <p className="text-gray-700">
              It takes around 8 to 10 days but is subject to government
              processing and document submission.
            </p>
          </div>
        </div>
        <div className="lg:w-2/6">
          <div className="mb-6">
            <img
              src="https://placehold.co/310x350"
              alt="Company Registration"
              className="w-60 h-72 mb-2"
            />
            <h3 className="text-lg font-semibold">Company Registration</h3>
            <p className="text-gray-700">From ₹ 6899</p>
          </div>
          <div className="mb-6">
            <img
              src="https://placehold.co/310x350"
              alt="OPC Registration"
              className="w-60 h-72 mb-2"
            />
            <h3 className="text-lg font-semibold">OPC Registration</h3>
            <p className="text-gray-700">From ₹ 2899</p>
          </div>
        </div>
      </div>

      {/* zero late fee platform option */}
      <div class="flex justify-center items-center lg:flex-row  py-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-2xl font-bold mb-4">Zero Late Fee Platform</h1>
            <p class="text-gray-700">
              Many small businesses pay lakhs in penalty every year to the
              Government for late filing various statutory returns. Such penalty
              or late fee paid is not tax deductible and is a drain on
              profitability. At IndiaFilings, our mission is to provide the most
              affordable services to our customers and help them avoid all late
              fee. To achieve our mission - we have built enterprise grade
              technology to help you proactively know the upcoming compliance
              and avoid penalty. Checkout our compliance services below, talk to
              an Advisor and stop paying unwanted late fees.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-start">
            <div class="w-full md:w-2/3 mb-4 md:mb-0">
              <div class="bg-white shadow-md rounded-lg">
                <a
                  href="#"
                  class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
                >
                  <span class="text-blue-600">
                    Manage Compliance for Proprietorship
                  </span>
                  <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                    From Rs. 2899
                  </span>
                </a>
                <a
                  href="#"
                  class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
                >
                  <span class="text-blue-600">
                    Manage Compliance for Partnership
                  </span>
                  <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                    From Rs. 15899
                  </span>
                </a>
                <a
                  href="#"
                  class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
                >
                  <span class="text-blue-600">
                    Manage Compliance for Limited Liability Partnership
                  </span>
                  <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                    From Rs. 9899
                  </span>
                </a>
                <a
                  href="#"
                  class="flex justify-between items-center p-4 hover:bg-gray-100"
                >
                  <span class="text-blue-600">
                    Manage Compliance for Private Limited Company
                  </span>
                  <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                    From Rs. 19899
                  </span>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/3 flex justify-center md:justify-end">
              <img
                src="https://placehold.co/300x300"
                alt="Promotional image with text 'Save Money, Zero Late Fee, Know More'"
                class="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proprietorship;
