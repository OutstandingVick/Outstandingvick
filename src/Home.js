import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-2 pb-12">
      <div className="space-y-6 max-w-5xl">
        <p className="text-yellow-500 font-medium tracking-wider uppercase text-sm">
          Outstandingvick — Web3 Writer & Researcher
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-second">
          I Make Written <br />
          <span className="text-second">Web3 Content</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-300 mt-4">
          That Informs, Compels, Educates, & Drives Engagements.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed">
          I turn complex blockchain concepts into clear, compelling narratives through research, storytelling, and community insights.
        </p>
        <div className="pt-8">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;