import React, { useState, useEffect } from 'react';
import { guides } from './data';
import GuideCard from './GuideCard';
import SliderNavigation from './SliderNavigation';
import useSlider from './hook/useSlider';

const GuidesToHelpYouGrow = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Update slidesPerView based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // mobile
                setSlidesPerView(1);
            } else if (window.innerWidth < 768) { // small tablet
                setSlidesPerView(2);
            } else if (window.innerWidth < 1024) { // tablet
                setSlidesPerView(2);
            } else { // desktop
                setSlidesPerView(3);
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {
        currentIndex,
        isDragging,
        touchStart,
        touchEnd,
        nextSlide,
        prevSlide,
        goToSlide,
        onTouchStart,
        onTouchMove,
        onTouchEnd
    } = useSlider(guides.length, slidesPerView, setSlidesPerView);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000 hidden sm:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 relative inline-block">
                        <span className="relative inline-block">
                            Guides to help you grow
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></span>
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Discover resources to expand your business and skills
                    </p>
                </div>

                <div className="relative">
                    {/* Slider container */}
                    <div
                        className="overflow-hidden rounded-xl shadow-lg touch-pan-y mx-4 sm:mx-6 md:mx-8"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className={`flex transition-transform duration-700 pb-4 ${isDragging ? 'ease-out' : 'ease-in-out'}`}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                                ...(touchStart && touchEnd ? {
                                    transform: `translateX(calc(-${currentIndex * (100 / slidesPerView)}% + ${touchEnd - touchStart}px))`
                                } : {})
                            }}
                        >
                            {guides.map((guide, index) => (
                                <div
                                    key={guide.id}
                                    className="flex-shrink-0 w-full px-2 sm:px-3 transition-all duration-500 h-full"
                                    style={{ width: `${100 / slidesPerView}%` }}
                                >
                                    <div className="h-full">
                                        <GuideCard
                                            guide={guide}
                                            isHovered={hoveredIndex === index}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SliderNavigation
                        onPrevClick={prevSlide}
                        onNextClick={nextSlide}
                        currentIndex={currentIndex}
                        totalSlides={guides.length}
                        slidesPerView={slidesPerView}
                        onIndicatorClick={goToSlide}
                    />
                </div>
            </div>
        </section>
    );
};

export default GuidesToHelpYouGrow;