import React from 'react'

const FiverrGo = () => {
    return (
        <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Enhanced decorative elements with better responsive sizing */}
            <div className="absolute -top-10 xs:-top-20 -right-10 xs:-right-20 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 xs:-bottom-20 -left-10 xs:-left-20 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/4 w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000 hidden xs:block"></div>
            
            <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-8 lg:gap-12">
                    <div className="max-w-xl space-y-4 xs:space-y-6 sm:space-y-8 animate-fade-in-up w-full">
                        <div className="fiverr-go-logo relative group">
                            <div className="absolute -top-4 xs:-top-6 -left-4 xs:-left-6 w-12 xs:w-16 h-12 xs:h-16 bg-pink-500/10 rounded-full blur-xl hidden xs:block group-hover:bg-pink-500/20 transition-colors duration-500"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 xs:w-8 h-6 xs:h-8 bg-yellow-500/10 rounded-full blur-lg hidden xs:block group-hover:bg-yellow-500/20 transition-colors duration-500"></div>
                            <img 
                                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/75863b216a8f2a5aecef1b52900daa97-1743602773855/Fiverr%20Go%20logo.png" 
                                alt="Fiverr Go" 
                                className="w-24 xs:w-28 sm:w-32 h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute -left-3 xs:-left-4 top-1/2 w-0.5 xs:w-1 h-12 xs:h-16 bg-gradient-to-b from-pink-500 to-yellow-500 rounded-full transform -translate-y-1/2 hidden xs:block"></div>
                            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-500 leading-tight pl-3 xs:pl-4 sm:pl-0">
                                Instant results.
                                <span className="block mt-1 xs:mt-2">Top talent.</span>
                            </h2>
                        </div>
                        <div className="relative">
                            <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                                Get what you need faster from freelancers who trained their own personal AI Creation Models. Now you can browse, prompt, and generate instantly. And if you need a tweak or change, the freelancer is always there to help you perfect it.
                            </p>
                            <div className="absolute -bottom-3 xs:-bottom-4 left-0 w-16 xs:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full hidden xs:block"></div>
                        </div>
                        <div className="relative group">
                            <button className="group w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full font-semibold hover:from-pink-600 hover:to-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative overflow-hidden text-sm xs:text-base">
                                <span className="relative z-10">Get Started</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                            </button>
                            <div className="absolute -right-1 xs:-right-2 -bottom-1 xs:-bottom-2 w-3 xs:w-4 h-3 xs:h-4 bg-yellow-500/20 rounded-full blur-sm group-hover:bg-yellow-500/30 transition-colors duration-300 hidden xs:block"></div>
                        </div>
                </div>
                    <div className="relative w-full lg:w-auto group mt-6 xs:mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-xl xs:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="absolute -top-3 xs:-top-4 -right-3 xs:-right-4 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-colors duration-500 hidden xs:block"></div>
                        <div className="absolute -bottom-3 xs:-bottom-4 -left-3 xs:-left-4 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-colors duration-500 hidden xs:block"></div>
                        <video 
                            src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/f4b1924c68e6916c6d100527c7ff3d9c-1743494584325/Image%20model"
                            className="rounded-xl xs:rounded-2xl shadow-xl xs:shadow-2xl w-full lg:w-[500px] h-auto relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                </div>
                </div>
            </div>
        </section>
    )
}

export default FiverrGo