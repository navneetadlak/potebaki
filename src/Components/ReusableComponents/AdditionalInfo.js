import React from 'react'

const AdditionalInfo = ({ additionalInfoData }) => {
    if(!additionalInfoData) return null;

  return (
    <>
     <h2 className="text-xl font-semibold mb-2">
            {additionalInfoData.heading}
          </h2>
          <p className="mb-4">{additionalInfoData.panCard}</p>
          <h2 className="text-xl font-semibold mb-2">
            {additionalInfoData.heading2}
          </h2>
          <p className="mb-4">{additionalInfoData.gst}</p>
          <ul className="list-disc list-inside mb-4">
            {additionalInfoData.gstDocuments.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            {additionalInfoData.heading2}
          </h2>
          <p className="mb-4">{additionalInfoData.gst}</p>
    </>
  )
}

export default AdditionalInfo