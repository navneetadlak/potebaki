import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {/* First Accordion Item */}
      <AccordionItem value="item-1" className="bg-white p-6 rounded-lg shadow-md">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold">
          What services do you offer? 
          </h3>
          <Icon />
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 mt-4">
          Our website lists a variety of properties including residential homes, apartments, condos, townhouses, commercial properties, vacant land, and more. You can filter your search based on your preferences.
          <a href="#" className="text-blue-600 mt-2 inline-block">Read More</a>
        </AccordionContent>
      </AccordionItem>

      {/* Second Accordion Item */}
      <AccordionItem value="item-2" className="bg-white p-6 rounded-lg shadow-md">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold">
          What are the fees and charges? 
          </h3>
          <Icon />
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 mt-4">
          You can schedule a viewing by contacting the property agent directly through the contact details provided in the listing.
        </AccordionContent>
      </AccordionItem>

      {/* Third Accordion Item */}
      <AccordionItem value="item-3" className="bg-white p-6 rounded-lg shadow-md">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold">
          What are the tax implications of my investments? 
          </h3>
          <Icon />
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 mt-4">
          Yes, you can list your property by signing up as a seller or landlord on our platform.
        </AccordionContent>
      </AccordionItem>

      {/* Forth Accordion Item */}
      <AccordionItem value="item-4" className="bg-white p-6 rounded-lg shadow-md">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold">
          What investment options are available? 
          </h3>
          <Icon />
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 mt-4">
          Yes, you can list your property by signing up as a seller or landlord on our platform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

// Icon Component to show dynamic plus/minus icons
const Icon = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle state on click
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleToggle}>
      {isOpen ? (
        <i className="fas fa-minus text-gray-500"></i>
      ) : (
        <i className="fas fa-plus text-gray-500"></i>
      )}
    </div>
  );
};

export default FAQAccordion;
