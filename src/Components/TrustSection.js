const TrustSection = () => {
  return (
    <section className="bg-[#F8F8F8] pb-12 pt-0 md:pt-12">
      <div className="container mx-auto px-4">
        {/* Use flex-col for mobile and flex-row for larger screens */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left-aligned heading */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-0 text-center md:text-left">
            We earn trust by<br /> working efficiently
          </h2>

          {/* Right-aligned statistics */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <span className="text-3xl font-bold text-gray-800">15+</span>
              <p className="text-gray-600">Years of experience</p>
            </div>
            {/* Vertical line separator for larger screens */}
            <div className="hidden md:block h-12 border-l border-gray-400"></div>
            <div className="text-center md:text-left">
              <span className="text-3xl font-bold text-gray-800">84k</span>
              <p className="text-gray-600">Customers worldwide</p>
            </div>
            {/* Vertical line separator for larger screens */}
            <div className="hidden md:block h-12 border-l border-gray-400"></div>
            <div className="text-center md:text-left">
              <span className="text-3xl font-bold text-gray-800">600+</span>
              <p className="text-gray-600">Projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
