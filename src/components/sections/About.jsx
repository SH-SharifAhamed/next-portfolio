"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    const element = document.querySelector("#about-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <section
      id="about-section"
      className="py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="w-80 h-80 sm:w-96 sm:h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-500">
              <Image
                src="/hero.jpeg" // Tumar profile pic replace koro
                alt="Sharif Ahamed"
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -inset-2 bg-linear-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white to-slate-200 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              About Me
            </h2>
            <p
              className={`text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Full Stack MERN Developer | Building scalable web apps with
              MongoDB, Express, React & Node.js. Passionate about creating
              responsive UIs, secure APIs & real-time features. Open for
              freelance/remote work.
            </p>
            <p
              className={`text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Problem solve korte valo lage ar team-e kaaj korte enjoy kori.
              Tumar project ta next level-e niye jabo!
            </p>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-white">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-1000 delay-${(index + 1) * 100} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-linear-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600">
              <a
                href="#projects"
                className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 text-lg flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
