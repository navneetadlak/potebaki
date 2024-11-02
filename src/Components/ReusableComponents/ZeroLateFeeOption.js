import React from 'react'
     {/* zero late fee platform option */}

const ZeroLateFeeOption = () => {
  return (
     <div class="flex justify-center items-center lg:flex-row  py-4">
     <div class="max-w-4xl mx-auto">
       <div class="text-center mb-8">
         <h1 class="text-2xl font-bold mb-4">Zero Late Fee Platform</h1>
         <p class="text-gray-700">
           Many small businesses pay lakhs in penalty every year to the
           Government for late filing various statutory returns. Such penalty
           or late fee paid is not tax deductible and is a drain on
           profitability. At IndiaFilings, our mission is to provide the most
           affordable services to our customers and help them avoid all late
           fee. To achieve our mission - we have built enterprise grade
           technology to help you proactively know the upcoming compliance
           and avoid penalty. Checkout our compliance services below, talk to
           an Advisor and stop paying unwanted late fees.
         </p>
       </div>
       <div class="flex flex-col md:flex-row justify-between items-start">
         <div class="w-full md:w-2/3 mb-4 md:mb-0">
           <div class="bg-white shadow-md rounded-lg">
             <a
               href="#"
               class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
             >
               <span class="text-blue-600">
                 Manage Compliance for Proprietorship
               </span>
               <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                 From Rs. 2899
               </span>
             </a>
             <a
               href="#"
               class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
             >
               <span class="text-blue-600">
                 Manage Compliance for Partnership
               </span>
               <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                 From Rs. 15899
               </span>
             </a>
             <a
               href="#"
               class="flex justify-between items-center p-4 border-b hover:bg-gray-100"
             >
               <span class="text-blue-600">
                 Manage Compliance for Limited Liability Partnership
               </span>
               <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                 From Rs. 9899
               </span>
             </a>
             <a
               href="#"
               class="flex justify-between items-center p-4 hover:bg-gray-100"
             >
               <span class="text-blue-600">
                 Manage Compliance for Private Limited Company
               </span>
               <span class="bg-blue-600 text-white px-3 py-1 rounded-full">
                 From Rs. 19899
               </span>
             </a>
           </div>
         </div>
         <div class="w-full md:w-1/3 flex justify-center md:ml-8 md:justify-end">
           <img
             src="https://placehold.co/300x300"
             alt="Promotional image with text 'Save Money, Zero Late Fee, Know More'"
             class="rounded-lg shadow-md"
           />
         </div>
       </div>
     </div>
   </div>
  )
}

export default ZeroLateFeeOption