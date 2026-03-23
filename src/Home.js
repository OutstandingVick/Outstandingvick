import React from 'react';
import Works from './Works';

const Home = () => {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col justify-center md:pt-48 pb-12">
      <div className="md:space-y-6 max-w-5xl text-second dark:text-decond">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
          I Make Written <br />
          <span>Web3 Content</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-4">
          That Informs, Compels, Educates, & Drives Engagements.
        </h2>
        <p className="text-lg font-bold md:text-xl text-bell max-w-2xl mt-8 leading-relaxed">
          I turn complex blockchain concepts into clear, compelling narratives through research, storytelling, and community insights.
        </p>
      </div>
      <Works />
    </section>
  );
};

export default Home;