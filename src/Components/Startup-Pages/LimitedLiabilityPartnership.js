import React from 'react'
import Proprietorship from './Proprietorship'
import { limitedLiabilityPartnershipContent } from './limitedLiabilityPartnershipContent'

const LimitedLiabilityPartnership = () => {
  return (
    <Proprietorship content={limitedLiabilityPartnershipContent} pricingSection={limitedLiabilityPartnershipContent.PricingSection}/>
  )
}

export default LimitedLiabilityPartnership