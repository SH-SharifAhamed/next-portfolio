"use client";
import { useState, useEffect } from "react";

const skillsData = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "TypeScript", level: 88, category: "Languages" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
];

const categories = ["Frontend", "Backend", "Styling", "Languages", "Database"];

import React from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);


  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proficient in modern web technologies with hands-on experience
            across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Bars */}
          <div className="space-y-6">
            {skillsData.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold text-lg">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden group-hover:h-4 transition-all duration-300">
                  <div
                    className={`h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out shadow-lg transform group-hover:scale-[1.02] ${
                      hoveredSkill === skill.name ? "w-full" : "w-0"
                    }`}
                    style={{ "--skill-width": `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {category}
                </h3>
                <div className="h-2 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full group-hover:w-full w-0 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
