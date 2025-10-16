import React from 'react'

export default function ImageLayer5() {
    return (
        <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
               
                {/* Left Image - Bag (Takes 4 columns on desktop) */}
                <div className="md:col-span-4 relative group overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/bag.jpg"
                        alt="Handmade Bag"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Right Image - Girls (Takes 8 columns on desktop) */}
                <div className="md:col-span-8 relative group overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/girls.jpg"
                        alt="Community Event"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    )
}