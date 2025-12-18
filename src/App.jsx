import React from 'react';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <SmoothScroll>
        <div className="space-y-12">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </SmoothScroll>
    </Layout>
  );
}

export default App;
