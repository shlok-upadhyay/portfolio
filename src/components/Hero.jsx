import { Link } from "react-router-dom";
import { FiSend, FiDownload } from "react-icons/fi";
import { MdAssessment, MdAssignment, MdCalendarMonth } from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";

import Socials from "./Socials";
import ImageBg1 from "../assets/images/hero/shape-2-light.svg";
import DevImage from "../assets/images/hero/developer.png";
import ImageBg2 from "../assets/images/hero/shape-1.svg";
import Badge from "./Badge";
import Resume from "../assets/resume/Shlok-Upadhyay.pdf";

const Hero = () => {
    return (
    <section className="mt-12 md:mt-20 mx-12">
      <div className='flex justify-center xl:justify-between'>
        <div className="flex flex-col text-center xl:text-left gap-6 xl:gap-4">
          <div className='uppercase tracking-[3px] font-medium text-sm text-[#b95858]'>Software developer</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#251f2a]">Hello, my name is <span className="block mt-1 md:mt-3">Shlok Upadhyay</span></h1>
          <p className="max-w-[400px] mx-auto xl:mx-0 text-[#4a4a47] mt-2">Driven React JS developer with Core Java knowledge. Fresh graduate eager to apply skills in practical, real-world development projects.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-normal gap-4 mt-2">
            <Link to='/contact'>
              <button className="min-w-[150px] flex justify-center items-center gap-2 py-3.5 bg-[#fe705a] hover:bg-[#fc5f47] rounded-full text-sm text-white font-semibold">
                Contact me
                <FiSend size='1rem' />
              </button>
            </Link>
            <a href={Resume} download>
              <button className="min-w-[150px] flex justify-center items-center gap-2 py-3.5 bg-[#251f2a] hover:bg-[#362d3d] rounded-full text-sm text-white font-semibold">
                Download CV
                <FiDownload size='1rem' />
              </button>
            </a>
          </div>
          <div className="pb-12 pt-5">
            <Socials />
          </div>
        </div>
        <div className="mr-[445px] hidden xl:flex">
          <img src={ImageBg1} alt="Image Background" className="w-[400px] h-[400px] absolute" />
          <img src={ImageBg2} alt="Image Background" className="w-[400px] h-[400px] absolute" />
          <img src={DevImage} alt="Shlok Upadhyay" className="w-[360px] h-[474px] absolute ml-[20px] " />
          <div className="absolute mt-[100px] ml-[-80px]">
            <Badge icon={<MdAssessment />} endCountNum={8.74} badgeText="Engg. CGPA" />
          </div>
          <div className="absolute mt-[300px] ml-[-30px]">
            <Badge icon={<MdAssignment />} endCountNum={5} badgeText="Finished Projects" />
          </div>
          <div className="absolute mt-[220px] ml-[280px]">
            <Badge icon={<MdCalendarMonth />} endCountNum={23} badgeText="Batch Passout" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-center mt-12 xl:mt-20 text-2xl text-[#ff4545] animate-bounce">
        <RiArrowDownDoubleFill />
      </div>
    </section>
  )
}

export default Hero