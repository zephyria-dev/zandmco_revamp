import React from 'react'

export default function ImageLayer4() {
    return (
        <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
                
                {/* Left Image - Community Event (Takes 8 columns on desktop) */}
                <div className="md:col-span-8 relative group overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/r4c12.jpg"
                        alt="Community Event"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Right Image - Shop (Takes 4 columns on desktop) */}
                <div className="md:col-span-4 relative group overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/shop.jpg"
                        alt="Shop"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:right-2 sm:left-auto sm:translate-x-0 flex justify-center sm:justify-end items-center w-full sm:w-auto px-4 sm:px-0">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-6 sm:py-4 sm:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm">
                            <p className="text-white text-base sm:text-lg md:text-base font-bold tracking-wide uppercase">
                                Shop
                            </p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}