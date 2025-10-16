import React from 'react'

export default function ImageLayer6() {
    return (
        <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

                {/* 2023 Team Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/2023team.jpg"
                        alt="2023 Team"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6 text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 md:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm w-full max-w-sm mx-auto">
                            <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase leading-tight">
                                2023 Team - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>

                {/* 2024 Team Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/2024team.jpg"
                        alt="2024 Team"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6 text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 md:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm w-full max-w-sm mx-auto">
                            <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase leading-tight">
                                2024 Team - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>

                {/* 2025 Team Card */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer">
                    <img
                        src="/2025team.jpg"
                        alt="2025 Team"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6 text-center">
                        <button className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 md:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm w-full max-w-sm mx-auto">
                            <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase leading-tight">
                                2025 Team - Meet the team and explore the photo gallery
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}