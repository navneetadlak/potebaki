const TrustSection = () => {
    return (
      <section className="bg-[#F8F8F8] pb-12 pt-0 md:pt-12">
<div className="container mx-auto px-4">
{/* Use flex to position heading on the left and statistics on the right */}
<div className="flex justify-evenly items-center">
  {/* Left-aligned heading */}
  <h2 className="text-5xl font-semibold text-gray-800 mb-0">
    We earn trust by<br/> working efficiently
  </h2>
  {/* Right-aligned statistics */}
  <div className="flex items-center space-x-8">
    <div>
      <span className="text-3xl font-bold text-gray-800">15+</span>
      <p className="text-gray-600">Years of experience</p>
    </div>
    {/* Vertical line separator */}
    <div className="h-12 border-l border-gray-400"></div>
    <div>
      <span className="text-3xl font-bold text-gray-800">84k</span>
      <p className="text-gray-600">Customers worldwide</p>
    </div>
    {/* Vertical line separator */}
    <div className="h-12 border-l border-gray-400"></div>
    <div>
      <span className="text-3xl font-bold text-gray-800">600+</span>
      <p className="text-gray-600">Projects completed</p>
    </div>
  </div>
</div>
</div>
</section>
    )
  }

  export default TrustSection;
