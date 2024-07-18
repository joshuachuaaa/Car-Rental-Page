import React from 'react'

const DriveNow = () => {
  return (
    <div className='w-full px-8 max-w-[1300px] lg:mb-10'>
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-[1300px] mx-auto my-6 lg:h-[300px] lg:pt-14 mb-14">
        <h1 className="text-3xl font-bold mb-4 lg:mb-11">Drive with Next Ride Today</h1>
        <p className="mb-6 lg:mb-11">Get the app to explore the world of premium cars - that's exciting</p>
        <button className="bg-white text-black py-2 px-4 rounded-full flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.07-.48-2.09-.48-3.19 0-1.34.63-2.29.44-3.16-.41C2.86 15.53 3.65 7.8 9.24 7.5c1.46-.06 2.54.47 3.36.99.8-.52 1.93-1.05 3.38-.99 2.38.13 4.07 1.73 4.02 4.08-.06 3.12-2.17 6.26-2.95 7.7zM11.99 2c.22 1.85-1.39 3.31-3.17 3.06C8.6 3.31 10.13 2 11.99 2z"/>
            </svg>
            Download App
        </button>
        </div>
    </div>
  );
};
export default DriveNow;