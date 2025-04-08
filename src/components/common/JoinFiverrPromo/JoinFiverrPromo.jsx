import React from 'react'
import { Happy, Quickly, Categories, Matching } from './svg'

const JoinFiverrPromo = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Make it all happen with freelancers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Find the perfect freelancer for your next project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-100 flex flex-col items-center transform hover:-translate-y-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
              <Categories className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
              Access a pool of top talent
            </h3>
            <p className="text-gray-600 text-center">
              Find skilled professionals across 700+ categories
            </p>
          </div>

          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-purple-100 flex flex-col items-center transform hover:-translate-y-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
              <Matching className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-purple-600 transition-colors duration-300">
              Simple matching experience
            </h3>
            <p className="text-gray-600 text-center">
              Easy-to-use platform to find the right freelancer
            </p>
          </div>

          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-green-100 flex flex-col items-center transform hover:-translate-y-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
              <Quickly className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-green-600 transition-colors duration-300">
              Quality work within budget
            </h3>
            <p className="text-gray-600 text-center">
              Get your projects completed quickly and efficiently
            </p>
          </div>

          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-amber-100 flex flex-col items-center transform hover:-translate-y-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
              <Happy className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-amber-600 transition-colors duration-300">
              Pay only when satisfied
            </h3>
            <p className="text-gray-600 text-center">
              Secure payment system with satisfaction guarantee
            </p>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-16">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
            Join Fiverr Today
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default JoinFiverrPromo