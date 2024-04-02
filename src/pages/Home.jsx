import { useEffect } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import LatestProject from '../components/LatestProject';
import ToContact from '../components/ToContact';

// eslint-disable-next-line react/prop-types
const Home = ({ mobileNav, projects }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className={`max-w-[1280px] mx-auto animate-fade ${mobileNav ? 'opacity-20' : 'opacity-100'}`}>
      <Hero />
      <About />
      <LatestProject projects={projects} />
      <ToContact />
    </main>
  );
};

export default Home;