import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-cream dark:bg-deep-bg border-t border-gray-100/50 dark:border-gray-800/50 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    © {new Date().getFullYear()} Designed & Built with curiosity.
                </div>
                <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
                    <a href="https://t.me/mowdylowdy" target='blank' className="text-gray-500 dark:text-gray-400 hover:text-pastel-blue dark:hover:text-pastel-dark-blue transition-colors">Telegram</a>
                    <a href="https://x.com/mowdylowdy" target='blank' className="text-gray-500 dark:text-gray-400 hover:text-pastel-blue dark:hover:text-pastel-dark-blue transition-colors">Twitter</a>
                    <a href="https://www.linkedin.com/in/yogabayukusuma/" target='blank' className="text-gray-500 dark:text-gray-400 hover:text-pastel-blue dark:hover:text-pastel-dark-blue transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
