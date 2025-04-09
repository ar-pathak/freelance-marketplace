import React from 'react'

const SuccessOnFiverr = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-12">
                    <div className="w-full lg:w-5/12 mb-8 sm:mb-10 lg:mb-0 order-2 lg:order-1 animate-fade-in-left">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-16 sm:w-20 h-16 sm:h-20 bg-green-500/10 rounded-full blur-xl hidden sm:block"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight relative">
                                <span className="relative inline-block">
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 transform -skew-x-12"></span>
                                    <span className="relative">What success</span>
                                </span> on Fiverr looks like
                            </h2>
                            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-green-500 to-green-400 mb-6 sm:mb-8 rounded-full"></div>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl">
                                Vontélle Eyewear turns to Fiverr freelancers to bring their vision to life.
                            </p>
                            <div className="mt-8 sm:mt-10">
                                <a href="#" className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-base font-medium rounded-full shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                                    Learn more 
                                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-7/12 relative order-1 lg:order-2 animate-fade-in-right">
                        <div className="aspect-video overflow-hidden rounded-xl shadow-2xl relative group transform hover:-translate-y-1 transition-all duration-300 hover:shadow-green-200/30">
                            <video 
                                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
                                className="w-full h-full object-cover"
                                controls
                                preload="metadata"
                                poster="/success-story-thumbnail.jpg"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                                    <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/20 rounded-full blur-xl opacity-70 z-0"></div>
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl opacity-70 z-0 hidden sm:block"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessOnFiverr