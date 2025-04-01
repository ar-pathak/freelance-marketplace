import React from 'react'

const ServiceCard = ({ service, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 cursor-pointer relative group hover:-translate-y-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between h-full relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-inner relative">
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {service.description}
                    </p>
                    <button className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:shadow-lg">
                        Learn More
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 rounded-full text-[10px] sm:text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                Popular
            </div>
        </div>
    )
}

export default ServiceCard 