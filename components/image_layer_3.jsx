import React from 'react'

export default function ImageLayer3() {
    return (
        <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

                {/* Media Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/media.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:right-2 sm:left-auto sm:translate-x-0 flex justify-center sm:justify-end items-center w-full sm:w-auto px-4 sm:px-0">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-6 sm:py-4 sm:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm">
                            <p className="text-white text-base sm:text-lg md:text-base font-bold tracking-wide uppercase">
                                Media
                            </p>
                        </button>
                    </div>
                </div>

                {/* Second Image Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/r3c2.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Third Image Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/r3c3.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    )
}