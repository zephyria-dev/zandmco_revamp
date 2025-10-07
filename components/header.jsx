import React from 'react'

export default function Header() {
    return (
      <div className="pt-14 pb-6 px-8 text-center">
        <p className="lg:text-7xl md:text-8xl font-serif mb-10 tracking-tight text-black">
          Z & M Co.
        </p>
        <p className="lg:text-base md:text-2xl font-semibold tracking-[0.3em] uppercase text-black">
          Earrings by Zara
        </p>
        <p className="pt-8 lg:text-[15px] md:text-base max-w-5xl mx-auto leading-relaxed text-black font-light">
        We are a social enterprise that creates beautiful, handmade earrings to support women's education in developing countries. Every purchase helps fund scholarships and educational programs.
        </p>
      </div>
    );
  }