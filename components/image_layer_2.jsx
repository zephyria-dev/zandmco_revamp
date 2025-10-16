import React, { useState } from "react";
import DonateModal from "./DonateModal"; // make sure this path matches your file

export default function ImageLayer2() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Global Donate Modal (renders over everything) */}
            <DonateModal show={showModal} onClose={() => setShowModal(false)} />

            <div className="w-full px-4 md:px-8 pt-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-2xl shadow-gray-100">

                    <div className="bg-[rgb(245,238,235)] rounded-2xl p-8 flex flex-col justify-center cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                            Zara founded Z & M Co. in 2023 with a vision to combine her passion for jewelry design with her commitment to social impact. Each piece is carefully crafted by hand, ensuring both beauty and quality.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                            Our mission extends beyond creating beautiful earrings - we're building a community of conscious consumers who believe in the power of education to transform lives.
                        </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
                        <img
                            src="/donate.jpg"
                            alt="Young girl crafting jewelry"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="absolute top-1/2 right-1 -translate-y-1/2 flex justify-end items-center">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-[rgb(239,175,184)] backdrop-blur-sm py-4 px-8 ml-70 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                            >
                                <p className="text-white text-xl lg:text-base md:text-sm font-bold tracking-wide uppercase">
                                    Donate
                                </p>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border-2 border-[rgb(239,175,184)] flex flex-col justify-center cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[rgb(229,155,164)]">
                        <div className="text-[rgb(239,175,184)] text-5xl font-bold mb-6 text-center group-hover:scale-110 transition-transform duration-300">$0</div>

                        <div className="mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <h3 className="text-gray-900 text-2xl font-bold mb-2">2023</h3>
                            <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                                Raised $2,500 for women's education scholarships
                            </p>
                        </div>

                        <div className="group-hover:translate-x-1 transition-transform duration-300">
                            <h3 className="text-gray-900 text-2xl font-bold mb-2">2024</h3>
                            <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                                Goal: $5,000 for educational programs
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
