const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 py-16 gap-8 bg-white mt-12">
      {/* Left side: Image */}
      <div className="w-full sm:w-1/2">
        <img 
          src="/home.jpg" 
          alt="Hero Image" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right side: Text and Button */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
          Welcome to Expert Assignment Writing
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Get your academic papers written by experts. Reliable, fast, and professional.
        </p>
        <a
          href="#order"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Submit an Order
        </a>
      </div>
    </section>
  );
};

export default Hero;
