import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl md:text-8xl font-black text-dain dark:text-decond leading-tight mb-8">
        Let's Build Something <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Magnetic.</span>
      </h2>
      <p className="text-xl text-dain dark:text-decond max-w-2xl mb-12">
        Looking to create the best written content for your Web3 Project? Let's craft narratives that stick.
      </p>
      
      <a href="mailto:victor.ogbonna@hotmail.com" className="bg-dain text-decond px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-500 transition-colors duration-300 mb-16 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
        Send me a message now!
      </a>

      <div className="flex items-center justify-center gap-8 sm:gap-10 dark:text-decond text-dain">
  <a 
    href="https://x.com/Outstandingvick" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-black hover:scale-110 transition-all duration-300"
    aria-label="X (Twitter)"
  >
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  </a>

  <a 
    href="https://t.me/Outstandingvick" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#2AABEE] hover:scale-110 transition-all duration-300"
    aria-label="Telegram"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
  </a>


  <a 
    href="https://substack.com/@Outstandingvick" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#FF6719] hover:scale-110 transition-all duration-300"
    aria-label="Substack"
  >
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
    </svg>
  </a>


  <a 
    href="https://medium.com/@victor.ogbonna" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-black hover:scale-110 transition-all duration-300"
    aria-label="Medium"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  </a>
</div>
    </section>
  );
};

export default Contact;