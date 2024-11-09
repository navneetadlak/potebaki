import React from 'react'
import Proprietorship from './Proprietorship'
import { onePersonCompanyContent } from './onePersonCompanyContent'

const OnePersonCompany = () => {
  return <Proprietorship content={onePersonCompanyContent} pricingSection={onePersonCompanyContent.PricingSection}/>
}

export default OnePersonCompany