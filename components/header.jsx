import React from 'react'

export default function Header() {
    return (
      <div className="pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8 text-center">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 md:mb-10 tracking-tight text-black">
          Z & M Co.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-black">
          Earrings by Zara
        </p>
        <p className="pt-6 sm:pt-7 md:pt-8 text-sm sm:text-base md:text-[15px] max-w-5xl mx-auto leading-relaxed text-black font-light px-2 sm:px-4">
        We are a social enterprise that creates beautiful, handmade earrings to support women's education in developing countries. Every purchase helps fund scholarships and educational programs.
        </p>
      </div>
    );
  }