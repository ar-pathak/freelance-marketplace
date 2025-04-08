import React, { useState } from 'react'

const data = [
    {
        id: 1,
        name: "3D Industrial Design",
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png"
    },
    {
        id: 2,
        name: "E-commerce Website Development",
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666565/E-commerce-Website-Development_2x.png"
    },
    {
        id: 3,
        name: "Email Marketing",
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png"
    },
    {
        id: 4,
        name: "Press Releases",
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png"
    },
    {
        id: 5,
        name: "Logo Design",
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png"
    }
]

const TrustedServices = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements - adjusted for better mobile display */}
            <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-40 h-40 sm:w-64 sm:h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000 hidden sm:block"></div>
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3000 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 relative inline-block">
                        Vontélle's trusted services
                        <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></span>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 text-sm sm:text-base md:text-lg px-2">
                        Discover our most reliable and professional services that help businesses achieve their goals
                    </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative">
                    {/* Grid background lines - adjusted for mobile */}
                    <div className="absolute inset-0 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-10 sm:opacity-20 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="border border-dashed border-blue-300 rounded-xl"></div>
                        ))}
                    </div>

                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-white backdrop-blur-sm bg-opacity-80 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-3 sm:p-4 md:p-5 cursor-pointer border border-gray-100 hover:border-blue-200 h-full flex flex-col transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden ${hoveredId === item.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Card background gradient that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>

                            {/* Decorative corner accent - hidden on mobile */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 hidden sm:block"></div>

                            <div className="flex flex-col items-center gap-2 sm:gap-3 flex-grow relative z-10">
                                <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg group-hover:bg-blue-100 transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-8 w-auto sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm md:text-base text-center">
                                    {item.name}
                                </h4>

                                {/* Learn more button that appears on hover - hidden on mobile */}
                                <button className="mt-1 sm:mt-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-md hidden sm:block">
                                    Learn More
                                </button>
                            </div>

                            {/* Bottom border that animates on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Decorative dots pattern - hidden on mobile */}
                <div className="absolute right-0 bottom-0 grid grid-cols-6 gap-2 opacity-20 hidden lg:grid">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustedServices