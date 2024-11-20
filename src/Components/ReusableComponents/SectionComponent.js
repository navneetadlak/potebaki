import React from 'react'

const SectionComponent = ({data}) => {
    if(!data) return null;
  return (
    <div>
    {data.map((item, index) => (
      <div key={index} className="mb-6">
        {item.heading && <h1 className="text-2xl font-semibold">{item.heading}</h1>}
        {item.subheading && <h2 className="text-lg">{item.subheading}</h2>}
        {item.title && <h3 className="text-xl font-semibold">{item.title}</h3>}
        {item.description && <p className="text-base">{item.description}</p>}
        {item.note && <p className="text-base italic">{item.note}</p>}
      </div>
    ))}
  </div>
  )
}

export default SectionComponent