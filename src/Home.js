import React from 'react';
import { SiSolana } from 'react-icons/si';

export default function Home() {
  return (
    <article className='dark:bg-dain dark:text-main bg-main text-support mt-7 md:mt-14 overflow-hidden font-lato'>
      <div className='font-lato space-y-3 md:space-y-5 text-2xl md:text-6xl'>
        <div className='space-y-3 md:space-y-6 left'>
          <h2>
            I Make Written
            <span className=' dark:text-dide text-side'> Web3</span> Content
          </h2>
          <h2>
            That Informs,
            <span className='dark:text-dide text-side'>Compels</span>,
          </h2>
          <h2>
            Also <span className='dark:text-dide text-side'>Educates</span>,
          </h2>
        </div>
        <div className='space-y-3 md:space-y-6'>
          <h2>
            & <span className='dark:text-dide text-side'>Drives</span>{' '}
            Engagements. I Turn
            <span className='dark:text-dide text-side'> Blockchain</span>{' '}
            Concepts
          </h2>
        </div>
        <div className='space-y-3 md:space-y-6 md:pl-24 md:ml-96 right'>
          <h2>
            Into Clear,
            <span className='dark:text-dide text-side'> Compelling </span>{' '}
            Narratives
          </h2>
          <h2 className='md:pl-16'>
            Through
            <span className='dark:text-dide text-side'> Research</span>,
            Storytelling
          </h2>
          <h2 className='md:pl-52'>
            <span className='dark:text-dide text-side'>And Community</span>{' '}
            Insights.
          </h2>
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <button className='text-xl py-4 px-6 rounded-full border-2 dark:text-main dark:border-main text-support border-support transition-transform duration-200 hover:scale-150'>
          Connect With Me!
        </button>
      </div>
      <br />
      <div className='flex flex-col md:flex-row md:mx-12 md:m-16 justify-between '>
        <h1 className='md:text-6xl text-2xl font-elms font-bold'>
          Featured Works
        </h1>
        <div className='md:text-lg mt-2 font-cardo'>
          <p>
            A curated set of projects from research papers to articles to mix of
            both
          </p>
          <p>built with creativity, readability, and engagement in mind.</p>
        </div>
      </div>
      <div
        id='works'
        className='mx-14 mt-4 md:mt-0 grid md:grid-cols-3 gap-8 justify-center'
      >
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-72 md:w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele dark:hover:text-support transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 text-support bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm text-support'>
              Solblaze
            </p>
          </div>
          <h1 className='md:text-2xl text-xl font-jersey font-bold'>
            Liquid Staking on Solana: The Solblaze Ecosystem
          </h1>
          <p className='md:text-lg text-sm py-4'>
            A creative technical research paper exploring the Solblaze liquid
            staking product base
          </p>
          <div className='flex flex-row justify-around py-4 dark:hover:text-support text-support dark:text-main pb-5 md:pb-20 md:text-base text-sm'>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Creative
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              Technical
            </p>
            <p className='px-3 py-2 rounded-2xl border dark:border-main border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-2 md:mt-6 md:mb-4 mb-1'>
            <a href='https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view'>
              <button className='md:text-lg px-4 py-3 rounded-2xl border dark:border-main dark:text-main dark:hover:text-support text-support border-support text-base'>
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className='flex flex-col md:flex-row md:mx-9 md:my-6 justify-between'>
        <h1 className='md:text-5xl text-2xl font-elms font-bold'>About Me</h1>
        <div className='md:text-xl mt-2 font-cardo'>
          <p>
            A short description of myself, the skills I possess, the services I
            provide to my clients,
          </p>
          <p>and the different capacities I've exercised these services in.</p>
        </div>
      </div>
      <div className='md:mx-9 mt-7 md:mt-0'>
        <p className='md:text-xl font-cardo font-bold'>
          I’m a Web3 writer, researcher, community manager, and state lead
          passionate about building meaningful connections in the Solana
          ecosystem. With a mix of storytelling and strategy, I help projects
          communicate their vision, activate their audience, and grow with
          purpose. As a social media manager and aspiring CMO, I focus on
          crafting narratives that stick—turning complex ideas into engaging
          content that drives culture and trust. I thrive at the intersection of
          community, communication, and creativity, helping teams shape messages
          that move people and build belief in Web3
        </p>
      </div>
      <br />
      <div className='flex flex-col'>
        <div className='flex justify-start md:mx-9 md:mt-5 md:mb-5 mb-2'>
          <h1 className='md:text-4xl text-2xl  font-elms font-bold'>
            Experience
          </h1>
        </div>
        <div className='md:flex md:space-x-8 space-x-0 md:space-y-0 space-y-3 md:mx-9 grid grid-cols-1 md:text-3xl text-xl font-cardo'>
          <div className='flex space-x-2'>
            <img
              className='md:w-12 w-6 md:h-12 h-6 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/fos.jpg`}
              alt='Profile'
            />
            <h1 className='md:m-2'>Writer</h1>
          </div>
          <div className='flex space-x-2'>
            <img
              className='md:w-12 w-6 md:h-12 h-6 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/bou.jpg`}
              alt='Profile'
            />
            <h1 className='md:m-2'>Marketing</h1>
          </div>
          <div className='flex space-x-2'>
            <img
              className='md:w-12 w-6 md:h-12 h-6 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/stn.jpg`}
              alt='Profile'
            />
            <h1 className='md:m-2'>State Commmunity Lead</h1>
          </div>
          <div className='flex mspace-x-2'>
            <img
              className='md:w-12 w-6 md:h-12 h-6 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/net.jpg`}
              alt='Profile'
            />
            <h1 className='md:m-2'>Writing & Research</h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className='flex flex-col items-center space-y-3 font-jersey font-bold text-lg md:text-4xl mb-8'>
          <p>Looking to create the best written</p>
          <p>content for your Web3 Project?</p>
          <p>Send me a message now!</p>
        </div>
        <div className='grid grid-cols-3 md:flex md:justify-center space-x-6 mb-12 text-base md:text-2xl'>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4'
          >
            X(Twitter)
          </a>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4'
          >
            Telegram
          </a>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4'
          >
            Email
          </a>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4 pt-4 md:pt-0'
          >
            Substack
          </a>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4 pt-4 md:pt-0 pl-16 md:pl-0'
          >
            Medium
          </a>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-5xl md:text-9xl text-center font-bungee'>
            CONNECT WITH ME
          </h1>
        </div>
      </div>
      <br />
      <br />
    </article>
  );
}
