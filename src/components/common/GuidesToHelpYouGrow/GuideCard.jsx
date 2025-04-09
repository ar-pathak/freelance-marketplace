import React from 'react';
import PropTypes from 'prop-types';

const GuideCard = ({ guide, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col lg:min-h-[420px]"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Image container with aspect ratio */}
            <div className="relative w-full pt-[56.25%] overflow-hidden">
                <img
                    src={guide.image}
                    alt={guide.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/90 backdrop-blur-sm text-blue-600 rounded-full shadow-sm">
                        {guide.category}
                    </span>
                </div>
                {/* Read time badge */}
                <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-600 rounded-full shadow-sm flex items-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {guide.readTime}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 min-h-[3rem]">
                    {guide.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 line-clamp-3 flex-grow">
                    {guide.description}
                </p>
                <a
                    href={`/guides/${guide.id}`}
                    className="inline-flex items-center text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 mt-auto"
                >
                    Read more
                    <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>

            {/* Hover overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};

GuideCard.propTypes = {
    guide: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        readTime: PropTypes.string.isRequired
    }).isRequired,
    isHovered: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
};

export default GuideCard; 