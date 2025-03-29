import React from 'react';
import VideoPlayer from './BackgroundVideo';
import HeroContent from './HeroContent';
import SearchBar from './SearchBar';
import ServiceLinks from './ServiceLinks';
import TrustedBy from './TrustedBy';

const Jumbotron = () => {
    return (
        <div className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
            {/* Background Video */}
            <VideoPlayer />
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 
                          pointer-events-none mix-blend-multiply animate-gradient" />
            
            {/* Decorative Elements - Hide on small screens */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500/10 rounded-full filter blur-[100px] opacity-60 animate-float hidden sm:block" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full filter blur-[80px] opacity-50 animate-float-delayed hidden sm:block" />
            
            {/* Additional decorative elements for larger screens */}
            <div className="absolute top-1/4 left-1/4 w-1/5 h-1/5 bg-purple-500/10 rounded-full filter blur-[120px] opacity-40 animate-float-delayed hidden xl:block" />

            {/* Content */}
            <div className='relative min-h-[90vh] md:min-h-screen flex flex-col gap-8 md:gap-12 justify-center items-start w-full max-w-[1200px] 2xl:max-w-[1400px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 md:py-20 2xl:py-24'>
                <div className="z-10">
                    <HeroContent />
                </div>
                <div className="z-10 w-full">
                    <SearchBar />
                </div>
                <div className="z-10 w-full">
                    <ServiceLinks />
                </div>
                {/* Hide TrustedBy on small mobile screens */}
                <div className="hidden sm:block w-full z-10">
                    <TrustedBy />
                </div>
                
                {/* Down arrow indicator - Hide on small screens */}
                <div className="absolute left-1/2 bottom-8 -translate-x-1/2 animate-bounce hidden md:block z-10">
                    <svg className="w-8 h-8 text-white/80 2xl:w-10 2xl:h-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron; 