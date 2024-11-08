import React from 'react';

const Licenses = ({ licensesData }) => {
  if (!licensesData) return null;

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">
        {licensesData.title}
      </h1>
      <p className="mb-4">
        {licensesData.description}
      </p>
      <ul className="list-disc list-inside mb-6">
        {licensesData.licenses.map((license, index) => (
          <li key={index} className="mb-2">
            {license}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Licenses;
