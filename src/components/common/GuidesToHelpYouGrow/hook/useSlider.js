import { useState, useEffect, useCallback } from 'react';

const useSlider = (totalSlides, slidesPerView, setSlidesPerView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSlidesPerView]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides - slidesPerView + 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides, slidesPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalSlides - slidesPerView : prevIndex - 1
    );
  }, [totalSlides, slidesPerView]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Touch and keyboard navigation
  const onTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return {
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
  };
};

export default useSlider; 