import React from 'react';
import { GoogleLogo, MetaLogo, PgLogo, NetflixLogo, PaypalLogo, PayoneerLogo } from '../svg';

const logos = [GoogleLogo, MetaLogo, PgLogo, NetflixLogo, PaypalLogo, PayoneerLogo];

const TrustedBy = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 2xl:gap-8 mt-4 sm:mt-8 2xl:mt-10 animate-fade-in-up'>
            <p className="text-white/80 font-medium text-sm sm:text-base md:text-lg 2xl:text-xl font-sans whitespace-nowrap">Trusted by:</p>
            <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 md:gap-8 2xl:gap-10 opacity-80 hover:opacity-100 transition-opacity duration-300 overflow-hidden max-w-full'>
                {logos.map((Logo, index) => {
                    // Only show first 4 logos on smaller screens
                    if (index > 3) {
                        return (
                            <div key={index} 
                                className="hidden md:block transform hover:scale-110 transition-all duration-300 
                                         hover:drop-shadow-lg hover:drop-shadow-white/20 flex-shrink-0">
                                <Logo className="h-6 sm:h-8 2xl:h-10 w-auto" />
                            </div>
                        );
                    }
                    
                    return (
                        <div key={index} 
                            className="transform hover:scale-110 transition-all duration-300 
                                     hover:drop-shadow-lg hover:drop-shadow-white/20 flex-shrink-0">
                            <Logo className="h-6 sm:h-8 2xl:h-10 w-auto" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrustedBy; 