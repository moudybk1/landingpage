import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="text-pastel-green dark:text-pastel-dark-green font-medium tracking-wider uppercase text-sm transition-colors">About Me</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-light text-charcoal dark:text-gray-100 transition-colors">
                        A Web3 worker who values systems and <span className="font-normal italic">people</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
                    <motion.div
                        initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="mb-6">
                            I’m a Web3 Community Moderator who enjoys helping people feel comfortable and safe in digital spaces. I support and moderate crypto communities across Discord and Telegram, handling daily questions, discussions, and community needs with a calm and friendly approach.
                        </p>
                        <p>
                            I care a lot about clear systems and healthy communication. Good moderation, for me, means setting clear rules, staying consistent, and keeping conversations respectful without making the space feel rigid. I believe communities grow best when people feel heard, supported, and trusted.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                    >
                        <p className="mb-6">
                            Outside of moderation, I like exploring new Web3 tools, organizing knowledge, and learning how communities grow in decentralized environments. My goal is simple: to help Web3 projects build welcoming communities where users feel confident to participate and connect.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-white/60 dark:bg-deep-card/60 rounded-xl border border-white dark:border-white/10 shadow-sm transition-colors">
                                <h3 className="font-semibold text-charcoal dark:text-gray-200 transition-colors">Trust</h3>
                                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400 transition-colors">Creating safe spaces through clear rules and consistency.</p>
                            </div>
                            <div className="p-4 bg-white/60 dark:bg-deep-card/60 rounded-xl border border-white dark:border-white/10 shadow-sm transition-colors">
                                <h3 className="font-semibold text-charcoal dark:text-gray-200 transition-colors">Empathy</h3>
                                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400 transition-colors">Listening first, responding calmly, and supporting users with care.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
