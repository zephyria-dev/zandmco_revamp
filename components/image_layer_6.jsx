import React from 'react'

export default function ImageLayer6() {
    return (
        <div className="w-full px-4 md:px-8 pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-2xl shadow-gray-100">

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                    <img
                        src="/2023team.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer">
                            <p className="text-white text-xl lg:text-base md:text-sm font-bold tracking-wide uppercase">
                                2023 Team2023 - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                    <img
                        src="/2024team.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer">
                            <p className="text-white text-xl lg:text-base md:text-sm font-bold tracking-wide uppercase">
                                2024 Team2024 - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                    <img
                        src="/2025team.jpg"
                        alt="Young girl crafting jewelry"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer">
                            <p className="text-white text-xl lg:text-base md:text-sm font-bold tracking-wide uppercase">
                                2025 Team2025 - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}