import React from 'react'

export default function ImageLayer1() {
    return (
        <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Left Image - Zara (Takes 4 columns) */}
                <div className="md:col-span-4 relative group overflow-hidden rounded-2xl h-[300px]">
                    <img
                        src="/meet.jpg"
                        alt="Meet the Founder: Zara"
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <div className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 ml-28 opacity-90">
                            <p className="text-white text-xl lg:text-[12px] md:text-base font-bold tracking-wide uppercase">
                                Meet the Founder: Zara
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image - Team/Community (Takes 8 columns) */}
                <div className="md:col-span-8 relative group overflow-hidden rounded-2xl h-[300px]">
                    <img
                        src="/allpeople.jpg"
                        alt="Community Event"
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0" />
                </div>
            </div>
        </div>
    );
}