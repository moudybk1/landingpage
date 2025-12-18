import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
    const { scrollY } = useScroll();

    // Parallax transforms for blobs
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

    return (
        <div className="fixed inset-0 -z-10 bg-cream dark:bg-deep-bg overflow-hidden transition-colors duration-700">
            {/* Soft gradient blobs - darker/less opacity in dark mode */}
            <motion.div
                style={{ y: y1 }}
                animate={{
                    x: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pastel-blue/30 dark:bg-pastel-dark-blue/10 rounded-full blur-[100px] transition-colors duration-700"
            />

            <motion.div
                style={{ y: y2 }}
                animate={{
                    x: [0, -70, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-pastel-green/20 dark:bg-pastel-dark-green/05 rounded-full blur-[120px] transition-colors duration-700"
            />

            <motion.div
                style={{ y: y3 }}
                animate={{
                    x: [0, 50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pastel-lavender/25 dark:bg-pastel-dark-lavender/10 rounded-full blur-[110px] transition-colors duration-700"
            />

            {/* Subtle grid overlay - lighter in dark mode */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50 transition-all duration-700" />
        </div>
    );
};

export default Background;
