import React from 'react';

const HeroContent = () => {
    return (
        <div className="space-y-4 md:space-y-6 2xl:space-y-8 w-full">
            <div className="relative">
                <span className="absolute -top-2 -left-2 w-12 md:w-20 2xl:w-28 h-12 md:h-20 2xl:h-28 bg-emerald-500/20 rounded-full blur-xl hidden sm:block"></span>
                <span className="absolute -top-1 -left-4 w-2 h-2 2xl:w-3 2xl:h-3 bg-emerald-400 rounded-full animate-pulse hidden sm:block"></span>
                <span className="absolute top-1/2 -right-4 w-3 h-3 2xl:w-4 2xl:h-4 bg-blue-400 rounded-full animate-pulse hidden sm:block"></span>
                
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white leading-tight font-sans animate-fade-in-up drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
                    Our freelancers
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
                        will take it from here
                    </span>
                </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 max-w-2xl 2xl:max-w-3xl font-sans animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                Find the perfect freelancer for your project. From web development to creative design, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-3 2xl:gap-4 pt-2 2xl:pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <span className="inline-flex items-center px-3 py-1 2xl:px-4 2xl:py-2 rounded-full text-xs sm:text-sm 2xl:text-base font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm">
                    #Verified Experts
                </span>
                <span className="inline-flex items-center px-3 py-1 2xl:px-4 2xl:py-2 rounded-full text-xs sm:text-sm 2xl:text-base font-medium bg-blue-500/15 text-blue-300 border border-blue-500/30 shadow-sm">
                    #Secure Payments
                </span>
            </div>
        </div>
    );
};

export default HeroContent; 