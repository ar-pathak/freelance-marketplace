import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="w-full max-w-full md:max-w-2xl 2xl:max-w-3xl relative group animate-fade-in-up">
            {/* Decorative elements - hidden on smallest screens */}
            <div className="absolute -top-6 -left-6 w-12 h-12 2xl:w-16 2xl:h-16 2xl:-top-8 2xl:-left-8 bg-blue-500/15 rounded-full blur-lg hidden sm:block"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 2xl:w-20 2xl:h-20 2xl:-bottom-8 2xl:-right-8 bg-emerald-500/15 rounded-full blur-xl hidden sm:block"></div>
            
            <label htmlFor="service-search" className="sr-only">
                Search for services
            </label>
            <div className="relative shadow-lg shadow-black/20 rounded-full">
                <input 
                    id="service-search"
                    name="service-search"
                    type="search" 
                    placeholder='Search for any service...' 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 2xl:px-8 2xl:py-5 text-base sm:text-lg 2xl:text-xl rounded-full border-2 border-white/25 
                            focus:border-emerald-400/80 focus:ring-2 focus:ring-emerald-400/30 
                            bg-white/15 backdrop-blur-md text-white placeholder-white/70
                            transition-all duration-300 group-hover:bg-white/20 font-sans
                            shadow-inner"
                    aria-label="Search for services"
                    autoComplete="off"
                />
                <button 
                    type="button"
                    aria-label="Search"
                    className="absolute right-3 sm:right-4 2xl:right-6 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 2xl:p-3 rounded-full bg-emerald-500 
                            hover:bg-emerald-600 text-white transition-colors duration-200
                            shadow-md"
                >
                    <IoSearch className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7" />
                </button>
            </div>
            
            {/* Popular search tags - hidden on smallest screens */}
            <div className="absolute -bottom-8 sm:-bottom-10 2xl:-bottom-12 left-0 flex gap-2 sm:gap-3 2xl:gap-4 text-xs sm:text-sm 2xl:text-base text-white/70 overflow-x-auto max-w-full pb-1 sm:pb-0">
                <span className="hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap font-medium">Web Design</span>
                <span className="hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap font-medium">Development</span>
                <span className="hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap hidden sm:inline font-medium">Marketing</span>
                <span className="hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap hidden lg:inline font-medium">UI/UX Design</span>
            </div>
        </div>
    );
};

export default SearchBar; 