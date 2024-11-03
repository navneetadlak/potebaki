import React from 'react'
import Proprietorship from './Proprietorship'
import { partnershipContent } from './partnershipContent'

const Partnership = () => {
  const partnershipPricingSection = {
    // Custom pricing details for Partnership
    title: "Partnership",
    customerRating: {
      rating: 4.7,
      count: 8533,
    },
    description: "Easily set up a sole proprietorship online with GST registration.",
    documentTitle: "Documents Required",
    documents: ["PAN Card", "Aadhaar Card"],
    products: [
      {
        title: "GST Registration",
        price: "INR 2899",
        offers: ["GST Application Submission", "GST Application Tracking", "GST Registration certificate", "Bank Account Opening"],
        allInclusive: true,
      },
      {
        title: "Trademark",
        price: "INR 6988",
        offers: ["Trademark Filing", "1 Trademark Class", "Individuals & MSMEs"],
        allInclusive: true,
      }
    ]
  };

  return( <Proprietorship content={partnershipContent} pricingSection={partnershipPricingSection} /> )
}

export default Partnership