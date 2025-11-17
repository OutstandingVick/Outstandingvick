import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { GoSun } from 'react-icons/go';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <nav className='font-lato dark:bg-dain dark:text-main text-support bg-main py-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='p-2'>
            <img
              className='rounded-full w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/prof.jpg`}
              alt='Profile'
            />
          </div>
          <div className='font-elms flex flex-col'>
            <h1 className='font-semibold text-xl  dark:hover:text-main hover:text-side'>
              Oustandingvick
            </h1>
            <h2 className='text-lg text-dain dark:hover:text-main hover:text-side'>
              Solana-obsessed Writer and Researcher
            </h2>
          </div>
        </div>

        <button onClick={toggleTheme}>
          <GoSun />
        </button>

        <div className='text-lg hidden md:flex space-x-8 font-semibold'>
          <a
            href='#works'
            className='hover:text-side  dark:hover:text-main hover:underline underline-offset-4'
          >
            Works
          </a>
          <a
            href='/'
            className='hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            About
          </a>
          <a
            href='/'
            className='hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Experience
          </a>
          <a
            href='/'
            className='hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Contact
          </a>
        </div>

        <div className='md:hidden bg-transparent'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className='hover:text-side dark:hover:text-main dark:text-side text-support w-7 h-7' />
            ) : (
              <Menu className='hover:text-side dark:hover:text-main dark:text-side text-support w-7 h-7' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-3 text-center dark:text-side text-support font-lato font-semibold'>
          <a
            href='/'
            className='block hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Works
          </a>
          <a
            href='/'
            className='block hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Services
          </a>
          <a
            href='/'
            className='block hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Experience
          </a>
          <a
            href='/'
            className='block hover:text-side dark:hover:text-main hover:underline underline-offset-4'
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
