import React from 'react'
import Proprietorship from './Proprietorship'
import { trustRegistrationContent } from './trustRegistrationContent'

const TrustRegistration = () => {
  return (
    <Proprietorship content={trustRegistrationContent} pricingSection={trustRegistrationContent.PricingSection} />
  )
}

export default TrustRegistration