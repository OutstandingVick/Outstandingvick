import React from 'react';
import { GoSun } from 'react-icons/go';

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
        <h1 className='md:text-6xl'>Featured Projects</h1>
        <div className='md:text-lg mt-2'>
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
              <GoSun />
            </button>
            <p className='bg-tange p-3 rounded-3xl text-sm'>Solana</p>
          </div>
          <h1 className='text-3xl'>Ribh Discover Rice</h1>
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
      <div></div>
    </article>
  );
}
