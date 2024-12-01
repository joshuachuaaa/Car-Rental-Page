import React from 'react';

const KeyFeatures = () => {
  const features = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: '24-hour car delivery' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      title: '24/7 technical support' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      title: 'All models have a premium package' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      title: 'Absolute confidentiality' 
    },
  ];

  return (
    <div className="max-w-[1300px] mx-4 px-4 py-8 mb-[50px] lg:mb-[150px]">
      <p className="text-gray-600 text-lg mb-2">
        Service that you can trust.
      </p>
      <h2 className="text-4xl font-bold mb-4 overflow-hidden">Key Features</h2>
      <p className="text-gray-800 mb-12 text-xl">
        We are all about our client's comfort and safety. That's why we provide the best service you can imagine.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-solid border">
            <div className={`w-12 h-16 lg:h-[100px] rounded-full flex items-center justify-center mb-4 bg-opacity-10 bg-gray-${(index + 1) * 200}`}>
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;