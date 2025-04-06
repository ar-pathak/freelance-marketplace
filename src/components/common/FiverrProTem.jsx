import React from 'react'
import { fiverrPro, fiverrProImage } from '../../data/fiverrPro'
import { FiverrProLogoSvg } from '../icons/FiverrIcons'
import FeatureItem from './FeatureItem'

const FiverrProTem = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8">
                        <div className="text-green-600 w-32 sm:w-36 md:w-40">
                            <FiverrProLogoSvg />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The <span className="text-green-600">premium</span> freelance solution for businesses
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {fiverrPro.map((item) => (
                                <FeatureItem 
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-8 lg:mt-0">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={fiverrProImage} 
                                alt="fiverr-pro" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiverrProTem 