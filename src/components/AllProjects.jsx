/* eslint-disable react/prop-types */
import { useState } from 'react';

import DotLight from '../assets/images/dots-light.svg';
import ProjectCard from './ProjectCard';

const AllProjects = ({ projects }) => {
  let AllTab = ['All Projects'];
  let tabTitles = projects.map((project) => project.tech[0]);
  tabTitles = tabTitles.filter((value, index) => tabTitles.indexOf(value) === index);

  const tabs = AllTab.concat(tabTitles);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="mt-12 mx-12 mb-24">
      <div className='flex flex-col items-center gap-4'>
        <div className='mb-10 flex justify-center items-center gap-2'>
          <img src={DotLight} alt="Dot" />
          <h1 className='text-3xl md:text-4xl font-bold '>My Projects</h1>
        </div>
        <div className="mb-2 w-fit flex flex-col md:flex-row items-center rounded-full px-1 py-1 md:border md:border-gray-300">
          {tabs.map((tab, index) => (
            <button key={index} className={`py-3 px-10 font-medium text-sm rounded-full ${(tab === activeTab) ? 'bg-[#fe705a] text-white' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <p className='mb-4 md:hidden text-[#d34747] animate-pulse'>Click on card to view</p>
        <p className='mb-4 hidden md:block text-[#d34747] animate-pulse'>Hover on card to view</p>
        <div className='flex justify-center items-center gap-12 flex-wrap'>
          {
            activeTab === 'All Projects' ? (
              projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))) : (
              projects.map((project, index) => (
                (project.tech[0] === activeTab) ? (
                  <ProjectCard key={index} project={project} />
                ) : null
              )))
          }
        </div>
      </div>
    </section>
  );
};

export default AllProjects;