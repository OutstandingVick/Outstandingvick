import React from 'react';

const About = () => {
  return (
    <section className="py-24" id='about'>
        <h3 className="text-4xl md:text-6xl font-bold text-center pb-14 text-dain dark:text-decond">About Me</h3>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Image Placeholder */}
        <div className="w-full lg:w-2/5 sm:h-2/3 border border-gray-800 rounded-3xl overflow-hidden relative">
           <div className=" flex items-center justify-center">
            <img
              className='bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/aboutt.jpg`}
              alt='Profile'
            />
           </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-3/5 space-y-8 sm:text-3xl text-dain dark:text-decond">
          <p className="text-xl sm:text-3xl font-bold leading-relaxed">
            I'm a Writer, Researcher, and community manager/lead passionate about building meaningful connections in the Solana ecosystem.
          </p>
          <p className="leading-relaxed">
            With a mix of storytelling and strategy, I help projects communicate their vision, activate their audience, and grow with purpose. Also as an aspiring CMO, I focus on crafting narratives that stick—turning complex ideas into engaging content that drives culture and trust. 
          </p>
          <p className="leading-relaxed">
            I thrive at the intersection of community, communication, and creativity, helping teams shape messages that move people and build belief in Web3.
          </p>
          <p className="leading-relaxed">
            I turn complex blockchain concepts into clear, compelling narratives through research, storytelling, and community insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;