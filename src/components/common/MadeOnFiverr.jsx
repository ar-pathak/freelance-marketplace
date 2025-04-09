import React, { useState, useEffect, useRef } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const data = [
    {
        id: 1,
        title: "App Design",
        name: "the_expertguy",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/4cbee24e1f3768eadc571b4487d274ac-1741425274/434shots_so.png",
        category: "digital",
        saved: false
    },
    {
        id: 2,
        title: "Illustration",
        name: "sohisoli",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/74c8edc8826d364dbd005d7cdf59d095-1741031410/Final%20rev%201.jpg",
        category: "illustration",
        saved: true
    },
    {
        id: 3,
        title: "Architecture & Interior Design",
        name: "acherniak",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/e2032a5a07747769ed691894db02cdca-1743629723/elara%202.jpg",
        category: "interior",
        saved: false
    },
    {
        id: 4,
        title: "Architecture & Interior Design",
        name: "thihoang",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/ee1cf62ce0782489a7f487cf7a411568-1742437981/1a.jpg",
        category: "interior",
        saved: false
    },
    {
        id: 5,
        title: "Architecture & Interior Design",
        name: "nga_architect",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/6704738947531cdaf6ef0cd7ac5e8621-1740628950/2025-02-20%20NA%20adesignmay%204%20view%20IN_view3.jpg",
        category: "interior",
        saved: false
    },
    {
        id: 6,
        title: "Architecture & Interior Design",
        name: "speed7design",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/895aa82acd1ac010a155ecc04687528b-1743355996/2025-03-20%20SP%20jcrend%205%20view%20IN-view1-fix2.jpg",
        category: "interior",
        saved: true
    },
    {
        id: 7,
        title: "Illustration",
        name: "teddy09",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/679c66713fae400b432b8bf795706a6d-1742532772/hunter.png",
        category: "illustration",
        saved: false
    },
    {
        id: 8,
        title: "Illustration",
        name: "gelmas12",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/3e67caf082731fbc4256d05a437e0a78-1743958431/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg",
        category: "illustration",
        saved: false
    },
    {
        id: 9,
        title: "Architecture & Interior Design",
        name: "farhanahmad665",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/25506c800c0947dcc2fbab66f2354b67-1742189643/807%20BEDROOM%20V1.png",
        category: "interior",
        saved: false
    },
    {
        id: 10,
        title: "Architecture & Interior Design",
        name: "quynhnguyen639",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/3f84c777c368d1d1c1e915c64b4be699-1743961468/2025-03-31%20QY%20bethyl%201%20view%20restaurant_View06_fix01.jpg",
        category: "interior",
        saved: true
    },
    {
        id: 11,
        title: "Architecture & Interior Design",
        name: "joseph1863",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/e65814636e72e1a32e327ed2f22cffc6-1739304187/22-D.jpg",
        category: "interior",
        saved: false
    },
    {
        id: 12,
        title: "Illustration",
        name: "devonstore",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/8a0e244a9f3bde10dad0c7a6eafadf97-1740424522/1236%20-%20PREVIEW%20ONLY%20A.jpg",
        category: "illustration",
        saved: false
    },
    {
        id: 13,
        title: "Architecture & Interior Design",
        name: "cesarvera_",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/554eabc2a07ba46554b748148fca7de3-1742252257/Imagen%20de%20WhatsApp%202024-08-22%20a%20las%2020.31.18_2a160adc.jpg",
        category: "interior",
        saved: false
    },
    {
        id: 14,
        title: "Architecture & Interior Design",
        name: "saadmaqsood",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/0cb9ee5c6225d7a21ae10357c7ac023f-1739765182/Enscape_2025-02-16-14-15-34.png",
        category: "interior",
        saved: false
    },
    {
        id: 15,
        title: "Architecture & Interior Design",
        name: "lofrender",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/81ddfa32a7d78e205f1a508e69ba65a4-1739185390/Scene%201_2.png",
        category: "interior",
        saved: false
    },
    {
        id: 16,
        title: "Architecture & Interior Design",
        name: "geometrystudios",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/b87fe77ed83d15b02630476c6d745921-1739524331/2025-01-31%20VY%20kond%203%20view%20IN%20Living-Kitchen_VIEW%201_FIX%202.jpg",
        category: "interior",
        saved: false
    }
]

