import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Figma', category: 'Design' },
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-pastel-blue dark:text-pastel-dark-blue font-medium tracking-wider uppercase text-sm transition-colors">Toolkit</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-light text-charcoal dark:text-gray-100 transition-colors">
                        Digital <span className="font-normal">Craftsmanship</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.02,
                                y: -4,
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                            }}
                            className="p-6 bg-white dark:bg-deep-card border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm cursor-default group transition-colors"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wider uppercase mb-2 group-hover:text-pastel-blue dark:group-hover:text-pastel-dark-blue transition-colors">
                                    {tech.category}
                                </span>
                                <span className="text-lg text-charcoal dark:text-gray-200 font-medium transition-colors group-hover:text-black dark:group-hover:text-white">
                                    {tech.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
