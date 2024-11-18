import React from 'react'
import Proprietorship from './Proprietorship'
import { indianSubsidiaryContent } from './indianSubsidiaryContent'

const IndianSubsidiary = () => {
  return (
   <Proprietorship content={indianSubsidiaryContent} pricingSection={indianSubsidiaryContent.PricingSection} />
  )
}

export default IndianSubsidiary