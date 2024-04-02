import { FiUser, FiMail, FiHome } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandVscode, TbBrandGit, TbBrandGithub, TbBrandAws } from "react-icons/tb";
import { BsSuitcaseLg } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";

import DotsLight from '../assets/images/dots-light.svg';
import ImageBgLight from '../assets/images/about/shape-light.svg';
import DevImage from '../assets/images/about/developer.png';
import { useState } from "react";

const About = () => {

  const infoData = [
    {
      icon: <FiUser />,
      data: 'Shlok Upadhyay',
    },
    {
      icon: <FiMail />,
      data: 'shloku8@gmail.com',
    },
    {
      icon: <LuGraduationCap />,
      data: 'B.E. Computer Engineering',
    },
    {
      icon: <FiHome />,
      data: 'Mumbai, Maharashtra, India',
    }
  ];

  const eductionData = [
    {
      institute: 'Shree L.R. Tiwari College of Engineering',
      degree: 'B.E. in Computer Engineering',
      duration: '2020 - 2023'
    },
    {
      institute: 'Thakur Polytechnic',
      degree: 'Diploma in Computer Engineering',
      duration: '2017 - 2020'
    },
    {
      institute: "Queen Mary's High School",
      degree: 'S.S.C.',
      duration: '2016 - 2017'
    }
  ];

  const experienceData = [
    {
      company: 'Shree L.R. Tiwari College of Engineering',
      post: 'AWS Intern (In-House)',
      duration: 'June, 2022 - July, 2022'
    }
  ];

  const skillsData = [
    {
      name: 'HTML, CSS, JavaScript'
    },
    {
      name: 'React JS, Redux Toolkit'
    },
    {
      name: 'Tailwind CSS, Material UI'
    },
    {
      name: 'Core Java, MySQL'
    },
    {
      name: 'Quick Learner, Communication Skills'
    }
  ];

  const toolsData = [
    {
      icon: <TbBrandVscode />
    },
    {
      icon: <TbBrandGit />
    },
    {
      icon: <TbBrandGithub />
    },
    {
      icon: <TbBrandAws />
    }
  ];

  const tabs = ['Personal Info', 'Qualifications', 'Skills'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="mt-8 md:mt-24 mx-12">
      <div className="flex justify-center items-center gap-3">
        <img src={DotsLight} alt="Dot" />
        <h2 className="text-3xl xl:text-4xl text-[#0b0a1a] font-bold">About me</h2>
      </div>
      <div className="mt-8 md:mt-16 flex justify-center xl:justify-normal">
        <div className="hidden xl:flex">
          <img src={ImageBgLight} alt="Image Background" className="w-[400px] h-[400px] absolute" />
          <img src={DevImage} alt="Image Background" className="w-[478px] h-[600px] absolute ml-[-15px] mt-[-5px]" />
        </div>
        <div className="xl:ml-[590px] flex flex-col items-center xl:items-start">
          <div className="w-fit flex flex-col md:flex-row items-center rounded-full px-1 py-1 md:border md:border-gray-300">
            {tabs.map((tab, index) => (
              <button key={index} className={`py-3 px-10 font-medium text-sm rounded-full ${(tab === activeTab) ? 'bg-[#fe705a] text-white' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="xl:h-[400px]">
            {(activeTab === 'Personal Info') ? (
              <div className="mt-8 flex flex-col items-center xl:items-start gap-4">
                <h3 className="text-2xl xl:text-3xl text-center xl:text-left text-[#251f2a] font-bold">React JS Enthusiast with Core Java Skills</h3>
                <p className="w-[300px] md:w-[450px] text-center xl:text-left text-[#4a4a47]">Detail-oriented React JS Developer with Java proficiency. Specializes in creating seamless user experiences and efficient, scalable front-end solutions.</p>
                <div className="grid xl:grid-cols-2 xl:grid-rows-2 gap-x-6 gap-y-4 mt-4">
                  {infoData.map((info, index) => (
                    <div key={index} className="flex justify-center xl:justify-normal items-center gap-3">
                      <div className="text-lg text-[#d34747]">{info.icon}</div>
                      <div className="text-[#0b0a1a] font-medium">{info.data}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <h4 className="text-[#d34747] text-center xl:text-left font-medium">Language Skill</h4>
                  <hr className="w-[200px] md:w-[400px]" />
                  <p className="text-center xl:text-left text-[#0b0a1a]">English, Hindi, Marathi</p>
                </div>
              </div>
            ) : (activeTab === 'Qualifications') ? (
              <div className="mt-8 flex flex-col items-center xl:items-start gap-4">
                <h3 className="text-2xl xl:text-3xl text-center xl:text-left text-[#251f2a] font-bold">My Awesome Journey</h3>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 mt-4">
                  <div className="w-[230px] flex flex-col items-center sm:items-start gap-2">
                    <div className="flex items-center gap-3 text-[#d34747]">
                      <LuGraduationCap size='1.6rem' />
                      <h4 className="text-xl font-semibold">Education</h4>
                    </div>
                    {eductionData.map((data, index) => (
                    <div key={index} className="flex group mt-2">
                      <div className="h-full w-[1px] bg-gray-300 ml-2 mr-8">
                        <div className="w-[11px] h-[11px] ml-[-5px] rounded-full bg-[#d34747] group-hover:translate-y-[90px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="text-lg text-[#0b0a1a] font-medium leading-6">{data.institute}</div>
                        <div className="mt-1 text-[#5d5d5d] text-sm font-medium">{data.degree}</div>
                        <div className="mt-2 flex items-center gap-2 text-[#d34747]">
                          <MdCalendarToday />
                          <div className="font-medium text-sm">
                            {data.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                  <div className="w-[230px] flex flex-col items-center sm:items-start gap-2">
                    <div className="flex items-center gap-3 text-[#d34747]">
                      <BsSuitcaseLg size='1.3rem' />
                      <h4 className="text-xl font-semibold">Experience</h4>
                    </div>
                    {experienceData.map((data, index) => (
                    <div key={index} className="flex group mt-2">
                      <div className="h- w-[1px] bg-gray-300 ml-2 mr-8">
                        <div className="w-[11px] h-[11px] ml-[-5px] rounded-full bg-[#d34747] group-hover:translate-y-[90px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="text-lg text-[#0b0a1a] font-medium leading-6">{data.company}</div>
                        <div className="mt-1 text-[#5d5d5d] text-sm font-medium">{data.post}</div>
                        <div className="mt-2 flex items-center gap-2 text-[#d34747]">
                          <MdCalendarToday />
                          <div className="font-medium text-sm">
                            {data.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center xl:items-start gap-4">
                <h3 className="text-2xl xl:text-3xl text-center xl:text-left text-[#251f2a] font-bold">Skills I Have & Tools I Work On</h3>
                <div className="flex flex-col gap-6">
                  <div className="mt-3 flex flex-col items-center xl:items-start gap-2">
                    <h4 className="text-[#0b0a1a] text-lg font-bold">Skills</h4>
                    <hr className="w-[200px] md:w-[400px]" />
                    {skillsData.map((data, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="font-medium text-[#0b0a1a]">{data.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col items-center xl:items-start gap-2">
                    <h4 className="text-[#0b0a1a] text-lg font-bold">Tools</h4>
                    <hr className="w-[200px] md:w-[400px]" />
                    <div className="flex gap-6 text-5xl text-[#fe705a]">
                      {toolsData.map((data, index) => (
                        <div key={index}>
                          {data.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;