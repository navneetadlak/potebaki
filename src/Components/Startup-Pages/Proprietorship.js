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
import Licenses from "../ReusableComponents/Licenses";
import OnlineRegistration from "../ReusableComponents/OnlineRegistration";
import AdditionalInfo from "../ReusableComponents/AdditionalInfo";
import AdvantageAndDisadvantages from "../ReusableComponents/AdvantageAndDisadvantages";
import RequiredDocument from "../ReusableComponents/RequiredDocument";
import SectionComponent from "../ReusableComponents/SectionComponent";

const Proprietorship = ({
  content,
  pricingSection = Content.proprietorship.pricingSection,
}) => {
  const {
    mainSection,
    sidebar,
    subsidiariesInIndia,
    licenses,
    partnerinindia, //for partnership page
    impotanceofpartnership,
    whatisprivatelimited,
    eligibility,
    advantages,
    disadvantages,
    gumastaLicense,
    typesOfTradeLicenses,
    requiredDocument,
    requiredDocumentsec,
    reasons,
    contentofTrust,
    documentReqTrust,
    opcRegistration,
    privateRegistration,
    requiredDocumentPrivateLtd,
    newSection,
    documentChecklist,
    onlineRegistration,
    additionalInfo,
    bankAccount,
    licenseDetails,
    timeline,
    businessActivities,
    compliance,
    partnership,
    paragraphLLP,
    documentsRequired,
    effortlessLLP,
    secLastPara,
    lastparagraph,
  } = content;
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
      {/* <PricingSection pricingSection={Content.proprietorship.pricingSection} /> */}
      <PricingSection pricingSection={pricingSection} />
      <div className="container mx-auto px-20 py-8">
        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 lg:pr-8">
  <h1 className="text-5xl font-medium mb-4 text-center items-center">
    {mainSection.title}
  </h1>
  {mainSection.description?.map((para, index) => (
    <p key={index} className="mb-4">
      {para
        ?.split('\n')
        .map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
    </p>
  ))}
  <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle}</h2>
  <p className="mb-4">
    {mainSection.subDescription
      ?.split('\n')
      .map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
  </p>
  <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle2}</h2>
  <p>
    {mainSection.subDescription2
      ?.split('\n')
      .map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
  </p>
  <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle3}</h2>
  <p>
    {mainSection.subDescription3
      ?.split('\n')
      .map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
  </p>
  <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle4}</h2>
  <p>
    {mainSection.subDescription4
      ?.split('\n')
      .map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
  </p>

  <SectionComponent data={subsidiariesInIndia} />

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
          {Licenses && <Licenses licensesData={licenses} />}

          {partnership?.map((item, index) => (
  <div key={index}>
    {item.title && <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>}
    {item.description && (
      <p className="mb-4">
        {item.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    )}
  </div>
))}
        {console.log(contentofTrust)}
        {RequiredDocument && <RequiredDocument requiredDocumentsec={reasons} /> }
          {RequiredDocument && <RequiredDocument requiredDocumentsec={requiredDocumentsec} /> }
          {RequiredDocument && <RequiredDocument requiredDocumentsec={contentofTrust} /> }
          {RequiredDocument && <RequiredDocument requiredDocumentsec={documentReqTrust} /> }

          {/* What is private limited section  */}
          {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={whatisprivatelimited} />}

          {/* Partner in india same structure as Advantages and Disadvantages */}
          {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={partnerinindia} />}

          {/* Eligibility criteria section */}
          {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={eligibility} />}

          {/* Advantages section of proprietorship */}
          {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={advantages} />}

          {/* Disadvantage section of proprietorship */}
          {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={disadvantages} />}

          {/* Limited Liability Partnership (LLP) Name Structure */}

          {/*  */}
          <div className="trade-license-info">
      {/* Types of Trade Licenses */}
      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2">{typesOfTradeLicenses[0]?.heading}</h2>
        <p className="mb-2">{typesOfTradeLicenses[0]?.subheading}</p>
        <ul>
          {typesOfTradeLicenses.slice(1).map((type, index) => (
            <li key={index}>
              <h3 className="font-medium">{type.title}</h3>
              <p className="mb-2">{type.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Gumasta License */}
      <section className="mb-2">
        {gumastaLicense.map((license, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold">{license.heading}</h2>
            <p className="mb-2">{license.subheading}</p>
          </div>
        ))}
      </section>
    </div>

          {/* lastparagraph section */}
 {paragraphLLP?.title && paragraphLLP?.description && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{paragraphLLP.title}</h2>
    <div className="mb-4">
      <p className="mb-2">
        {paragraphLLP.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
    {paragraphLLP.note && (
      <p className="font-bold text-xl">{paragraphLLP.note}</p>
    )}
  </>
)}

          {/* Required Documents for OPC Registration Online */}
          {requiredDocument?.heading &&(
            <>
                {/* {console.log("requiredDocument.heading",requiredDocument.heading)} */}
                <h2 className="text-xl font-semibold mb-2">{requiredDocument.heading}</h2>
                <p className="mb-4">{requiredDocument.subheading}</p>
                <ul className="list-disc list-inside mb-4">
                  {requiredDocument.titles.map((title, index)=>(
                    <li key={index} className="mb-2">
                        {title}
                    </li>
                  ))}
                </ul>
            </>
          )}

           {/* Documents Required for Section 8 Company Incorporation */}
           {requiredDocumentsec?.heading &&(
            <>
                {/* {console.log("requiredDocument.heading",requiredDocument.heading)} */}
                <h2 className="text-xl font-semibold mb-2">{requiredDocumentsec.heading}</h2>
                <p className="mb-4">{requiredDocumentsec.subheading}</p>
                <ul className="list-disc list-inside mb-4">
                  {requiredDocumentsec.titles.map((title, index)=>(
                    <li key={index} className="mb-2">
                        {title}
                    </li>
                  ))}
                </ul>
            </>
          )}

       



          {/* requiredDocumentPrivateLtd section */}
          {requiredDocumentPrivateLtd?.heading && requiredDocumentPrivateLtd?.subheading && (
        <>
          <h2 className="text-xl font-semibold mb-2">{requiredDocumentPrivateLtd.heading}</h2>
          <p className="mb-4">{requiredDocumentPrivateLtd.subheading}</p>

          {/* Mapping each section in requiredDocumentPrivateLtd.details */}
          {requiredDocumentPrivateLtd.details.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              {section.points.map((point, idx) => (
                <p key={idx} className="mb-2">{point}</p>
              ))}
            </div>
          ))}
        </>
      )}

{opcRegistration?.heading && opcRegistration?.intro && (
  <>
    <h2 className="text-xl font-semibold mb-2">{opcRegistration.heading}</h2>
    <p className="mb-4">{opcRegistration.intro}</p>

    {/* Sections */}
    {opcRegistration.sections.map((section, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
        
        {/* Steps */}
        {section.steps && section.steps.map((step, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">{step.stepTitle}</p>
            <p>{step.stepDescription}</p>
          </div>
        ))}
      </div>
    ))}
          <h2 className="text-xl mb-2 font-semibold">{opcRegistration.heading2}</h2>
          <p className="mb-2">
  {opcRegistration.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}
</p>
</>
)}

{/* Registration for private limited */}
{privateRegistration?.heading && privateRegistration?.intro && (
  <>
    <h2 className="text-xl font-semibold mb-2">{privateRegistration.heading}</h2>
    <p className="mb-4">{privateRegistration.intro}</p>

    {/* Sections */}
    {privateRegistration.sections.map((section, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
        
        {/* Steps */}
        {section.steps && section.steps.map((step, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">{step.stepTitle}</p>
            <p className="mb-2">
              {step.stepDescription
                ? step.stepDescription.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))
                : null}
            </p>
          </div>
        ))}
      </div>
    ))}
  </>
)}


    {/* Document checklist section in private limited component */}
    {AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={documentChecklist} />}


          {OnlineRegistration && (
            <OnlineRegistration onlineRegistrationData={onlineRegistration} />
          )}

{ AdditionalInfo && ( <AdditionalInfo additionalInfoData={additionalInfo} />)}

{ bankAccount && ( <bankAccount bankAccountData={bankAccount} />)}

          

{licenseDetails?.title && licenseDetails?.description && (
  <>
    <h2 className="text-xl font-semibold mb-2">{licenseDetails.title}</h2>
    <p className="mb-4">{licenseDetails.description}</p>
  </>
)}

{timeline?.title && timeline?.description && (
  <>
    <h2 className="text-xl font-semibold mb-2">{timeline.title}</h2>
    <p className="mb-4">{timeline.description}</p>
  </>
)}

{businessActivities?.title && businessActivities?.description && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{businessActivities.title}</h2>
    <p className="mb-4">{businessActivities.description}</p>
  </>
)}


{/* Importance of Registering a Partnership Firm */}
{impotanceofpartnership?.title && impotanceofpartnership?.subTitle && impotanceofpartnership?.items?.length > 0 && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{impotanceofpartnership.title}</h2>
    <div className="mb-4">
      <p className="mb-2">{impotanceofpartnership.subTitle}</p>
    </div>
    {impotanceofpartnership.items.map((item, index) => (
      <div className="mb-4" key={index}>
        <span className="font-semibold">{item.label}:</span>
        <span>  {item.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}</span>
      </div>
    ))}
  </>
)}

