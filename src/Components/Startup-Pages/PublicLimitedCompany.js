import React from 'react'
import Proprietorship from './Proprietorship'
import { publicLimitedCompanyContent } from './publicLimitedCompanyContent'

const PublicLimitedCompany = () => {
  return (
   <Proprietorship content={publicLimitedCompanyContent} pricingSection={publicLimitedCompanyContent.PricingSection} />
  )
}

export default PublicLimitedCompany