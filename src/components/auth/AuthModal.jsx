import React, { useState, useEffect } from 'react';
import { FaTimes, FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin' }) => {
    const { signIn, signUp } = useAuth();
    const [mode, setMode] = useState(initialMode);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Reset form when mode changes
    useEffect(() => {
        setFormData({
            email: '',
            password: '',
            name: '',
        });
        setError('');
    }, [mode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (mode === 'signin') {
                const result = await signIn(formData);
                if (!result.success) {
                    setError(result.error || 'Failed to sign in. Please try again.');
                }
            } else {
                const result = await signUp(formData);
                if (!result.success) {
                    setError(result.error || 'Failed to create account. Please try again.');
                }
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className={`flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl ${mode === 'signup' ? 'mt-20 md:mt-20 xl:mt-30' : ''}`}
                >
                    {/* Left Panel - Marketing Content */}
                    <div className="hidden lg:flex lg:w-1/2 bg-emerald-800 p-8 lg:p-12 text-white relative overflow-hidden min-h-[400px]">
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ 
                                backgroundImage: `url(https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png)`,
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 backdrop-blur-[2px]"></div>
                        <div className="relative z-10 w-full">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-white/90">Success starts here</h2>
                            <div className="space-y-4 lg:space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <TiTick className="text-xl lg:text-2xl text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-white/90">Over 700 categories</h3>
                                        <p className="text-emerald-100/90 text-sm lg:text-base">Find the perfect service for your needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <TiTick className="text-xl lg:text-2xl text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-white/90">Quality work done faster</h3>
                                        <p className="text-emerald-100/90 text-sm lg:text-base">Get your projects completed efficiently</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <TiTick className="text-xl lg:text-2xl text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-white/90">Global Talent Pool</h3>
                                        <p className="text-emerald-100/90 text-sm lg:text-base">Connect with professionals worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Auth Form */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 relative bg-white/95 backdrop-blur-sm">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="max-w-md mx-auto">
                            <div className="text-center mb-6 lg:mb-8">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                    {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
                                </h2>
                                <p className="text-gray-600 text-sm lg:text-base">
                                    {mode === 'signin'
                                        ? 'Sign in to continue to Fiverr'
                                        : 'Join Fiverr to start selling'}
                                </p>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                                <button className="flex items-center justify-center space-x-2 bg-white border border-gray-200 rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md">
                                    <FaGoogle className="text-red-500" />
                                    <span className="text-gray-700 font-medium">Google</span>
                                </button>
                                <button className="flex items-center justify-center space-x-2 bg-[#1877F2] text-white rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 hover:bg-[#1874E8] transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md">
                                    <FaFacebook />
                                    <span className="font-medium">Facebook</span>
                                </button>
                                <button className="flex items-center justify-center space-x-2 bg-gray-900 text-white rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 hover:bg-gray-800 transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md">
                                    <FaGithub />
                                    <span className="font-medium">GitHub</span>
                                </button>
                                <button className="flex items-center justify-center space-x-2 bg-[#2F2F2F] text-white rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 hover:bg-[#1F1F1F] transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md">
                                    <FaMicrosoft />
                                    <span className="font-medium">Microsoft</span>
                                </button>
                            </div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {mode === 'signup' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 text-sm sm:text-base shadow-sm"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 text-sm sm:text-base shadow-sm"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 pr-10 text-sm sm:text-base shadow-sm"
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full bg-emerald-500 text-white py-2 sm:py-2.5 rounded-lg hover:bg-emerald-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg relative overflow-hidden group text-sm sm:text-base ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                                >
                                    <span className="relative z-10">
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                {mode === 'signin' ? 'Signing In...' : 'Creating Account...'}
                                            </span>
                                        ) : (
                                            mode === 'signin' ? 'Sign In' : 'Create Account'
                                        )}
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </motion.button>
                            </form>

                            {/* Toggle Mode */}
                            <div className="mt-6 text-center">
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                                    <button
                                        onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                                        className="text-emerald-500 hover:text-emerald-600 font-medium ml-1"
                                    >
                                        {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthModal; 