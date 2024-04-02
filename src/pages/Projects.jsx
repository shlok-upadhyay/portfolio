import { useEffect } from "react";

import AllProjects from "../components/AllProjects";

// eslint-disable-next-line react/prop-types
const Projects = ({ mobileNav, projects }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className={`max-w-[1280px] mx-auto animate-fade ${mobileNav ? 'opacity-20' : 'opacity-100'}`}>
      <AllProjects projects={projects} />
    </main>
  );
};

export default Projects;