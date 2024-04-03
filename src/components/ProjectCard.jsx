/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LuLink2, LuGithub, LuVideo } from "react-icons/lu";

import LightBg from '../assets/images/work/project-bg-light.png';

const ProjectCard = ({ project }) => {
  return (
    <div className="group w-[300px] sm:w-[430px] h-[470px] sm:h-[450px] flex flex-col  border border-gray-300 rounded-[30px]">
      <div style={{'--image-url': `url(${LightBg})`}} className="relative bg-cover w-full h-[300px] rounded-[30px] flex items-center justify-center bg-[#fdf7f4] xl:bg-[image:var(--image-url)] xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
        <img src={project.img} alt="Project Image" className="absolute bottom-0 shadow-2xl w-[220px] h-[220px]" loading="lazy" />
        <div className="flex gap-4">
          {(project.link) ? (
            <Link to={project.link} target="_blank" className="bg-[#251f2a] hover:bg-[#362d3d] text-white text-2xl w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              {(project.name === 'Hotel Management System') ? 
              <LuVideo /> : <LuLink2 />
              }
            </Link>
          ) : null}
          <Link to={project.github} target="_blank" className="bg-[#251f2a] text-white text-2xl w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
            <LuGithub />
          </Link>
        </div>
      </div>
      <div className="px-8 py-6">
        <div className="w-[280px] sm:w-[400px] absolute mt-[-310px] ml-[-20px] flex flex-wrap gap-2">
          {(project.tech.map((tech, index) => (
            <div key={index} className="bg-[#fc5f47] text-white text-sm font-medium px-3 py-1 rounded-2xl">
              {tech}
            </div>
          )))}
        </div>
        <h4 className="text-lg text-[#0b0a1a] font-bold">{project.name}</h4>
        <p className="mt-2 text-sm font-medium tracking-wide text-[#696975]">{project.about}</p>
      </div>
    </div>
  );
};

export default ProjectCard;