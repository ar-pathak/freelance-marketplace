import React from 'react'

const SliderNavigation = ({ onPrev, onNext, showDots, currentIndex, totalSlides, onDotClick }) => {
    return (
        <>
            {/* Navigation Buttons */}
            <button 
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 z-10 -ml-4 sm:-ml-6 hidden md:block group"
                aria-label="Previous slide"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 z-10 -mr-4 sm:-mr-6 hidden md:block group"
                aria-label="Next slide"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination Dots */}
            {showDots && (
                <div className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-3">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotClick(index)}
                            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                currentIndex === index 
                                    ? 'w-6 sm:w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                                    : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default SliderNavigation 