import React, { useState, useEffect } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaChevronUp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [year] = useState(new Date().getFullYear());
    const [screenSize, setScreenSize] = useState({
        isMobile: false,
        isTablet: false,
    });
    
    // Toggle dropdown function
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    }
    
    // Handle responsiveness and scroll visibility
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize({
                isMobile: width < 768,
                isTablet: width >= 768 && width < 1024,
            });
        };
        
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
        };
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        
        // Initial checks
        handleResize();
        handleScroll();
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.06,
                delayChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    };
    
    const linkHoverVariants = {
        initial: { color: "#374151" }, // text-gray-700
        hover: {
            color: "#059669", // using hex value instead of emerald-500
            transition: { duration: 0.2 }
        }
    };
    
    const footerSections = [
        {
            title: "Categories",
            links: [
                { text: "Graphics & Design", href: "#" },
                { text: "Digital Marketing", href: "#" },
                { text: "Writing & Translation", href: "#" },
                { text: "Video & Animation", href: "#" },
                { text: "Music & Audio", href: "#" },
                { text: "Programming & Tech", href: "#" },
                { text: "AI Services", href: "#" },
                { text: "Consulting", href: "#" },
                { text: "Data", href: "#" },
                { text: "Business", href: "#" },
                { text: "Personal Growth & Hobbies", href: "#" },
                { text: "Photography", href: "#" },
                { text: "Finance", href: "#" },
                { text: "End-to-End Projects", href: "#" },
                { text: "Service Catalog", href: "#" }
            ]
        },
        {
            title: "For Clients",
            links: [
                { text: "How Fiverr Works", href: "#" },
                { text: "Customer Success Stories", href: "#" },
                { text: "Trust & Safety", href: "#" },
                { text: "Quality Guide", href: "#" },
                { text: "Fiverr Learn", href: "#", subtext: "Online Courses" },
                { text: "Fiverr Guides", href: "#" },
                { text: "Fiverr Answers", href: "#" }
            ]
        },
        {
            title: "For Freelancers",
            links: [
                { text: "Become a Fiverr Freelancer", href: "#" },
                { text: "Become an Agency", href: "#" },
                { text: "Freelancer Equity Program", href: "#" },
                { text: "Kickstart", href: "#" },
                { text: "Community Hub", href: "#" },
                { text: "Forum", href: "#" },
                { text: "Events", href: "#" }
            ]
        },
        {
            title: "Business Solutions",
            links: [
                { text: "Fiverr Pro", href: "#" },
                { text: "Project Management Service", href: "#" },
                { text: "ClearVoice", href: "#", subtext: "Content Marketing" },
                { text: "Working Not Working", href: "#", subtext: "Creative Talent" },
                { text: "AutoDS", href: "#", subtext: "Dropshipping Tool" },
                { text: "Fiverr Logo Maker", href: "#" },
                { text: "Contact Sales", href: "#" },
                { text: "Fiverr Go", href: "#" }
            ]
        },
        {
            title: "Company",
            links: [
                { text: "About Fiverr", href: "#" },
                { text: "Help & Support", href: "#" },
                { text: "Social Impact", href: "#" },
                { text: "Careers", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Privacy Policy", href: "#" },
                { text: "Do not sell or share my personal information", href: "#" },
                { text: "Partnerships", href: "#" },
                { text: "Creator Network", href: "#" },
                { text: "Affiliates", href: "#" },
                { text: "Invite a Friend", href: "#" },
                { text: "Press & News", href: "#" },
                { text: "Investor Relations", href: "#" }
            ]
        }
    ];
    
    const socialIcons = [
        { Icon: FaTiktok, href: "#", label: "TikTok" },
        { Icon: FaInstagram, href: "#", label: "Instagram" },
        { Icon: FaFacebook, href: "#", label: "Facebook" },
        { Icon: FaTwitter, href: "#", label: "Twitter" },
        { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { Icon: FaYoutube, href: "#", label: "YouTube" }
    ];

    // Social icon hover animation
    const socialIconVariants = {
        initial: { color: "#4B5563" }, // text-gray-600
        hover: { 
            color: "#059669", // hex for emerald-500
            scale: 1.1,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.9 }
    };

    // Button animation
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
    };

    // Icon button animation
    const iconButtonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    // Render sections with tablet-specific optimizations
    const renderSections = () => {
        // For tablets, we want to show a 3-column grid with balanced content
        if (screenSize.isTablet) {
            // First 3 sections in first row, last 2 sections in second row
            return (
                <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-0">
                        {footerSections.slice(0, 3).map((section, index) => (
                            <SectionColumn key={index} section={section} index={index} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-0 ml-16">
                        {footerSections.slice(3, 5).map((section, index) => (
                            <SectionColumn key={index + 3} section={section} index={index + 3} />
                        ))}
                    </div>
                </div>
            );
        }

        // For desktop, we use the normal 5-column grid
        return (
            <motion.div 
                className='grid grid-cols-5 gap-x-6 gap-y-10 mb-12'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {footerSections.map((section, index) => (
                    <SectionColumn key={index} section={section} index={index} />
                ))}
            </motion.div>
        );
    };

    // Section column component
    const SectionColumn = ({ section, index }) => (
        <motion.div variants={itemVariants} className="min-w-0">
            <h2 className='font-bold font-poppins text-sm md:text-base mb-4 text-gray-800 relative inline-block group'>
                {section.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <ul className='space-y-2.5 md:space-y-3'>
                {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                        <motion.a 
                            href={link.href} 
                            className='text-gray-700 font-source text-sm group flex items-start'
                            initial="initial"
                            whileHover="hover"
                            variants={linkHoverVariants}
                        >
                            <span className="relative">
                                {link.text}
                                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-[#10B981] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                {link.subtext && (
                                    <span className='text-xs text-gray-500 block mt-0.5'>
                                        {link.subtext}
                                    </span>
                                )}
                            </span>
                        </motion.a>
                    </li>
                )).slice(0, screenSize.isTablet ? 6 : undefined)}
                {screenSize.isTablet && section.links.length > 6 && (
                    <li>
                        <motion.a 
                            href="#" 
                            className='text-[#059669] font-source text-sm font-medium flex items-start'
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            + {section.links.length - 6} more
                        </motion.a>
                    </li>
                )}
            </ul>
        </motion.div>
    );

    return (
        <footer className='bg-white py-8 sm:py-10 md:py-16 border-t border-gray-200 relative mt-12 sm:mt-16 md:mt-20'>
            {/* Background decorations - responsive sizes on different screens */}
            <motion.div 
                className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[#6EE7B7] filter blur-3xl -top-32 -right-32 md:-top-64 md:-right-64 opacity-40" />
                <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[#10B981] filter blur-3xl -bottom-32 -left-32 md:-bottom-64 md:-left-64 opacity-40" />
            </motion.div>
            
            {/* Back to top button - hidden on small screens, visible on scroll */}
            <div className="container mx-auto px-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex justify-end">
                    <motion.a 
                        href="#top" 
                        className="flex items-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4 bg-[#ECFDF5] hover:bg-[#D1FAE5] rounded-full text-xs sm:text-sm font-medium text-[#065F46] hover:text-[#064E3B] transition-colors duration-300 shadow-sm hover:shadow border border-[#A7F3D0] hover:border-[#6EE7B7]"
                        aria-label="Back to top"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="font-poppins">Back to top</span>
                        <FaChevronUp className="text-xs" />
                    </motion.a>
                </div>
            </div>
            
            <div className='container mx-auto px-4 max-w-7xl'>
                {/* Desktop and Tablet footer sections */}
                <div className='hidden md:block'>
                    {renderSections()}
                </div>
                
                {/* Mobile accordion sections - improved touchable areas and animations */}
                <div className='md:hidden space-y-0 mb-8'>
                    {footerSections.map((section, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button 
                                className="w-full flex justify-between items-center py-4 px-2"
                                onClick={() => toggleDropdown(index)}
                                aria-expanded={activeDropdown === index}
                                aria-controls={`section-${index}-content`}
                            >
                                <h2 className='font-bold font-poppins text-base text-gray-800'>{section.title}</h2>
                                <motion.div
                                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-1" // Larger touch target
                                >
                                    <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {activeDropdown === index && (
                                    <motion.div
                                        id={`section-${index}-content`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul className='space-y-3 py-3 px-2 mb-3'>
                                            {section.links.map((link, linkIndex) => (
                                                <motion.li 
                                                    key={linkIndex}
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: linkIndex * 0.03 }}
                                                >
                                                    <a 
                                                        href={link.href} 
                                                        className='text-gray-700 hover:text-[#059669] transition-colors duration-300 font-source text-sm block py-2'
                                                    >
                                                        {link.text}
                                                        {link.subtext && (
                                                            <span className='text-xs text-gray-500 block mt-0.5'>
                                                                {link.subtext}
                                                            </span>
                                                        )}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                
                <hr className='border-gray-200 mb-6 sm:mb-8 md:mb-10' />
                
                {/* Bottom section - improved for tablet */}
                <motion.div 
                    className='flex flex-col-reverse md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {/* Copyright and logo - special layout for tablet */}
                    <div className={`flex ${screenSize.isTablet ? 'flex-row' : 'flex-col sm:flex-row'} items-center gap-3 md:gap-6 w-full md:w-auto`}>
                        <a href="/" className={`flex items-center group ${screenSize.isTablet ? '' : 'mb-2 sm:mb-0'}`} aria-label="Fiverr Home">
                            <svg width="90" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                className='transition-transform duration-300 group-hover:scale-105 sm:w-[100px] sm:h-[30px]'>
                                <g fill="#404145">
                                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" ></path>
                                </g>
                                <g fill="#1dbf73">
                                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                                </g>
                            </svg>
                        </a>
                        <span className='text-gray-600 text-xs sm:text-sm font-source text-center sm:text-left'>© {year} Fiverr International Ltd.</span>
                    </div>
                    
                    {/* Social and settings - specialized for tablet */}
                    <div className={`flex ${screenSize.isTablet ? 'flex-row' : 'flex-col sm:flex-row'} flex-wrap justify-center items-center gap-y-4 ${screenSize.isTablet ? 'gap-x-8' : 'gap-x-4 sm:gap-x-6'} md:gap-x-10 w-full md:w-auto`}>
                        {/* Social icons */}
                        <ul className='flex items-center gap-3 sm:gap-5'>
                            {socialIcons.map(({ Icon, href, label }, index) => (
                                <li key={index}>
                                    <motion.a 
                                        href={href} 
                                        className={`block ${screenSize.isTablet ? 'p-2' : 'p-1.5 sm:p-2'} rounded-full hover:bg-[#ECFDF5]`}
                                        aria-label={label}
                                        variants={socialIconVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <Icon className={`${screenSize.isTablet ? 'w-5 h-5' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Settings */}
                        <div className={`flex flex-wrap items-center justify-center ${screenSize.isTablet ? 'gap-4' : 'gap-2 sm:gap-3'}`}>
                            <motion.button 
                                className={`flex items-center ${screenSize.isTablet ? 'gap-2 px-3 py-2 text-sm' : 'gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm'} bg-white border border-gray-200 hover:border-[#A7F3D0] hover:bg-[#ECFDF5] rounded-md text-gray-700 hover:text-[#065F46] transition-colors duration-300 shadow-sm font-poppins`}
                                aria-label="Select language"
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <GrLanguage className={`text-gray-600 ${screenSize.isTablet ? 'text-sm' : 'text-xs sm:text-sm'}`} />
                                <span className='font-medium'>English</span>
                                <IoIosArrowDown className={`text-gray-500 ${screenSize.isTablet ? 'text-xs' : 'text-[10px] sm:text-xs'}`} />
                            </motion.button>
                            
                            <motion.button 
                                className={`flex items-center ${screenSize.isTablet ? 'gap-2 px-3 py-2 text-sm' : 'gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm'} bg-white border border-gray-200 hover:border-[#A7F3D0] hover:bg-[#ECFDF5] rounded-md text-gray-700 hover:text-[#065F46] transition-colors duration-300 shadow-sm font-poppins`}
                                aria-label="Select currency"
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <span className='font-medium'>USD</span>
                                <IoIosArrowDown className={`text-gray-500 ${screenSize.isTablet ? 'text-xs' : 'text-[10px] sm:text-xs'}`} />
                            </motion.button>
                            
                            <motion.button 
                                className={`flex items-center justify-center ${screenSize.isTablet ? 'p-2' : 'p-1.5 sm:p-2'} bg-white border border-gray-200 hover:border-[#A7F3D0] hover:bg-[#ECFDF5] rounded-md text-gray-700 hover:text-[#065F46] transition-colors duration-300 shadow-sm`}
                                aria-label="Accessibility options"
                                variants={iconButtonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <TbAccessible className={`${screenSize.isTablet ? 'w-5 h-5' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer