import React from 'react'
import { tradeLicenseContent } from './tradeLicenseContent'
import Proprietorship from '../../Startup-Pages/Proprietorship'

const TradeLicense = () => {
  return (
    <Proprietorship content={tradeLicenseContent} pricingSection={tradeLicenseContent.PricingSection} />
)
}

export default TradeLicense