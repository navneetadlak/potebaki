import React from 'react'
import Proprietorship from './Proprietorship'
import { mcaNameApprovalContent } from './mcaNameApprovalContent'

const McaNameApproval = () => {
  return (
    <Proprietorship content={mcaNameApprovalContent} pricingSection={mcaNameApprovalContent.PricingSection} />
  )
}

export default McaNameApproval