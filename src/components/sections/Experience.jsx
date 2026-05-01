"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, stagger } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Users, Code2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp Innovations",
    position: "Lead Frontend Engineer",
    duration: "Jan 2025 - Present (Dhaka)",
    achievements: [
      "Next.js 15+ দিয়ে enterprise apps architect করেছি",
      "Team এর 60% performance boost দিয়েছি",
      "AI integrated dashboard deploy করেছি",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    stats: { projects: 12, revenue: "+$500K", team: 8 },
  },
  {
    id: 2,
    company: "Digital Solutions BD",
    position: "Fullstack Architect",
    duration: "Jun 2023 - Dec 2024 (Remote)",
    achievements: [
      "Microservices architecture design",
      "Real-time dashboard সহ ১০+ clients serve",
      "Zero-downtime deployment pipeline",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    stats: { projects: 25, clients: 15, uptime: "99.99%" },
  },
  {
    id: 3,
    company: "Freelance Pro",
    position: "Elite Developer",
    duration: "2021 - 2023 (Global)",
    achievements: [
      "Upwork Top Rated Plus (100% JSS)",
      "₹50L+ revenue generate",
      "Complex 3D portfolio animations",
    ],
    tech: ["Three.js", "GSAP", "WebGL", "Svelte"],
    stats: { projects: 45, rating: "5.0", earnings: "₹50L+" },
  },
];

export default function ExperiencePro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
      },
    },
  };

  return (
    <section className="min-h-screen py-32 bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden relative">
      {/* Floating Particles Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -30 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-6xl md:text-7xl font-black bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Professional Journey
          </motion.h2>
          <motion.p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Elite engineering এর through transformative impact create করেছি
            global scale-এ।
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500/30 via-purple-500/50 to-pink-500/30 z-0" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex items-stretch mb-20 group relative z-10 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
                variants={itemVariants}
              >
                {/* Card */}
                <motion.div
                  className="w-full md:w-5/12 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1 flex flex-col justify-between"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">
                          {exp.position}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-slate-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 mr-3 shrink-0" />
                          <span className="text-slate-300 leading-relaxed">
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {exp.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20"
                        whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border-2 border-white/30 flex items-center justify-center ml-8 md:ml-16 shadow-2xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-all duration-500"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-black">
                      {exp.stats.projects}
                    </div>
                    <div className="text-xs opacity-75">Projects</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
