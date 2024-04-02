import { Link } from 'react-router-dom';

import DotsLight from '../assets/images/dots-light.svg';
import ProjectCard from './ProjectCard';

// eslint-disable-next-line react/prop-types
const LatestProject = ({ projects }) => {

  return (
    <section className="mt-24 xl:mt-48 mx-12">
      <div className="flex flex-col lg:flex-row lg:justify-around items-center">
        <div className="mb-10 lg:mb-0 flex flex-col items-center lg:items-start gap-6 lg:gap-4">
          <div className="flex items-center gap-2">
            <img src={DotsLight} alt="Dot" />
            <h2 className="text-3xl xl:text-4xl text-[#0b0a1a] font-bold">Latest Project</h2>
          </div>
          <p className='capitalize text-center lg:text-left w-[350px] text-[#4a4a47]'>This is the latest project I have completed. Check it out! {' '}
            <span className='md:hidden text-[#d34747] animate-pulse'>
              Click on card to view
            </span>
            <span className='hidden md:inline text-[#d34747] animate-pulse'>
              Hover on card to view
            </span>
          </p>
          <Link to='/projects' className='lg:mt-3'>
              <button className="min-w-[150px] py-3.5 bg-[#fe705a] hover:bg-[#fc5f47] rounded-full text-sm text-white font-semibold">
                All projects
              </button>
            </Link>
        </div>
        <div>
          <ProjectCard project={projects[0]} />
        </div>
      </div>
    </section>
  )
}

export default LatestProject;