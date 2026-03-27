import React from 'react';

const projects = [
  {
    title: "Implications of Alpenglow on Staking and Liquid Staking",
    company: "Solana",
    desc: "A research paper assessing the General Implications of the Alpenglow Consensus Mechanism on Staking and Liquid Staking",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://docs.google.com/document/d/198fvEcQyS9GKdcvUw14TRT6wTXDGB_uNlKeECTjWtY8/edit?usp=sharing" 
  },
  {
    title: "Liquid Staking on Solana",
    company: "Solblaze",
    desc: "A creative technical research paper that explores the Solblaze liquid staking ecosystem and it's suite of products.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://drive.google.com/file/d/1-6qoED6N8ZugmRi01mVfj05FAA1A8-LP/view" 
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://drive.google.com/file/d/14WHGKS3Pb9sw2AvnIiOkkPTzVFtLyvEw/view" 
  },
  {
    title: "Etherfuse Stablebonds: Transforming Collateral in DeFi",
    company: "Etherfuse",
    desc: "A technical research paper on thow Etherfuse Stablebonds are revolutionizing DeFi by providing innovative collateral and stability solutions.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://open.substack.com/pub/outstandingvick/p/how-etherfuse-stablebonds-are-redefining" 
  },
  {
    title: "The Silent Content Revolution",
    company: "Solana Collective",
    desc: "A creative research article on how Content Has Become the Main Infrastructure in Web3",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://open.substack.com/pub/outstandingvick/p/the-silent-revolution-why-content" // Add your URL here
  },
  {
    title: "Busha's Solana-backed Loans",
    company: "Busha",
    desc: "A creative research article on how Busha is leveraging Solana's technology to provide innovative loan solutions.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://open.substack.com/pub/outstandingvick/p/bushas-solana-backed-loans-liquidity" // Add your URL here
  },
  // Add your other projects here
];

const Works = () => {
  return (
    <section className="py-16 md:py-24" id="works">
      <h3 className="text-4xl md:text-6xl font-bold text-black dark:text-decond mb-4">Featured Works</h3>
      <p className="text-black dark:text-decond mb-12 max-w-2xl">
        A curated set of projects from research papers to articles, built with creativity, readability, and engagement in mind.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-dain dark:bg-decond border border-gray-800 p-8 rounded-3xl hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <h4 className="text-yellow-500 dark:text-black text-sm font-bold uppercase tracking-wider mb-2">{project.company}</h4>
            <h3 className="text-2xl font-bold text-decond dark:text-dain  mb-4">{project.title}</h3>
            <p className="text-gray-400 dark:text-dain mb-8 flex-grow">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-max bg-transparent border dark:hover:bg-dain dark:hover:text-decond dark:text-dain dark:bg-decond border-gray-600 text-white font-medium py-2.5 px-6 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;