import React from 'react';

const projects = [
  {
    title: "Liquid Staking on Solana",
    company: "Solblaze",
    desc: "A creative technical research paper exploring the Solblaze liquid staking product base.",
    tags: ["Creative", "Technical", "DeFi"]
  },
  {
    title: "Modern Empires built on Crypto",
    company: "DATs",
    desc: "A creative technical research paper on the emergence of Digital Asset Treasuries (DATs) in Web3.",
    tags: ["Creative", "Technical", "DeFi"]
  },
  // Add your other projects here
];

const Works = () => {
  return (
    <section className="py-24 border-t border-gray-900">
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Works</h3>
      <p className="text-gray-400 mb-12 max-w-2xl">
        A curated set of projects from research papers to articles, built with creativity, readability, and engagement in mind.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2">
            <h4 className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">{project.company}</h4>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-8">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;