import React from 'react'
import Proprietorship from './Proprietorship'
import { producerCompanyContent } from './producerCompanyContent'

const ProducerCompany = () => {
  return (
    <Proprietorship content={producerCompanyContent} pricingSection={producerCompanyContent.PricingSection} />
  )
}

export default ProducerCompany