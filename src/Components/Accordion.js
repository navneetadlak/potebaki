import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-gray-600">
          {isOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};