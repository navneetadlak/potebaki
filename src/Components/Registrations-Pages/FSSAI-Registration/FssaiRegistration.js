import Proprietorship from '../../Startup-Pages/Proprietorship'
import React from 'react'
import { fssaiRegistrationContent } from './fssaiRegistrationContent'

const FssaiRegistration = () => {
  return (
    <Proprietorship content={fssaiRegistrationContent} pricingSection={fssaiRegistrationContent.PricingSection}/>
  )
}

export default FssaiRegistration