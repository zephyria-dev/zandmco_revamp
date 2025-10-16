import React from 'react'

export default function ImageLayer8() {
  return (
    <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

        {/* Left Image Card */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] group cursor-pointer">
          <img
            src="/r8c1.jpg"
            alt="Young girl crafting jewelry"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Center QR Code Card */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] flex flex-col items-center justify-center bg-gray-100 border-2 border-[rgb(239,175,184)] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[rgb(229,155,164)] p-4 sm:p-6">
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src="/zqr.png"
              alt="QR Code for Donation"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-[rgb(239,175,184)] group-hover:scale-110">
              Donate Here
            </p>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] group cursor-pointer">
          <img
            src="/r8c3.jpg"
            alt="Young girl crafting jewelry"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  )
}