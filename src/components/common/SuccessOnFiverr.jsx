import React from 'react'

const SuccessOnFiverr = () => {
    return (
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-12">
                    <div className="w-full lg:w-5/12 mb-8 sm:mb-10 lg:mb-0 order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-16 sm:w-20 h-16 sm:h-20 bg-green-500/10 rounded-full blur-xl hidden sm:block"></div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight relative">
                                <span className="relative inline-block">
                                    <span className="absolute -bottom-2 left-0 w-full h-1 transform -skew-x-12"></span>
                                    <span className="relative">What success</span>
                                </span> on Fiverr looks like
                            </h2>
                            <div className="w-16 sm:w-20 h-1 bg-green-500 mb-4 sm:mb-6"></div>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                Vontélle Eyewear turns to Fiverr freelancers to bring their vision to life.
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-7/12 relative order-1 lg:order-2">
                        <div className="aspect-video overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-xl relative">
                            <video 
                                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
                                className="w-full h-full object-cover"
                                controls
                                preload="metadata"
                                poster="/success-story-thumbnail.jpg"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-green-500/20 rounded-full blur-xl opacity-70 z-0"></div>
                        <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-xl opacity-70 z-0 hidden sm:block"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessOnFiverr