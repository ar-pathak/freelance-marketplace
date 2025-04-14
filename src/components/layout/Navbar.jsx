import React, { useState, useEffect, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaUser, FaSearch, FaBars, FaTimes, FaShoppingCart, FaBell, FaSignOutAlt, FaUserCircle, FaCog, FaHeart } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../auth/AuthModal';

const Navbar = () => {
    const { user, openAuthModal, isAuthModalOpen, closeAuthModal, authModalMode, signOut } = useAuth();
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 20);
            
            // Get the jumbotron height (90vh on mobile, 100vh on desktop)
            const jumbotronHeight = window.innerWidth < 768 ? window.innerHeight * 0.9 : window.innerHeight;
            
            // Show search when scrolled past jumbotron
            setShowSearch(scrollPosition > jumbotronHeight);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setIsMobileSearchOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSignOut = () => {
        signOut();
        setIsUserMenuOpen(false);
    };

    return (
        <>
            <div className={`border-b border-gray-200 bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                <div className='max-w-[2000px] mx-auto px-4 sm:px-8 2xl:px-12'>
                    <div className='flex justify-between items-center h-14 sm:h-20 2xl:h-24'>
                        <a href="/" className='flex items-center group'>
                            <svg width="90" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-transform duration-300 group-hover:scale-105 sm:w-[120px]'>
                                <g fill="#404145">
                                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" ></path>
                                </g>
                                <g fill="#1dbf73">
                                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                                </g>
                            </svg>
                        </a>

                        {/* Desktop Search */}
                        <div className={`flex-1 max-w-2xl mx-8 hidden lg:block transition-all duration-300 ${showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                                <input 
                                    type="text" 
                                    placeholder='What service are you looking for today?'
                                    className='w-full px-5 py-2.5 pl-11 text-base lg:text-[15px] border border-gray-300 rounded-full focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 shadow-sm placeholder:text-gray-400 placeholder:text-sm lg:placeholder:text-[13px] font-source'
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                                <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base lg:text-[15px]' />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className='hidden lg:block'>
                            <ul className='flex items-center space-x-6 lg:space-x-7'>
                                <li>
                                    <a className='text-gray-600 hover:text-emerald-500 font-medium text-[15px] transition-colors duration-200 flex items-center group font-poppins' href="#">
                                        <span className='relative'>
                                            Fiverr Pro
                                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full'></span>
                                        </span>
                                    </a>
                                </li>
                                <li className='relative'>
                                    <button 
                                        className='text-gray-600 hover:text-emerald-500 font-medium text-[15px] transition-colors duration-200 flex items-center group font-poppins'
                                        onMouseEnter={() => setIsExploreOpen(true)}
                                        onMouseLeave={() => setIsExploreOpen(false)}
                                    >
                                        <span className='relative'>
                                            Explore
                                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full'></span>
                                        </span>
                                        <span className='ml-1 transition-transform duration-200 group-hover:rotate-180'><IoIosArrowDown className='text-base lg:text-[15px]' /></span>
                                    </button>
                                    {isExploreOpen && (
                                        <div 
                                            className='absolute top-full left-0 mt-2 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl py-2 min-w-[280px] z-50 border border-gray-100 transform transition-all duration-200 ease-in-out backdrop-blur-sm'
                                            onMouseEnter={() => setIsExploreOpen(true)}
                                            onMouseLeave={() => setIsExploreOpen(false)}
                                        >
                                            <div className='px-5 py-2.5 border-b border-gray-100'>
                                                <h3 className='text-sm font-semibold text-gray-500 font-poppins'>Categories</h3>
                                            </div>
                                            <div className='py-1'>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Graphics & Design
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Digital Marketing
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Writing & Translation
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Video & Animation
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Music & Audio
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Programming & Tech
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Data
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Business
                                                    </span>
                                                </a>
                                                <a href="#" className='block px-5 py-2.5 text-sm hover:bg-emerald-50 text-gray-700 hover:text-emerald-500 transition-all duration-200 hover:pl-7 group font-source'>
                                                    <span className='flex items-center'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                                                        Lifestyle
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <a className='text-gray-600 hover:text-emerald-500 font-medium text-[15px] transition-colors duration-200 flex items-center group font-poppins' href="#">
                                        <span className='relative'>
                                            English
                                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full'></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-gray-600 hover:text-emerald-500 font-medium text-[15px] transition-colors duration-200 flex items-center group font-poppins' href="#">
                                        <span className='relative'>
                                            Become a Seller
                                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full'></span>
                                        </span>
                                    </a>
                                </li>
                                {!user ? (
                                    <>
                                        <li>
                                            <button 
                                                onClick={() => openAuthModal('signin')}
                                                className='text-gray-600 hover:text-emerald-500 font-medium text-[15px] transition-colors duration-200 flex items-center group font-poppins'
                                            >
                                                <span className='relative'>
                                                    Sign In
                                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full'></span>
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button 
                                                onClick={() => openAuthModal('signup')}
                                                className='bg-emerald-500 text-white px-6 py-2 text-[15px] rounded-full hover:bg-emerald-600 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 font-poppins relative overflow-hidden group'
                                            >
                                                <span className='relative z-10'>Join</span>
                                                <span className='absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                                                <span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300'></span>
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <li className='relative' ref={userMenuRef}>
                                        <button 
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            className='flex items-center space-x-2 text-gray-600 hover:text-emerald-500 transition-colors duration-200'
                                        >
                                            {user.avatar ? (
                                                <img 
                                                    src={user.avatar} 
                                                    alt={user.name} 
                                                    className="w-8 h-8 rounded-full object-cover border-2 border-emerald-500"
                                                />
                                            ) : (
                                                <FaUserCircle className='text-2xl' />
                                            )}
                                            <span className='font-medium text-[15px]'>{user.name}</span>
                                            <IoIosArrowDown className={`transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {isUserMenuOpen && (
                                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                                <div className="px-4 py-3 border-b border-gray-100">
                                                    <p className="font-medium text-gray-900">{user.name}</p>
                                                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                                </div>
                                                <ul className="py-1">
                                                    <li>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-colors duration-200">
                                                            <FaUser className="mr-3 text-gray-400" />
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-colors duration-200">
                                                            <FaHeart className="mr-3 text-gray-400" />
                                                            Favorites
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-colors duration-200">
                                                            <FaCog className="mr-3 text-gray-400" />
                                                            Settings
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="border-t border-gray-100 py-1">
                                                    <button 
                                                        onClick={handleSignOut}
                                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-colors duration-200"
                                                    >
                                                        <FaSignOutAlt className="mr-3 text-gray-400" />
                                                        Sign Out
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                )}
                            </ul>
                        </nav>

                        {/* Mobile Actions */}
                        <div className='flex items-center space-x-3 sm:space-x-6 lg:hidden'>
                            <button 
                                className='text-gray-600 hover:text-emerald-500 transition-colors duration-200 p-1.5'
                                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                            >
                                <FaSearch className='text-xl sm:text-2xl' />
                            </button>
                            {user && (
                                <button className='text-gray-600 hover:text-emerald-500 transition-colors duration-200 p-1.5'>
                                    <FaBell className='text-xl sm:text-2xl' />
                                </button>
                            )}
                            {user && (
                                <button className='text-gray-600 hover:text-emerald-500 transition-colors duration-200 p-1.5'>
                                    <FaShoppingCart className='text-xl sm:text-2xl' />
                                </button>
                            )}
                            <button 
                                className='text-gray-600 hover:text-emerald-500 transition-colors duration-200 p-1.5'
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <FaTimes className='text-xl sm:text-2xl' /> : <FaBars className='text-xl sm:text-2xl' />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    {isMobileSearchOpen && (
                        <div className='lg:hidden py-3 sm:py-4 border-t border-gray-200'>
                            <div className='relative'>
                                <input 
                                    type="text" 
                                    placeholder='What service are you looking for today?'
                                    className='w-full px-4 sm:px-6 py-2.5 sm:py-3 pl-10 sm:pl-12 text-base sm:text-lg border border-gray-300 rounded-full focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 font-source'
                                />
                                <FaSearch className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg' />
                            </div>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className='lg:hidden py-4 sm:py-6 border-t border-gray-200'>
                            <ul className='space-y-2 sm:space-y-3'>
                                <li>
                                    <button className='w-full text-left px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 flex items-center justify-between font-poppins'>
                                        <span>Explore</span>
                                        <IoIosArrowDown className='text-gray-400 text-lg sm:text-xl' />
                                    </button>
                                </li>
                                <li>
                                    <a className='block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source' href="#">
                                        Fiverr Pro
                                    </a>
                                </li>
                                <li>
                                    <a className='block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source' href="#">
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className='block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source' href="#">
                                        Become a Seller
                                    </a>
                                </li>
                                {!user ? (
                                    <>
                                        <li>
                                            <button 
                                                onClick={() => openAuthModal('signin')}
                                                className='block w-full text-left px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source'
                                            >
                                                Sign In
                                            </button>
                                        </li>
                                        <li>
                                            <button 
                                                onClick={() => openAuthModal('signup')}
                                                className='block w-full text-left px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-emerald-500 hover:bg-emerald-50 transition-all duration-200 font-source'
                                            >
                                                Join
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="px-4 sm:px-6 py-2.5 sm:py-3 border-b border-gray-100">
                                            <div className="flex items-center space-x-3">
                                                {user.avatar ? (
                                                    <img 
                                                        src={user.avatar} 
                                                        alt={user.name} 
                                                        className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
                                                    />
                                                ) : (
                                                    <FaUserCircle className='text-3xl text-gray-400' />
                                                )}
                                                <div>
                                                    <p className="font-medium text-gray-900">{user.name}</p>
                                                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source">
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source">
                                                Favorites
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <button 
                                                onClick={handleSignOut}
                                                className="block w-full text-left px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 font-source"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Auth Modal */}
            <AuthModal 
                isOpen={isAuthModalOpen}
                onClose={closeAuthModal}
                initialMode={authModalMode}
            />
        </>
    );
};

export default Navbar;