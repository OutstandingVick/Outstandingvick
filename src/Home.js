import React from 'react';
import { GoSun } from 'react-icons/go';
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
      <div className='flex flex-col md:flex-row mx-12 md:m-16 justify-between '>
        <h1 className='md:text-6xl font-elms'>Featured Works</h1>
        <div className='md:text-lg mt-2 font-cardo'>
          <p>
            A curated set of projects from research papers to articles to mix of
            both
          </p>
          <p>built with creativity, readability, and engagement in mind.</p>
        </div>
      </div>
      <div className='mx-14 grid md:grid-cols-3 gap-8 justify-center'>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <SiSolana />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
        <div className='rounded-3xl border border-support dark:border-main w-96 px-6 py-8 hover:bg-gradient-to-r hover:from-caro hover:to-cele transition-all duration-300'>
          <div className='flex justify-between mb-8'>
            <button className='p-3 bg-gradient-to-tr from-purp to-dide rounded-xl'>
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl font-advent font-bold'>Ribh Discover Rice</h1>
          <p className='text-lg py-4'>
            A website for a top class barbing salon to deliver exquisite styling
            to their clients.
          </p>
          <div className='flex flex-row justify-around py-4 dark:text-main pb-20'>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main  text-support border-support'>
              Creative
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Technical
            </p>
            <p className='px-2 py-2 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              DeFi
            </p>
          </div>
          <div className='flex justify-center mt-6 mb-4'>
            <button className='text-lg px-4 py-3 rounded-3xl border dark:border-main dark:text-main text-support border-support'>
              Read More
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className='flex flex-col md:flex-row md:mx-9 md:my-7 justify-between'>
        <h1 className='md:text-5xl font-elms font-bold'>About Me</h1>
        <div className='md:text-xl mt-2 font-cardo'>
          <p>
            A short description of myself, the skills I possess, the services I
            provide to my clients,
          </p>
          <p>and the different capacities I've exercised these services in.</p>
        </div>
      </div>
      <div className='mx-9'>
        <p className='md:text-xl font-cardo'>
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
        <div className='flex justify-start md:mx-9 md:mt-5 md:mb-3'>
          <h1 className='md:text-4xl font-elms font-bold'>Experience</h1>
        </div>
        <div className='md:mx-9 md:mt-3 md:mb-5 font-cardo flex flex-row space-x-12'>
          <div className='flex space-x-4'>
            <img
              className='w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/fos.jpg`}
              alt='Profile'
            />
            <h1 className='md:text-3xl pt-2'>Writer</h1>
          </div>
          <div className='flex space-x-4'>
            <img
              className='w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/net.jpg`}
              alt='Profile'
            />
            <h1 className='md:text-3xl pt-2'>Writing & Research</h1>
          </div>
          <div className='flex space-x-4'>
            <img
              className='w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/stn.jpg`}
              alt='Profile'
            />
            <h1 className='md:text-3xl pt-2'>State Community Lead</h1>
          </div>
          <div className='flex space-x-4'>
            <img
              className='w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/bou.jpg`}
              alt='Profile'
            />
            <h1 className='md:text-3xl pt-2'>Marketing</h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className='flex flex-col items-center space-y-3 font-jersey font-bold text-4xl mb-8'>
          <p>Looking to create the best written</p>
          <p>content for your Web3 Project?</p>
          <p>Send me a message now!</p>
        </div>
        <div className='flex justify-center space-x-6 mb-12 text-2xl'>
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
            className=' dark:hover:text-main hover:underline underline-offset-4'
          >
            Substack
          </a>
          <a
            href='/'
            className=' dark:hover:text-main hover:underline underline-offset-4'
          >
            Medium
          </a>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-9xl text-center font-bungee'>CONNECT WITH ME</h1>
        </div>
      </div>
      <br />
      <br />
    </article>
  );
}
