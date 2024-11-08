import React from 'react'

const OnlineRegistration = ({ onlineRegistrationData }) => {
 if (!onlineRegistrationData) return null;

    return (
    <>
      <h1 className="text-2xl font-semibold mb-4">
            {onlineRegistrationData.title}
          </h1>
          <p className="mb-4">
          {onlineRegistrationData.description}
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>{onlineRegistrationData.registrations[0]}</li>
            <li>
            {onlineRegistrationData.registrations[1]}
            </li>
          </ul>
          <p className="mb-4">
            {onlineRegistrationData.para}
          </p>

          <ol className="list-decimal list-inside mb-4">
      {onlineRegistrationData.instructions.map((instruction, index) => (
        <li key={index}>
          {instruction.includes("LEDGERS") ? (
            <>
              {instruction.split("LEDGERS")[0]}
              <a href="#" className="text-blue-600">LEDGERS</a>
              {instruction.split("LEDGERS")[1]}
            </>
          ) : (
            instruction
          )}
        </li>
      ))}
    </ol>
    </>
  )
}

export default OnlineRegistration