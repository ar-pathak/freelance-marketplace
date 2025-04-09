import React from 'react';
import PropTypes from 'prop-types';

const SliderNavigation = ({ 
  onPrevClick, 
  onNextClick, 
  currentIndex, 
  totalSlides, 
  slidesPerView,
  onIndicatorClick
}) => {
  return (
    <>
      {/* Navigation buttons */}
      <button
        onClick={onPrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white hover:shadow-lg focus:outline-none z-10 transition-all duration-300 -ml-5 hidden md:block group"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white hover:shadow-lg focus:outline-none z-10 transition-all duration-300 -mr-5 hidden md:block group"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: totalSlides - slidesPerView + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => onIndicatorClick(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm'
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Mobile swipe indicator */}
      <div className="md:hidden flex items-center justify-center mt-4 text-sm text-gray-500">
        <svg className="w-5 h-5 mr-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Swipe to navigate
        <svg className="w-5 h-5 ml-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </>
  );
};

SliderNavigation.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  slidesPerView: PropTypes.number.isRequired,
  onIndicatorClick: PropTypes.func.isRequired
};

export default SliderNavigation; 