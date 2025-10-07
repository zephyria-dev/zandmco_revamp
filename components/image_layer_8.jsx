import React from 'react'

export default function ImageLayer8() {
  return (
    <div className="w-full px-4 md:px-8 pt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-2xl shadow-gray-100">

        <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
          <img
            src="/r8c1.jpg"
            alt="Young girl crafting jewelry"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

        </div>

        <div className="relative rounded-2xl overflow-hidden h-[400px] flex flex-col items-center justify-center bg-gray-100 border-2 border-[rgb(239,175,184)] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[rgb(229,155,164)]">
          <img
            src="/zqr.png"
            alt="Young girl crafting jewelry"
            className="w-full h-50 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-80 left-0 right-0 text-center">
            <p className="text-lg font-semibold text-gray-800 inline-block px-4 py-2 rounded-lg transition-all duration-300 group-hover:text-[rgb(239,175,184)] group-hover:scale-110">
              Donate Here
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
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