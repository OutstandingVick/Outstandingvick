import React from 'react';

export default function Home() {
  return (
    <article className='bg-main mt-14'>
      <div className='font-lato space-y-6 text-3xl md:text-[3.5rem]'>
        <div className='space-y-6 left'>
          <h2>
            I Make Written <span className='text-side'>Web3</span> Content
          </h2>
          <h2>
            That Informs, <span className='text-side'>Compels</span>,
          </h2>
          <h2>
            Also <span className='text-side'>Educates</span>,
          </h2>
        </div>
        <div className='space-y-6'>
          <h2>
            And <span className='text-side'>Drives</span> Engagements. I Turn
            <span className='text-side'> Blockchain</span> Concepts
          </h2>
        </div>
        <div className='space-y-6 pl-12 md:pl-32 ml-12 md:ml-96 right'>
          <h2>
            Into Clear, <span className='text-side'>Compelling</span> Narratives
          </h2>
          <h2>
            <span className='text-side'>Through Research</span>, Storytelling
          </h2>
          <h2>
            And Community <span className='text-side'>Insights</span>
          </h2>
        </div>
      </div>
    </article>
  );
}
