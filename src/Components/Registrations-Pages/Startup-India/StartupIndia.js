import Proprietorship from '../../Startup-Pages/Proprietorship'
import React from 'react'
import { startupIndiaContent } from './startupIndiaContent';

const StartupIndia = () => {
  return (
    <Proprietorship content={startupIndiaContent} pricingSection={startupIndiaContent.PricingSection} />
  )
}

export default StartupIndia;