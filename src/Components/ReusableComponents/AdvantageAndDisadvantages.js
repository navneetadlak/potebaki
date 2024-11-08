import React from 'react'

const AdvantageAndDisadvantages = ({ advantagesData }) => {
  return (
    <>
     <h2 className="text-2xl font-semibold mb-4">
            {advantagesData[0].heading}
          </h2>
          <h2 className="mb-4">
            {advantagesData[0].subheading}
          </h2>
          {advantagesData.slice(1).map((advantages, index) => (
            <div key={index} className="mb-4">
              <span className="font-semibold">{advantages.title}:</span>
              <span> {advantages.description}</span>
            </div>
          ))}
    </>
  )
}

export default AdvantageAndDisadvantages