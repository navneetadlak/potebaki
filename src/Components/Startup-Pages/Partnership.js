import React from 'react'
import Proprietorship from './Proprietorship'
import { partnershipContent } from './partnershipContent'

const Partnership = () => {

  return( <Proprietorship content={partnershipContent} pricingSection={partnershipContent.PricingSection} /> )
}

export default Partnership