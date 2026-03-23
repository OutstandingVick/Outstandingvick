import React from 'react';

const projects = [
  {
    title: "Liquid Staking on Solana",
    company: "Solblaze",
    desc: "A creative technical research paper exploring the Solblaze liquid staking product base.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://your-link-here.com" // Add your URL here
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://your-link-here.com" // Add your URL here
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://your-link-here.com" // Add your URL here
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://your-link-here.com" // Add your URL here
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"],
    url: "https://your-link-here.com" // Add your URL here
  },
  // Add your other projects here
];

const Works = () => {
  return (
    <section className="md:pt-24" id="works">
      <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-decond mb-4">Featured Works</h3>
      <p className="text-black dark:text-decond mb-12 max-w-2xl">
        A curated set of projects from research papers to articles, built with creativity, readability, and engagement in mind.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-[#111] dark:bg-decond border border-gray-800 p-8 rounded-3xl hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <h4 className="text-yellow-500 dark:text-black text-sm font-bold uppercase tracking-wider mb-2">{project.company}</h4>
            <h3 className="text-2xl font-bold text-white dark:text-dain  mb-4">{project.title}</h3>
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