
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { GoSun } from 'react-icons/go';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      {/* Main Glassmorphism Container */}
      <div className="bg-dain dark:bg-decond text-decond dark:text-dain backdrop-blur-md border border-gray-800 rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* Left: Icon, Name, and Job Title */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Profile Icon Placeholder */}
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-800 overflow-hidden border-2 border-gray-700 flex-shrink-0">
            <img
              className='rounded-full bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/prof.jpg`}
              alt='Profile'
            />
          </div>
          
          <div className=" hover:text-second flex flex-col justify-center">
            <span className="font-bold text-xs md:text-base leading-none tracking-wide">
              Outstandingvick
            </span>
            <span className="text-xs md:text-xs mt-1.5 py-0.5 rounded-md w-max uppercase tracking-wider font-medium">
              Solana Writer & Researcher
            </span>
          </div>
        </div>

        <button onClick={toggleTheme} className="dark:text-dain pl-8 pr-2 sm:pr-0 md:pr-0 sm:pl-24 md:pl-0">
          <GoSun />
        </button>

        {/* Right: Desktop Menu & Contact */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-decond dark:text-dain hover:text-second font-medium text-center py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          </ul>
          <a href="#contact" className="text-main hover:bg-blue-950 transition-all duration-300 cursor-pointer bg-black px-6 py-2 rounded-full font-semibold border border-gray-700 hover:border-yellow-500">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-decond dark:text-dain font-bold hover:text-white p-2 focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full mt-3 bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-5 flex flex-col space-y-3 shadow-2xl">
          
          {/* Mobile-only profile branding (shows up if screen is super small and the top one hides) */}
          

          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-yellow-500 font-medium text-center py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-white bg-second hover:bg-yellow-500 hover:text-black transition-all duration-300 font-semibold text-center py-3 rounded-full mt-4 border border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
