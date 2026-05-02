"use client"; // Next.js 13+ app router এর জন্য

import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

const educationData = [
  {
    id: 1,
    institution: "Bhola Polytechnic Institute",
    course: "Diploma in Computer Science & Technology",
    startYear: "2023 -",
    endYear: "2026",
    grade: "CGPA processing...",
    description:
      'Focused on web development, algorithms, and "Real-time Web Applications with React & Node.js".',
  },
  {
    id: 2,
    institution: "Chairman Bazar High School",
    course: "Secondary School Certificate (SSC)",
    startYear: "",
    endYear: "2022",
    grade: "GPA 4.79/5.00",
    description:
      "Vocational group with major in ICT, Physics, Chemistry, and Mathematics. Secured top position in college.",
  },
  {
    id: 3,
    institution: "Chairman Bazar High School",
    course: "junior School Certificate (JSC)",
    startYear: "",
    endYear: "2019",
    grade: "GPA 4.64/5.00",
    description:
      "Excelled in Mathematics and ICT. ",
  },
];

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    const current = document.querySelector("#education");
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    
    <section
      id="education"
      className="py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My academic journey shaped my technical foundation and passion for
            building innovative solutions.
          </p>
        </div>

        <ol
          className={`relative border-l-4 border-blue-500/30 dark:border-blue-400/30 ml-8 md:ml-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {educationData.map((edu, index) => (
            <li
              key={edu.id}
              className={`mb-12 ml-8 md:ml-12 last:mb-0 transition-all duration-700 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-linear-to-r from-blue-500 to-purple-600 rounded-full -left-10 md:-left-14 ring-8 ring-blue-100/50 dark:ring-blue-900/50 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
              </div>

              {/* Date Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <time className="bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full shadow-lg inline-block mb-2 sm:mb-0">
                  {edu.startYear} {edu.endYear}
                </time>
                <span className="bg-green-100/80 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  {edu.grade}
                </span>
              </div>

              {/* Institution & Course */}
              <div className="p-6 md:p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.course}
                </h3>
                <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  {edu.institution}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      </section>
    
  );
};

export default EducationSection;
