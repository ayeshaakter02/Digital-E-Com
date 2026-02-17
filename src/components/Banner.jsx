import React from "react";

const Banner = () => {
  return (
    <section className="container relative overflow-hidden pt-24 pb-40 px-4 bg-linear-to-t from-[#ffffff] to-[#F0F6FD]
                        ">

      {/* Blur Glow Effect
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 
                      rounded-full mix-blend-multiply filter blur-3xl 
                      opacity-30 animate-pulse"></div>

      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-400 
                      rounded-full mix-blend-multiply filter blur-3xl 
                      opacity-30 animate-pulse"></div> */}

      <div className="max-w-292.5 mx-auto text-center relative z-10">

        <h1 className="font-Plus font-bold 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       leading-tight md:leading-[1.2] text-gray-900">
          Unleash Your Creativity <br />
          to Utmost{" "}
          <span className="text-primary">
            Potential
          </span> with Us
        </h1>

        <p className="mt-5 w-292.5 text-gray-600 
                      text-base sm:text-lg md:text-xl 
                      leading-7.5 font-Libre max-w-2xl mx-auto">
          Discover the building blocks of your next masterpiece:
          premium digital assets at your fingertips.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row 
                        justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Find fonts, templates, illustrations, and more…"
            className="w-full sm:w-105 px-5 py-3 rounded-xl 
                       bg-white/80 backdrop-blur-md 
                       shadow-md outline-none border border-white/50
                       focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-primary 
                             text-white px-6 py-3 rounded-xl font-medium 
                             hover:scale-105 transition duration-300 shadow-lg">
            Search Now
          </button>
        </div>
      </div>

    </section>
  );
};

export default Banner;
