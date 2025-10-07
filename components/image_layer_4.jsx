import React from 'react'

export default function ImageLayer4() {
    return (
        <div className="w-full px-4 md:px-8 pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 rounded-2xl shadow-gray-100">
                {/* Left Image - Zara (Takes 8 columns) */}

                <div className="md:col-span-8 relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer">
                    <img
                        src="/r4c12.jpg"
                        alt="Community Event"
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>


                {/* Right Image - Team/Community (Takes 4 columns) */}

                <div className="md:col-span-4 relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer">
                    <img
                        src="/shop.jpg"
                        alt="Meet the Founder: Zara"
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 right-1 -translate-y-1/2 flex justify-end items-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 ml-44.5 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer">
                            <p className="text-white text-xl lg:text-base md:text-base font-bold tracking-wide uppercase">
                                Shop
                            </p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}