// Add global styles to head
const addGlobalStyles = () => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        /* Mobile-first masonry grid */
        .masonry-grid {
            column-count: 1;
            column-gap: 1rem;
        }
        
        /* Small devices (landscape phones, 576px and up) */
        @media (min-width: 576px) {
            .masonry-grid {
                column-count: 2;
                column-gap: 1.25rem;
            }
        }
        
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
            .masonry-grid {
                column-count: 3;
                column-gap: 1.5rem;
            }
        }
        
        /* Large devices (desktops, 992px and up) */
        @media (min-width: 992px) {
            .masonry-grid {
                column-count: 3;
                column-gap: 1.5rem;
            }
        }
        
        /* X-Large devices (large desktops, 1200px and up) */
        @media (min-width: 1200px) {
            .masonry-grid {
                column-count: 4;
                column-gap: 1.75rem;
            }
        }
        
        /* XX-Large devices (larger desktops, 1400px and up) */
        @media (min-width: 1400px) {
            .masonry-grid {
                column-count: 4;
                column-gap: 2rem;
            }
        }
        
        .masonry-item {
            display: inline-block;
            width: 100%;
            margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
            .masonry-item {
                margin-bottom: 1.5rem;
            }
        }
        
        .break-inside-avoid {
            break-inside: avoid;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        
        /* Mobile optimizations */
        @media (max-width: 576px) {
            .image-card-small {
                min-height: 180px !important;
            }
            
            .image-card-medium {
                min-height: 200px !important;
            }
            
            .image-card-large {
                min-height: 250px !important;
            }
        }
    `;
    document.head.appendChild(styleEl);
    return () => {
        document.head.removeChild(styleEl);
    };
};

const MadeOnFiverr = () => {
    const [filterCategory, setFilterCategory] = useState("all");
    const [savedItems, setSavedItems] = useState(() => {
        // Initialize saved items based on the data
        return data.reduce((acc, item) => {
            acc[item.id] = item.saved;
            return acc;
        }, {});
    });
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Reference for scroll animations
    const sectionRef = useRef(null);
    const dropdownRef = useRef(null);
    
    // Categories for the filter
    const categories = [
        { id: "all", name: "All Projects" },
        { id: "interior", name: "Interior Design" },
        { id: "illustration", name: "Illustration" },
        { id: "digital", name: "Digital Design" }
    ];
    
    // Check screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add listener for window resize
        window.addEventListener('resize', checkMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    // Add global styles
    useEffect(() => {
        const cleanup = addGlobalStyles();
        return cleanup;
    }, []);
    
    // Filter items based on selected category
    const filteredItems = filterCategory === "all" 
        ? data 
        : data.filter(item => item.category === filterCategory);
        
    // Handle image loading
    useEffect(() => {
        if (loadedImages >= filteredItems.length && filteredItems.length > 0) {
            setIsLoading(false);
        }
    }, [loadedImages, filteredItems.length]);
    
    const handleImageLoaded = () => {
        setLoadedImages(prev => prev + 1);
    };
    
    // Reset loaded images when filter changes
    useEffect(() => {
        setIsLoading(true);
        setLoadedImages(0);
    }, [filterCategory]);
    
    // Toggle saved state for an item
    const toggleSaved = (id) => {
        setSavedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    
    // Add scroll animation observation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const masonryItems = document.querySelectorAll('.masonry-item');
        masonryItems.forEach(item => {
            observer.observe(item);
        });
        
        return () => {
            masonryItems.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, [isLoading]);
    
    // Determine image height class (for varied heights in masonry grid)
    const getImageHeightClass = (id) => {
        // Create varied image heights for a more natural masonry look
        if (id % 3 === 0) return "image-card-large"; 
        if (id % 3 === 1) return "image-card-medium";
        return "image-card-small";
    };

    return (
        <section ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements - responsive sizing */}
            <div className="absolute -top-12 sm:-top-24 -right-12 sm:-right-24 w-32 sm:w-48 h-32 sm:h-48 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-12 sm:-bottom-24 -left-12 sm:-left-24 w-32 sm:w-48 h-32 sm:h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-16">
                    {/* Header section - more responsive layout */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-5">
                        <div className="animate-fade-in-up">
                            <span className="px-2.5 sm:px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full mb-2 sm:mb-3 inline-block">Inspiration Gallery</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Made on Fiverr</h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">Browse a curated collection of stunning work delivered by our talented freelancers</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 animate-fade-in-up animation-delay-200 mt-4 sm:mt-0">
                            <div className="relative" ref={dropdownRef}>
                                <button 
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <IoFilterOutline className="mr-1.5 sm:mr-2" />
                                    Filter
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl p-3 opacity-100 z-10 min-w-[160px] sm:min-w-[180px] border border-gray-100 transform transition-all ease-out">
                                        <p className="text-xs text-gray-500 mb-2 px-2">Filter by Category</p>
                                        {categories.map((category) => (
                                            <button 
                                                key={category.id} 
                                                onClick={() => {
                                                    setFilterCategory(category.id);
                                                    setDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm ${
                                                    filterCategory === category.id 
                                                        ? 'bg-emerald-50 text-emerald-600 font-medium' 
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {category.name}
                                            </button>
                                        ))}
            </div>
                                )}
                            </div>
                            <a href="#" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center group">
                                Explore More
                                <MdOutlineKeyboardArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Filter Pills - improved responsive layout */}
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-5 md:hidden">
                        {categories.map((category) => (
                            <button 
                                key={category.id} 
                                onClick={() => setFilterCategory(category.id)}
                                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                                    filterCategory === category.id 
                                        ? 'bg-emerald-500 text-white shadow-sm' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Loading state - responsive sizing */}
                {isLoading && (
                    <div className="flex flex-col justify-center items-center h-40 sm:h-60">
                        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-emerald-500 mb-3 sm:mb-4"></div>
                        <p className="text-xs sm:text-sm text-gray-500 animate-pulse">Loading inspirations...</p>
                    </div>
                )}
                
                {/* Masonry/Pinterest style grid */}
                <div className={`masonry-grid ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
                    {filteredItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="masonry-item break-inside-avoid opacity-0"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                                <div className="relative overflow-hidden img-hover-zoom">
                                    <img 
                                        src={item.image} 
                                        alt={`${item.title} by ${item.name}`}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${getImageHeightClass(item.id)}`}
                                        style={{ 
                                            minHeight: item.id % 3 === 0 ? '300px' : (item.id % 3 === 1 ? '260px' : '220px')
                                        }}
                                        onLoad={handleImageLoaded}
                                    />
                                    
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Save button - better mobile touch target */}
                                    <button 
                                        className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 p-1.5 sm:p-2 rounded-full shadow-md hover:shadow-lg transition-all z-10 hover:scale-110"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSaved(item.id);
                                        }}
                                        aria-label={savedItems[item.id] ? "Unsave" : "Save"}
                                    >
                                        {savedItems[item.id] ? (
                                            <FaHeart className="text-red-500 text-sm sm:text-base" />
                                        ) : (
                                            <FaRegHeart className="text-gray-700 group-hover:text-gray-900 text-sm sm:text-base" />
                                        )}
                                    </button>
                                    
                                    {/* Category tag - better responsive size */}
                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                                        {item.category === "interior" && "Interior"}
                                        {item.category === "illustration" && "Illustration"}
                                        {item.category === "digital" && "Digital"}
                                    </div>
                                </div>
                                
                                <div className="p-3 sm:p-4">
                                    <div className="flex justify-between items-start">
                                <div>
                                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                                <span className="text-[10px] sm:text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full">Fiverr</span>
                                                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <a 
                                                href="#" 
                                                className="text-xs sm:text-sm text-gray-500 hover:text-emerald-600 mt-1 block hover:underline transition-colors"
                                            >
                                                @{item.name}
                                            </a>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                                            <HiOutlineDotsHorizontal className="text-base sm:text-lg" />
                                        </button>
                                    </div>
                                    
                                    {/* Action buttons - optimized display for mobile */}
                                    <div className={`flex items-center justify-between mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100 ${isMobile ? '' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}>
                                        <button className="text-[10px] sm:text-xs text-gray-500 hover:text-gray-700 flex items-center">
                                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View
                                        </button>
                                        <button className="text-[10px] sm:text-xs text-gray-500 hover:text-gray-700 flex items-center">
                                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                            Share
                                        </button>
                                        <button className="text-[10px] sm:text-xs bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors">
                                            Hire Artist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                            </div>
                
                {/* Empty state - responsive scaling */}
                {filteredItems.length === 0 && !isLoading && (
                    <div className="text-center py-8 sm:py-12 md:py-16 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">No items found</h3>
                        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-4 sm:mb-6 px-4">We couldn't find any items matching your selected filter.</p>
                        <button 
                            onClick={() => setFilterCategory('all')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all inline-flex items-center"
                        >
                            View all projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MadeOnFiverr