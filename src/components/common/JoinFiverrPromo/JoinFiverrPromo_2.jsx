import React from 'react'

const JoinFiverrPromo_2 = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 md:my-16">
            <div className='bg-gradient-to-r from-[#4d1727] to-[#6b1e38] text-white rounded-2xl shadow-2xl overflow-hidden relative p-6 sm:p-8 md:p-12 border border-[#ff764040] hover:shadow-[0_20px_50px_rgba(255,118,64,0.1)] transition-shadow duration-300'>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-[#ff7640] opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-[#ff7640] opacity-10 rounded-full -ml-8 -mb-8"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative z-10">
                    <div className="max-w-xl w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left leading-tight tracking-tight">
                            Freelance services at your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff7640] to-[#ffae8b] font-extrabold animate-pulse'>fingertips</span>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                        <button 
                            className="w-full md:w-auto bg-gradient-to-r from-[#ff7640] to-[#ff8a5a] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7640] focus:ring-opacity-50"
                            aria-label="Join Fiverr"
                        >
                            <span className="font-medium">Join Fiverr</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinFiverrPromo_2