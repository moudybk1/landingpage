import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Lumina Interface',
        tags: ['React', 'D3.js'],
        color: 'bg-pastel-blue/20 dark:bg-pastel-dark-blue/20'
    },
    {
        title: 'Aura Notes',
        tags: ['Next.js', 'Supabase'],
        color: 'bg-pastel-green/20 dark:bg-pastel-dark-green/20'
    },
    {
        title: 'Echo Systems',
        tags: ['Web Audio', 'Canvas'],
        color: 'bg-pastel-lavender/20 dark:bg-pastel-dark-lavender/20'
    }
];

const Projects = () => {
    return (
        <section id="work" className="py-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex items-end justify-between"
                >
                    <div>
                        <span className="text-pastel-lavender dark:text-pastel-dark-lavender font-medium tracking-wider uppercase text-sm font-bold transition-colors">Index</span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-light text-charcoal dark:text-gray-100 transition-colors">
                            Selected <span className="font-normal">Work</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href="#"
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group block"
                        >
                            {/* Thumbnail Container */}
                            <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${project.color} relative mb-5 shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                    <div className="w-1/2 h-1/2 bg-white/40 dark:bg-white/10 rounded-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors duration-300" />
                            </div>

                            {/* Minimal Content */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-medium text-charcoal dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 mt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-sm text-gray-400 dark:text-gray-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="text-gray-300 dark:text-gray-600 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
