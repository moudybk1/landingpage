import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import portrait from '../assets/portrait.png';

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index === words.length) {
            setIndex(0);
            return;
        }

        if (subIndex === words[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 inline-block min-w-[120px]">
            {words[index].substring(0, subIndex)}
            <span className={`w-[2px] h-[0.8em] bg-gray-400 dark:bg-gray-500 inline-block ml-1 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 order-2 md:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-pastel-blue/20 dark:bg-pastel-dark-blue/20 text-gray-600 dark:text-gray-300 text-sm font-medium tracking-wide border border-pastel-blue/30 dark:border-pastel-dark-blue/30 transition-colors"
                    >
                        Community Moderator
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-light text-charcoal dark:text-gray-100 tracking-tight leading-tight mb-8 transition-colors max-w-3xl">
                        Building <Typewriter words={['calm', 'trusted', 'active', 'safe']} /> <br />
                        Web3 communities.
                    </h1>

                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed transition-colors">
                        I moderate, support, and grow crypto communities with clarity, empathy, and structure.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-charcoal dark:bg-pastel-dark-blue text-cream dark:text-white rounded-full font-medium flex items-center space-x-2 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/30 hover:shadow-xl transition-all"
                        >
                            <span>View Projects</span>
                            <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white dark:border-white/10 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:bg-white/80 dark:hover:bg-white/20 transition-all"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visuals & Portrait */}
                <div className="relative h-full min-h-[400px] flex items-center justify-center order-1 md:order-2">

                    {/* Portrait Container with Color Reveal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: 'grayscale(100%) blur(2px)' }}
                        animate={{ opacity: 0.9, scale: 1, filter: 'grayscale(100%) blur(0.5px)' }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.03,
                            filter: 'grayscale(20%) blur(0px)', // Subtle color reveal
                            boxShadow: "0 0 60px -10px rgba(164, 181, 196, 0.5)" // Soft pastel glow
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute z-10 w-[460px] h-[460px] rounded-full overflow-hidden shadow-2xl shadow-pastel-blue/20 dark:shadow-black/40 cursor-default"
                    >
                        {/* Overlay for initial mute - fades out on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-pastel-blue/20 to-transparent dark:from-pastel-dark-blue/30 mix-blend-overlay z-10 pointer-events-none"
                            whileHover={{ opacity: 0.5 }} // Reduce overlay intensity on hover
                            transition={{ duration: 0.5 }}
                        />

                        <img
                            src={portrait}
                            alt="Portrait"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
