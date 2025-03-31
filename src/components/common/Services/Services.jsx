import React, { useState, useEffect } from 'react'
import { AiServices, BusinessThin, ConsultingThin, DigitalMarketingThin, GraphicsDesign, MusicAudioThin, ProgrammingTech, VideoAnimation, WritingTranslation } from './svg'

const ServiceCard = ({ service }) => {
    const { icon, title, description, color } = service;
    
    return (
        <div className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 cursor-pointer border border-gray-100 hover:border-${color}-100 h-full flex flex-col transform hover:-translate-y-1`}>
            <div className="flex flex-col items-center gap-3 sm:gap-4 flex-grow">
                <div className={`p-2 sm:p-3 bg-${color}-50 rounded-lg group-hover:bg-${color}-100 transition-colors duration-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transform group-hover:scale-110`}>
                    {icon}
                </div>
                <div className="text-center flex-grow">
                    <h3 className={`font-semibold text-gray-900 group-hover:text-${color}-600 transition-colors duration-300 text-sm sm:text-base`}>
                        {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
                </div>
            </div>
        </div>
    );
};

const ViewMoreButton = ({ onClick, count }) => (
    <div className="text-center mt-8 sm:mt-12">
        <button
            onClick={onClick}
            className="group relative inline-flex items-center px-6 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
            <span className="relative z-10 flex items-center">
                View {count} More Services
                <svg 
                    className="ml-2 -mr-1 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" 
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
        icon: <ProgrammingTech className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Programming & Tech",
        description: "Web, Mobile & Software Development",
        color: "blue"
    },
    {
        icon: <GraphicsDesign className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Graphics Design",
        description: "Logos, Art & Illustration",
        color: "purple"
    },
    {
        icon: <DigitalMarketingThin className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Digital Marketing",
        description: "SEO, Social Media & Content",
        color: "green"
    },
    {
        icon: <WritingTranslation className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Writing & Translation",
        description: "Content, Copy & Translation",
        color: "orange"
    },
    {
        icon: <VideoAnimation className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Video & Animation",
        description: "Motion Graphics & Animation",
        color: "red"
    },
    {
        icon: <AiServices className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "AI Services",
        description: "Machine Learning & AI Solutions",
        color: "indigo"
    },
    {
        icon: <MusicAudioThin className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Music & Audio",
        description: "Voice Over & Music Production",
        color: "yellow"
    },
    {
        icon: <BusinessThin className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Business",
        description: "Consulting & Business Services",
        color: "teal"
    },
    {
        icon: <ConsultingThin className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Consulting",
        description: "Professional Consulting Services",
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
                setVisibleCards(8); // 4 columns, 2 rows
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedServices = showAll ? services : services.slice(0, visibleCards);
    const remainingCount = services.length - visibleCards;

    return (
        <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Popular Services
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Discover a wide range of professional services from talented freelancers. 
                        From programming to creative design, find the perfect service for your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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