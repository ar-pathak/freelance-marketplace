import React, { useState, useEffect, useCallback } from 'react'
import ServiceCard from './ServiceCard'
import SliderNavigation from './SliderNavigation'
import { services } from '../../../data/services'

const PopularServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(4)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [isDragging, setIsDragging] = useState(false)

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 768) {
                setSlidesPerView(2)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(3)
            } else {
                setSlidesPerView(4)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        let interval
        if (isAutoPlaying && !isDragging) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex + 1 >= services.length - slidesPerView + 1 ? 0 : prevIndex + 1
                )
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [isAutoPlaying, slidesPerView, isDragging])

    // Navigation functions
    const nextSlide = useCallback(() => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => 
            prevIndex + 1 >= services.length - slidesPerView + 1 ? 0 : prevIndex + 1
        )
    }, [services.length, slidesPerView])

    const prevSlide = useCallback(() => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => 
            prevIndex - 1 < 0 ? services.length - slidesPerView : prevIndex - 1
        )
    }, [services.length, slidesPerView])

    const goToSlide = (index) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
    }

    // Touch and keyboard navigation
    const onTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
        setIsDragging(true)
        setIsAutoPlaying(false)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        setIsDragging(false)
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const minSwipeDistance = 50

        if (Math.abs(distance) >= minSwipeDistance) {
            if (distance > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
        }

        setTouchStart(null)
        setTouchEnd(null)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide()
            } else if (e.key === 'ArrowRight') {
                nextSlide()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [nextSlide, prevSlide])

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 relative">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-blue-600 text-sm font-medium mb-4 animate-fade-in-up">
                    Explore Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in-up animation-delay-200">
                    Popular Services
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                    Discover our most sought-after services that help businesses and individuals achieve their goals
                </p>
            </div>
            
            <div className="max-w-7xl mx-auto relative px-2 md:px-4">
                <div 
                    className="overflow-hidden touch-pan-y"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div 
                        className={`flex transition-transform duration-700 ${isDragging ? 'ease-out' : 'ease-in-out'}`}
                        style={{ 
                            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                            ...(touchStart && touchEnd ? {
                                transform: `translateX(calc(-${currentIndex * (100 / slidesPerView)}% + ${touchEnd - touchStart}px))`
                            } : {})
                        }}
                    >
                        {services.map((service, index) => (
                            <div 
                                key={service.id}
                                className={`flex-shrink-0 w-full px-4 transition-all duration-500`}
                                style={{ width: `${100 / slidesPerView}%` }}
                            >
                                <ServiceCard 
                                    service={service}
                                    isHovered={hoveredIndex === index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <SliderNavigation 
                    onPrev={prevSlide}
                    onNext={nextSlide}
                    showDots={true}
                    currentIndex={currentIndex}
                    totalSlides={services.length - slidesPerView + 1}
                    onDotClick={goToSlide}
                />

                {/* Auto-play control */}
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute bottom-0 right-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group"
                    aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
                >
                    {isAutoPlaying ? (
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </button>
            </div>
        </section>
    )
}

export default PopularServices