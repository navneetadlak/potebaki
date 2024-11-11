import React from 'react'
import Proprietorship from './Proprietorship'
import { PrivateLimitedContent } from './PrivateLimitedContent'

const PrivateLimitedCompany = () => {
   return( <Proprietorship content={PrivateLimitedContent} pricingSection={PrivateLimitedContent.PricingSection} /> )
}

export default PrivateLimitedCompany