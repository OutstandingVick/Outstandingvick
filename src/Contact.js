import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl md:text-8xl font-black text-dain leading-tight mb-8">
        Let's Build Something <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Magnetic.</span>
      </h2>
      <p className="text-xl text-dain max-w-2xl mb-12">
        Looking to create the best written content for your Web3 Project? Let's craft narratives that stick.
      </p>
      
      <a href="mailto:your-email@example.com" className="bg-dain text-decond px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-500 transition-colors duration-300 mb-16 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
        Send me a message now!
      </a>

      <div className="sm:flex grid grid-cols-2 space-x-8 text-dain font-medium">
        <a href="/" className="hover:text-white transition-colors">X (Twitter)</a>
        <a href="/" className="hover:text-white transition-colors">Telegram</a>
        <a href="/" className="hover:text-white transition-colors">Substack</a>
        <a href="/" className="hover:text-white transition-colors">Medium</a>
      </div>
    </section>
  );
};

export default Contact;