import React from 'react';
import { IoArrowForward, IoCode, IoColorPalette, IoVideocam, IoHome } from "react-icons/io5";

const services = [
    { name: 'website development', icon: IoCode, color: 'emerald' },
    { name: 'logo design', icon: IoColorPalette, color: 'blue' },
    { name: 'video editing', icon: IoVideocam, color: 'indigo' },
    { name: 'architecture & design', icon: IoHome, color: 'violet' }
];

const ServiceLinks = () => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6 w-full animate-fade-in-up">
            {services.map((service, index) => {
                // Apply staggered animation delay
                const delay = `${0.1 + index * 0.1}s`;
                const Icon = service.icon;
                
                return (
                    <a 
                        key={index}
                        href="#" 
                        className={`group flex items-center gap-2 sm:gap-3 2xl:gap-4 p-2.5 sm:p-4 2xl:p-5 rounded-xl hover:bg-white/15 
                                backdrop-blur-sm transition-all duration-300 hover:scale-105
                                border border-white/10 hover:border-${service.color}-400/40 font-sans
                                focus:outline-none focus:ring-2 focus:ring-${service.color}-500/50
                                focus:ring-offset-2 focus:ring-offset-black/50 
                                shadow-sm hover:shadow-lg hover:shadow-${service.color}-900/10
                                animate-fade-in-up text-sm sm:text-base 2xl:text-lg`}
                        style={{ animationDelay: delay }}
                    >
                        <div className={`p-1.5 sm:p-2 2xl:p-3 rounded-lg bg-${service.color}-500/15 text-${service.color}-300 
                                       group-hover:bg-${service.color}-500/30 transition-colors duration-300 shadow-inner`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
                        </div>
                        <p className={`text-white/90 group-hover:text-${service.color}-300 
                                    transition-colors duration-300 font-medium truncate`}>
                            {service.name}
                        </p>
                        <div className={`ml-auto p-1 rounded-full group-hover:bg-${service.color}-500/30 
                                      transition-all duration-300 flex-shrink-0`}>
                            <IoArrowForward className={`w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-white/60 group-hover:text-${service.color}-300
                                                 group-hover:translate-x-1 transition-all duration-300`} />
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default ServiceLinks; 