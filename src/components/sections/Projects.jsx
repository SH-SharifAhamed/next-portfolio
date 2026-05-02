'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with payment integration and admin dashboard.',
    image: '/projects/img-2.jpg', // Replace with your image path
    technologies: ['Next.js', 'Tailwind', 'Stripe', 'Prisma'],
    liveUrl: 'https://ecommerce-example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Real-time collaborative task manager built with modern React patterns.',
    image: '/projects/img-3.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://taskapp-example.com',
    githubUrl: 'https://github.com/yourusername/taskapp'
  },
  {
    id: '3',
    title: 'AI Chatbot Dashboard',
    description: 'Analytics dashboard for AI chatbot performance with interactive charts.',
    image: '/projects/img-4.jpg',
    technologies: ['Next.js', 'Chart.js', 'Supabase', 'TypeScript'],
    liveUrl: 'https://chatbot-example.com',
    githubUrl: 'https://github.com/yourusername/chatbot'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'This very portfolio site showcasing responsive design and animations.',
    image: '/projects/img-5.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    id: '5',
    title: 'Weather App',
    description: 'Real-time weather forecasting app with geolocation and forecasts.',
    image: '/projects/img-6.jpg',
    technologies: ['React', 'OpenWeather API', 'Tailwind'],
    liveUrl: 'https://weather-example.com',
    githubUrl: 'https://github.com/yourusername/weather'
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'MDX-powered blog with search, tags, and dark mode support.',
    image: '/projects/img-7.jpg',
    technologies: ['Next.js', 'MDX', 'Contentlayer'],
    liveUrl: 'https://blog-example.com',
    githubUrl: 'https://github.com/yourusername/blog'
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.some(t => t.toLowerCase().includes(activeTab.toLowerCase())));

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 relative"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.1),transparent)]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Discover my latest work showcasing cutting-edge technologies and
            innovative solutions.
          </p>
        </motion.div>

        {/* Tech Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 lg:mb-20">
          {["all", "Next.js", "React", "Node.js"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.toLowerCase()
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/60 0 text-blue-500  hover:bg-white  backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-500 transition-colors duration-300 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4  group-hover:opacity-100 transition-all duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-2xl font-medium text-center transition-all duration-300 border border-white/30 hover:border-white backdrop-blur-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-3xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}