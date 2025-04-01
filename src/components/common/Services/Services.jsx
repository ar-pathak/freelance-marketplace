import React, { useState, useEffect } from 'react'
import { AiServices, BusinessThin, ConsultingThin, DigitalMarketingThin, GraphicsDesign, MusicAudioThin, ProgrammingTech, VideoAnimation, WritingTranslation } from './svg'

const ServiceCard = ({ service }) => {
    const { icon, title, color } = service;
    
    return (
        <div className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-3 sm:p-4 cursor-pointer border border-gray-100 hover:border-${color}-100 h-full flex flex-col transform hover:-translate-y-1`}>
            <div className="flex flex-col items-center gap-2 sm:gap-3 flex-grow">
                <div className={`p-2 sm:p-2.5 bg-${color}-50 rounded-lg group-hover:bg-${color}-100 transition-colors duration-300 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transform group-hover:scale-110`}>
                    {icon}
                </div>
                <h3 className={`font-semibold text-gray-900 group-hover:text-${color}-600 transition-colors duration-300 text-xs sm:text-sm text-center`}>
                    {title}
                </h3>
            </div>
        </div>
    );
};

const ViewMoreButton = ({ onClick, count }) => (
    <div className="text-center mt-6 sm:mt-8">
        <button
            onClick={onClick}
            className="group relative inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
            <span className="relative z-10 flex items-center">
                View {count} More Services
                <svg 
                    className="ml-2 -mr-1 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
    </div>
);

const services = [
    {
        icon: <ProgrammingTech className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Programming & Tech",
        color: "blue"
    },
    {
        icon: <GraphicsDesign className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Graphics Design",
        color: "purple"
    },
    {
        icon: <DigitalMarketingThin className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Digital Marketing",
        color: "green"
    },
    {
        icon: <WritingTranslation className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Writing & Translation",
        color: "orange"
    },
    {
        icon: <VideoAnimation className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Video & Animation",
        color: "red"
    },
    {
        icon: <AiServices className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "AI Services",
        color: "indigo"
    },
    {
        icon: <MusicAudioThin className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Music & Audio",
        color: "yellow"
    },
    {
        icon: <BusinessThin className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Business",
        color: "teal"
    },
    {
        icon: <ConsultingThin className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Consulting",
        color: "cyan"
    }
];

const Services = () => {
    const [showAll, setShowAll] = useState(false);
    const [visibleCards, setVisibleCards] = useState(8);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            // Update visible cards based on screen width
            if (window.innerWidth < 640) { // sm
                setVisibleCards(2); // 1 column, 2 rows
            } else if (window.innerWidth < 1024) { // lg
                setVisibleCards(4); // 2 columns, 2 rows
            } else if (window.innerWidth < 1280) { // xl
                setVisibleCards(6); // 3 columns, 2 rows
            } else {
                setVisibleCards(9); // Show all cards in one row for large screens
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedServices = showAll ? services : services.slice(0, visibleCards);
    const remainingCount = services.length - visibleCards;

    return (
        <section className="py-6 sm:py-8 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 gap-2 sm:gap-3 lg:gap-4">
                    {displayedServices.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
                {!showAll && remainingCount > 0 && (
                    <ViewMoreButton onClick={() => setShowAll(true)} count={remainingCount} />
                )}
            </div>
        </section>
    );
};

export default Services;