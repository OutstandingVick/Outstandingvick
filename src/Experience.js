import React from 'react';

const Experience = () => {
  return (
    <section className="py-24" id='experience'>
      <div className="text-center text-dain mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">My Experience</h3>
        <p className="text-base">The capacities in which I've exercised my services in the past and present.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 md:gap-6">
          <div 
            className=" bg-dain w-2/3 rounded-2xl p-3 flex flex-col items-center justify-center text-center hover:bg-gray-800 hover:border-yellow-500 transition-all duration-300 cursor-default"
          >
            <div className="w-32 h-12 mb-4 flex items-center justify-center text-gray-600 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-300">
              
              <img src={`${process.env.PUBLIC_URL}/img/fossa.svg`} alt='fossapay' className="w-full h-full object-contain" />

            </div>

            <span className="text-lg font-medium text-decond group-hover:text-yellow-500 transition-colors duration-300">
              Content Writer
            </span>
          </div>
          <div 
            className=" bg-dain w-2/3 rounded-2xl p-3 flex flex-col items-center justify-center text-center hover:bg-gray-800 hover:border-yellow-500 transition-all duration-300 cursor-default"
          >
            <div className="w-32 h-12 mb-4 flex items-center justify-center text-gray-600 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-300">
              
              <img src={`${process.env.PUBLIC_URL}/img/bouns.jpg`} alt='Bounsser' className="w-full h-full object-contain" />
            </div>

            <span className="text-lg font-medium text-decond group-hover:text-yellow-500 transition-colors duration-300">
              Operations & Marketing
            </span>
          </div>
      </div>
    </section>
  );
};

export default Experience;