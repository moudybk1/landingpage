import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-blue/10 dark:bg-pastel-dark-blue/05 rounded-full blur-[100px] -z-10 transition-colors" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-light text-charcoal dark:text-gray-100 mb-6 transition-colors">
                        Let's build something <span className="font-normal italic text-pastel-blue dark:text-pastel-dark-blue transition-colors">calm</span> together.
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto transition-colors">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <motion.a
                        href="mailto:moudy.eth@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-3 px-8 py-4 bg-charcoal dark:bg-pastel-dark-blue text-cream dark:text-white rounded-full font-medium text-lg shadow-xl shadow-pastel-blue/20 dark:shadow-black/30 hover:shadow-2xl hover:bg-gray-700 dark:hover:bg-pastel-dark-blue/90 transition-all"
                    >
                        <Mail size={20} />
                        <span>Say Hello</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
