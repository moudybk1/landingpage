import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-charcoal dark:text-deep-text antialiased selection:bg-pastel-blue/40 dark:selection:bg-pastel-dark-blue/40 selection:text-gray-900 dark:selection:text-white transition-colors duration-500">
            <Background />
            <Navbar />
            <main className="flex-grow pt-20 px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
