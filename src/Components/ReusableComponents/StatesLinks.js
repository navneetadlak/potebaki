import React from 'react'

const StatesLinks = () => {
    const states = [
        { name: "Maharashtra", link: "https://example.com/maharashtra" },
        { name: "Karnataka", link: "https://example.com/karnataka" },
        { name: "Tamil Nadu", link: "https://example.com/tamil-nadu" },
        { name: "Gujarat", link: "https://example.com/gujarat" },
        { name: "Uttar Pradesh", link: "https://example.com/uttar-pradesh" },
        { name: "Rajasthan", link: "https://example.com/rajasthan" },
        { name: "Punjab", link: "https://example.com/punjab" },
        { name: "Madhya Pradesh", link: "https://example.com/madhya-pradesh" },
        { name: "Odisha", link: "https://example.com/odisha" },
        { name: "Chandigarh", link: "https://example.com/chandigarh" },
        { name: "Uttarakhand", link: "https://example.com/uttarakhand" },
        { name: "Jharkhand", link: "https://example.com/jharkhand" },
        { name: "Chhattisgarh", link: "https://example.com/chhattisgarh" },
        { name: "Haryana", link: "https://example.com/haryana" },
        { name: "Andhra Pradesh", link: "https://example.com/andhra-pradesh" },
        { name: "Assam", link: "https://example.com/assam" },
        { name: "Jammu And Kashmir", link: "https://example.com/jammu-and-kashmir" },
        { name: "Delhi", link: "https://example.com/delhi" },
        { name: "Telangana", link: "https://example.com/telangana" },
        { name: "West Bengal", link: "https://example.com/west-bengal" },
        { name: "Kerala", link: "https://example.com/kerala" },
        { name: "Goa", link: "https://example.com/goa" },
        { name: "Bihar", link: "https://example.com/bihar" },
        { name: "Puducherry", link: "https://example.com/puducherry" },
        { name: "Himachal Pradesh", link: "https://example.com/himachal-pradesh" },
        { name: "Arunachal Pradesh", link: "https://example.com/arunachal-pradesh" },
        { name: "Manipur", link: "https://example.com/manipur" },
        { name: "Meghalaya", link: "https://example.com/meghalaya" },
        { name: "Mizoram", link: "https://example.com/mizoram" },
        { name: "Nagaland", link: "https://example.com/nagaland" },
        { name: "Sikkim", link: "https://example.com/sikkim" },
        { name: "Tripura", link: "https://example.com/tripura" },
        { name: "Lakshadweep", link: "https://example.com/lakshadweep" }
    ];

  return (
    <div className="container mx-auto p-4 lg:px-32 justify-evenly">
    <h1 className="text-3xl font-semi-bold text-center my-8">Proprietorship Registration in State</h1>
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {states.map((state, index) => (
            <div key={index} className="flex items-center">
                <i className="fas fa-chevron-right text-blue-500 mr-2"></i>
                <a href={state.link} className="text-blue-500 text-sm hover:underline">Proprietorship Registration In {state.name}</a>
            </div>
        ))}
    </div>
    <div className="flex justify-center mt-4">
        <button className="px-4 py-2 border border-blue-500 text-[#488FCD] hover:bg-[#488FCD] rounded hover:text-white">LOAD LESS STATES</button>
    </div>
</div>
  )
}

export default StatesLinks