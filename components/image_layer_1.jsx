import React from 'react'

export default function ImageLayer1() {
    return (
        <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
               
                <div className="md:col-span-4 relative group overflow-hidden rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/meet.jpg"
                        alt="Meet the Founder: Zara"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 right-2 sm:right-1 -translate-y-1/2 flex justify-end items-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 md:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm">
                            <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase leading-tight">
                                Meet the Founder: Zara
                            </p>
                        </button>
                    </div>
                </div>

                <div className="md:col-span-8 relative group overflow-hidden rounded-2xl h-[250px] sm:h-[280px] md:h-[300px] cursor-pointer">
                    <img
                        src="/allpeople.jpg"
                        alt="Community Event"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    );
}