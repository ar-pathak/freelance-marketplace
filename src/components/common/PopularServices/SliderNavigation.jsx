import React from 'react'

const SliderNavigation = ({ onPrev, onNext, showDots, currentIndex, totalSlides, onDotClick }) => {
    return (
        <>
            {/* Navigation Buttons */}
            <button 
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-500 z-10 -ml-6 sm:-ml-8 hidden md:block group"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-500 z-10 -mr-6 sm:-mr-8 hidden md:block group"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination Dots */}
            {showDots && (
                <div className="flex justify-center mt-10 sm:mt-12 gap-3 sm:gap-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotClick(index)}
                            className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                                currentIndex === index 
                                    ? 'w-8 sm:w-10 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30' 
                                    : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Mobile swipe indicator */}
            <div className="md:hidden flex items-center justify-center mt-6 text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Swipe to navigate
                <svg className="w-5 h-5 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </>
    )
}

export default SliderNavigation 