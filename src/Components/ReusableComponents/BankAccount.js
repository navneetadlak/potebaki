import React from 'react'

const BankAccount = ({ bankAccountData }) => {
  return (
    <>
    <h2 className="text-xl font-semibold mb-2">{bankAccountData.title}</h2>
          <p className="mb-4">{bankAccountData.description}</p>
          <ul className="list-disc list-inside mb-4">
            {bankAccountData.documents.map((document, index) => (
              <li>{document}</li>
            ))}
          </ul>
    </>
  )
}

export default BankAccount