{compliance?.title && compliance?.subTitle && compliance?.items?.length > 0 && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{compliance.title}</h2>
    <div className="mb-4">
      <p className="mb-2">{compliance.subTitle}</p>
    </div>
    {compliance.items.map((item, index) => (
      <div className="mb-4" key={index}>
        <span className="font-semibold">{item.label}:</span>
        <span>  {item.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}</span>
      </div>
    ))}
  </>
)}

{/* Effortless LLP section */}
{AdvantageAndDisadvantages && <AdvantageAndDisadvantages advantagesData={effortlessLLP} />}


{/* secound last paragraph section */}
{secLastPara?.description && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{secLastPara.title}</h2>
    <div className="mb-4">
      <p className="mb-2">
        {secLastPara.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
    {secLastPara.note && (
      <p className="font-bold text-xl">{secLastPara.note}</p>
    )}
  </>
)}

{/* lastparagraph section */}
 {lastparagraph?.title && lastparagraph?.description && (
  <>
    <h2 className="text-2xl font-semibold mb-2">{lastparagraph.title}</h2>
    <div className="mb-4">
      <p className="mb-2">
        {lastparagraph.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
    {lastparagraph.note && (
      <p className="font-semibold text-lg">{lastparagraph.note}</p>
    )}
  </>
)}



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
