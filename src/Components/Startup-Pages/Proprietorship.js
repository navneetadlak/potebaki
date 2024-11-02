import React, { useEffect, useRef, useState } from "react";
import CompareTable from "../ReusableComponents/CompareTable";
import PricingSection from "../ReusableComponents/PricingSection";
import RelatedBusinessReg from "../ReusableComponents/RelatedBusinessReg";
import VideoPlaySection from "../ReusableComponents/VideoPlaySection";
import CustomerReviews from "../ReusableComponents/CustomerReviews";
import StatesLinks from "../ReusableComponents/StatesLinks";
import BusinessRegistrationServices from "../ReusableComponents/BusinessRegistrationServices";
import PopularSearch from "../ReusableComponents/PopularSearch";
import DocumentReqSection from "../ReusableComponents/DocumentReqSection";
import FQ from "../ReusableComponents/FQ";
import { Content } from "../ReusableComponents/Content";

const Proprietorship = ({ content }) => {
  const { mainSection, sidebar, newSection, onlineRegistration, additionalInfo, bankAccount, licenseDetails, timeline, businessActivities, compliance, partnership, documentsRequired, } = content;
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
    <PricingSection pricingSection={Content.proprietorship.pricingSection} />
    <div className="container mx-auto px-20 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-8">
            <h1 className="text-5xl font-medium mb-4 text-center items-center">
              {mainSection.title}
            </h1>
            {mainSection.description.map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
        <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle}</h2>
        <p>{mainSection.subDescription}</p>
          </div>


          {/* Sticky Sidebar Section */}
          <div className="lg:w-1/4 mt-8 lg:mt-4">
      <div
        ref={sidebarRef}
        className={`${isSticky ? "sticky top-20" : "relative"}`}
        style={{ height: sidebarHeight }} // Prevent layout shift
      >
        <h3 className="text-xl font-bold mb-4">{sidebar?.title}</h3>
        <ul className="list-disc list-inside">
          {sidebar?.guides?.map((guide, index) => (
            <li key={index} className="mb-2">
              <a href={guide.link} className="text-blue-600">
                {guide.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>

        <div className="max-w-4xl py-6">
          <h1 className="text-xl font-semibold mb-4">
            {newSection.title}
          </h1>
          <p className="mb-4">
            {newSection.description}
          </p>
          <ul className="list-disc list-inside mb-6">
            {newSection.licenses.map((licenses, index) => (
              <li key={index} className="mb-2">
              {licenses}
            </li>
            ))}
          </ul>

            
          
          <h2 className="text-2xl font-semibold mb-4">{newSection.advantages[0].heading}</h2>
      {newSection.advantages.slice(1).map((advantages, index) => (
        <div key={index} className="mb-4">
          <span className="font-semibold">{advantages.title}:</span>
          <span> {advantages.description}</span>
        </div>
      ))}
      
          {/* Disadvantage section of proprietorship */}
        <h2 className="text-2xl font-semibold mb-4">{newSection.disadvantages[0].heading}</h2>

{newSection.disadvantages.slice(1).map((disadvantage, index) => (
  <div key={index} className="mb-4">
    <span className="font-semibold">{disadvantage.title}:</span>
    <span> {disadvantage.description}</span>
  </div>
))}

          {/* Registering a Proprietorship Online through potebaki */}
          <h1 className="text-2xl font-semibold mb-4">
            {onlineRegistration.title}
          </h1>
          <p className="mb-4">
          {onlineRegistration.description}
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>{onlineRegistration.registrations[0]}</li>
            <li>
            {onlineRegistration.registrations[1]}
            </li>
          </ul>
          <p className="mb-4">
            {onlineRegistration.para}
          </p>

          <ol className="list-decimal list-inside mb-4">
      {onlineRegistration.instructions.map((instruction, index) => (
        <li key={index}>
          {instruction.includes("LEDGERS") ? (
            <>
              {instruction.split("LEDGERS")[0]}
              <a href="#" className="text-blue-600">LEDGERS</a>
              {instruction.split("LEDGERS")[1]}
            </>
          ) : (
            instruction
          )}
        </li>
      ))}
    </ol>

          <h2 className="text-xl font-semibold mb-2">
            {additionalInfo.heading}
          </h2>
          <p className="mb-4">
          {additionalInfo.panCard}
          </p>
          <h2 className="text-xl font-semibold mb-2">
          {additionalInfo.heading2}
          </h2>
          <p className="mb-4">
          {additionalInfo.gst}
          </p>
          <ul className="list-disc list-inside mb-4">
            {additionalInfo.gstDocuments.map((info, index)=>(
              <li key={index}>{info}</li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold mb-2">
            {additionalInfo.heading2}
          </h2>
          <p className="mb-4">
            {additionalInfo.gst}
          </p>
          <h2 className="text-xl font-semibold mb-2">
            {bankAccount.title}
          </h2>
          <p className="mb-4">
          {bankAccount.description}
          </p>
          <ul className="list-disc list-inside mb-4">
            {bankAccount.documents.map((document, index) =>(
              <li>{document}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">
            {licenseDetails.title}
          </h2>

          <p className="mb-4">
            {licenseDetails.description}
          </p>

          <h2 className="text-xl font-semibold mb-2">
{timeline.title}
          </h2>
          <p className="mb-4">
            {timeline.description}
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            {businessActivities.title}
          </h2>
          <p className="mb-4">
            {businessActivities.description}
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            {compliance.title}
          </h2>
          <div className="mb-4">
            <p className="mb-2">
              {compliance.subTitle}
            </p>
          </div>
          {compliance.items.map((item, index) => (
        <div className="mb-4" key={index}>
          <span className="font-semibold">{item.label}:</span>
          <span> {item.description}</span>
        </div>
      ))}
        </div>
        <div ref={compareTableRef}>
          <CompareTable />
        </div>
      </div>

      <DocumentReqSection documentsRequired={Content.documentsRequired} />
      <FQ />
      <RelatedBusinessReg />
      <VideoPlaySection />
      <CustomerReviews />
      <StatesLinks />
      <BusinessRegistrationServices />
      <PopularSearch />
    </>
  );
};

export default Proprietorship;
