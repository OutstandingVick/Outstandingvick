import React from 'react';

const skills = [
  "Writer", "Marketing", "State Community Lead", "Writing & Research", "Social Media Management", "Narrative Strategy"
];

const Experience = () => {
  return (
    <section className="py-24">
      <div className="text-center text-dain mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">My Expertise</h3>
        <p className="text-base">The capacities in which I exercise my services.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex items-center justify-center text-center hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-300 cursor-default">
            <span className="text-lg font-medium text-gray-300 group-hover:text-yellow-500">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;