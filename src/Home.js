import React from 'react';

export default function Home() {
  return (
    <article className='dark:bg-dain dark:text-side bg-main text-support mt-7 md:mt-14'>
      <div className='font-lato space-y-3 md:space-y-6 text-2xl md:text-6xl'>
        <div className='space-y-3 md:space-y-6 left'>
          <h2>
            I Make Written{' '}
            <span className=' dark:text-main text-side'>Web3</span> Content
          </h2>
          <h2>
            That Informs,{' '}
            <span className='dark:text-main text-side'>Compels</span>,
          </h2>
          <h2>
            Also <span className='dark:text-main text-side'>Educates</span>,
          </h2>
        </div>
        <div className='space-y-3 md:space-y-6'>
          <h2>
            & <span className='dark:text-main text-side'>Drives</span>{' '}
            Engagements. I Turn
            <span className='dark:text-main text-side'> Blockchain</span>{' '}
            Concepts
          </h2>
        </div>
        <div className='space-y-3 md:space-y-6 md:pl-24 md:ml-96 right'>
          <h2>
            Into Clear,
            <span className='dark:text-main text-side'> Compelling </span>{' '}
            Narratives
          </h2>
          <h2 className='md:pl-16'>
            Through
            <span className='dark:text-main text-side'> Research</span>,
            Storytelling
          </h2>
          <h2 className='md:pl-52'>
            <span className='dark:text-main text-side'>And Community</span>{' '}
            Insights.
          </h2>
        </div>
      </div>
      <br />
      <div className='flex justify-center font-lato'>
        <button className='text-xl py-4 px-6 rounded-full border-2 dark:text-side dark:border-side text-support border-support transition-transform duration-200 hover:scale-105'>
          Connect With Me!
        </button>
      </div>
      <br />
    </article>
  );
}
