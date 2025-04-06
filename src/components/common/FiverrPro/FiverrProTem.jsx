import React from 'react'
import { fiverrPro, fiverrProImage } from '../../../data/fiverrPro'
import { FiverrProLogoSvg } from '../../icons/FiverrIcons'
import FeatureItem from './FeatureItem'

const FiverrProTem = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="text-green-600">
                            <FiverrProLogoSvg />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            The <span className="text-green-600">premium</span> freelance solution for businesses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={fiverrProImage} 
                                alt="fiverr-pro" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiverrProTem 