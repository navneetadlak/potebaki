import React, { useEffect } from "react";
import CompareTable from "./CompareTable";

const Proprietorship = () => {
  useEffect(() => {
    const cur_url = window.location.href;
    let hyperLinkText = "";
    document.querySelectorAll(".lnk th a").forEach((link) => {
      const anchor_link = link.getAttribute("href");
      if (cur_url === anchor_link) {
        hyperLinkText = link.parentElement.textContent;
        link.parentElement.innerHTML = "";
      }
    });

    document.querySelectorAll(".lnk th").forEach((th) => {
      if (th.textContent === "") {
        th.textContent = hyperLinkText;
      }
    });
  }, []);

  return (
    <>
      {/* Pricing Section */}
      <div className="flex flex-col lg:flex-row justify-center py-10 px-4 lg:px-0 md:mx-52">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-3/4 flex flex-col lg:flex-row mb-6 lg:mb-0">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0">
            <img
              src="https://placehold.co/400x300"
              alt="Woman smiling in a shop"
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Documents Required</h2>
            <ul className="list-disc list-inside mb-4">
              <li>PAN Card</li>
              <li>Aadhaar Card</li>
            </ul>
            <a href="#" className="text-blue-600">
              Load more
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Proprietorship</h1>
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-lg font-bold">4.7</span>
              <span className="text-gray-600 ml-2">8533 customers</span>
            </div>
            <p className="mb-4">
              Easily set up a sole proprietorship online with GST registration.
            </p>
            <div className="relative mb-4">
              <select className="border rounded-lg w-full p-2">
                <option>GST Registration</option>
                <option>Trademark</option>
                <option>GSTIN + Accountant</option>
              </select>
            </div>
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">GST Registration</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">INR 2899</span>
                <span className="text-gray-600">All Inclusive</span>
              </div>
              <span className="text-green-600 mb-2 block">
                3 Exclusive Offers
              </span>
              <ul className="list-disc list-inside mb-4">
                <li>GST Application Submission</li>
                <li>GST Application Tracking</li>
                <li>GST Registration certificate</li>
                <li>Bank Account Opening</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">Trademark</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">INR 6988</span>
                <span className="text-gray-600">All Inclusive</span>
              </div>
              <span className="text-green-600 mb-2 block">
                3 Exclusive Offers
              </span>
              <ul className="list-disc list-inside mb-4">
                <li>Trademark Filing</li>
                <li>1 Trademark Class</li>
                <li>Individuals & MSMEs</li>
              </ul>
            </div>
            <a href="#" className="text-blue-600 mb-4 block">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600">
              Refer a Friend
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:ml-7">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <img
              src="https://placehold.co/300x100"
              alt="Personalised Quotes! Great Service, Great Price!"
              className="rounded-lg mb-4"
            />
            <form>
              <input
                type="text"
                placeholder="Name"
                className="border rounded-lg w-full p-2 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg w-full p-2 mb-4"
              />
              <div className="flex mb-4">
                <select className="border rounded-l-lg p-2">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone"
                  className="border rounded-r-lg w-full p-2"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="gstin" className="mr-2" />
                <label htmlFor="gstin">Enter GSTIN to get 18% GST Credit</label>
              </div>
              <button className="bg-green-500 text-white rounded-lg w-full p-2">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

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
          <div className="lg:w-1/4 mt-8 lg:mt-0">
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
                  Difference between One Person Company and Sole Proprietorship
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
        <CompareTable />
      </div>
    </>
  );
};

export default Proprietorship;
