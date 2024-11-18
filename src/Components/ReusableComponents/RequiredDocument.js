import React from 'react';

const RequiredDocument = ({ requiredDocumentsec }) => {
  if (!requiredDocumentsec) return null;

  return (
    <div className="mb-4">
      {/* Render heading if available */}
      {requiredDocumentsec.heading && (
        <h2 className="text-xl font-semibold mb-2">{requiredDocumentsec.heading}</h2>
      )}

      {/* Render subheading if available */}
      {requiredDocumentsec.subheading && (
        <p className="mb-4">{requiredDocumentsec.subheading}</p>
      )}

      {/* Render titles if available */}
      {requiredDocumentsec.titles && requiredDocumentsec.titles.length > 0 && (
        <ul className="list-disc list-inside mb-4">
          {requiredDocumentsec.titles.map((title, index) => (
            <li key={index} className="mb-2">
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequiredDocument;
