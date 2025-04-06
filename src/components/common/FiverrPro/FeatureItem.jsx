import React from 'react'
import { FiverrSvg } from '../../icons/FiverrIcons'

const FeatureItem = ({ title, description }) => {
    return (
        <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-2 bg-green-50 rounded-full mb-4">
                <div className="text-green-600">
                    <FiverrSvg />
                </div>
            </div>
            <h6 className="text-lg font-semibold text-gray-900 mb-2">{title}</h6>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default FeatureItem 