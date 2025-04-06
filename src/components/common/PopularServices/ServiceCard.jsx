import React from 'react'

const ServiceCard = ({ service, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-500 cursor-pointer relative group hover:-translate-y-2 hover:shadow-2xl"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <div className="p-6 sm:p-8 flex flex-col items-center justify-between h-full relative z-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner relative">
                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="text-center space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                        {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {service.description}
                    </p>
                    <button className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:shadow-lg hover:from-blue-600 hover:to-purple-600">
                        Learn More
                        <svg className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0 shadow-md">
                Popular
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    )
}

export default ServiceCard 