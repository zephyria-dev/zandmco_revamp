import React from 'react'

export default function ImageLayer3() {
    return (
        <div className="w-full px-4 md:px-8 pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-2xl shadow-gray-100">

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                    <img
                        src="/media.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 right-1 -translate-y-1/2 flex justify-end items-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 ml-70 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer">
                            <p className="text-white text-xl lg:text-base md:text-sm font-bold tracking-wide uppercase">
                                Media
                            </p>
                        </button>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                    <img
                        src="/r3c2.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
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