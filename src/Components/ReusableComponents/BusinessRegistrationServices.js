import React from "react";

const BusinessRegistrationServices = () => {
  const states = [
    { name: "Partnership", link: "https://example.com/" },
    { name: "Indian Subsidiary", link: "https://example.com/" },
    { name: "Digital Signature", link: "https://example.com/" },
    { name: "Professional Tax Registration", link: "https://example.com/" },
    { name: "One Person Company", link: "https://example.com/" },
    { name: "Producer Company Registration", link: "https://example.com/" },
    { name: "Udyam Registration", link: "https://example.com/" },
    { name: "LLP Registration", link: "https://example.com/" },
    { name: "Section 8 Company Registration", link: "https://example.com/" },
    { name: "Import Export Code", link: "https://example.com/" },
    { name: "Company Registration", link: "https://example.com/" },
    { name: "USA Company Registration", link: "https://example.com/" },
    { name: "FSSAI", link: "https://example.com/" },
  ];

  return (
    <div className="container mx-auto p-4 lg:px-32 justify-evenly">
      <h1 className="text-3xl font-semi-bold text-center my-8">
        Other Potebaki - Business Registration Services
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {states.map((state, index) => (
          <div key={index} className="flex items-center">
            <i className="fas fa-chevron-right text-blue-500 mr-2"></i>
            <a href={state.link} className="text-blue-500 hover:underline text-sm">
              {state.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessRegistrationServices;
