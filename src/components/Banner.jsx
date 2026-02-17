import React from 'react'

const Banner = () => {
  return (
    <section className="bg-[#F3F4F6] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="font-Plus font-bold 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       leading-tight md:leading-[1.2] text-gray-900">
          Unleash Your Creativity <br />
          to Utmost{" "}
          <span className="text-primary">Potential</span> with Us
        </h1>

        <p className="mt-6 text-gray-500 
                      text-base sm:text-lg md:text-xl 
                      leading-relaxed font-Libre">
          Discover the building blocks of your next masterpiece:
          premium digital assets at your fingertips.
        </p>

      </div>
    </section>
  )
}

export default Banner
