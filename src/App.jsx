import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import ProjectImage1 from './assets/images/work/1.png';
import ProjectImage2 from './assets/images/work/2.png';
import ProjectImage3 from './assets/images/work/3.png';
import ProjectImage4 from './assets/images/work/4.png';
import ProjectImage5 from './assets/images/work/5.png';

const App = () => {
  const projects = [
    {
      img: ProjectImage1,
      name: 'Get Fit Hub Website',
      about: 'A comprehensive exercise guide of over 1300 exercises fetched through API built using React, Material UI & Rapid API.',
      tech: ['React JS', 'Material UI', 'Rapid API'],
      link: 'https://getfithub.netlify.app/',
      github: 'https://github.com/shlok-upadhyay/get-fit-hub'
    },
    {
      img: ProjectImage2,
      name: 'My Portfolio Website',
      about: 'A responsive portfolio website (you are currently viewing) that showcases my personal details, skills & projects.',
      tech: ['React JS', 'Tailwind CSS'],
      github: ''
    },
    {
      img: ProjectImage3,
      name: 'Simple ToDo List Website',
      about: 'A simple ToDo List website to organize daily work that is built using React JS, Redux Toolkit & Tailwind CSS.',
      tech: ['React JS', 'Redux Toolkit', 'Tailwind CSS'],
      link: 'https://rtk-todolist.netlify.app/',
      github: 'https://github.com/shlok-upadhyay/rtk-todo'
    },
    {
      img: ProjectImage4,
      name: 'AWS Reverse Proxy',
      about: 'A website built using React JS & Tailwind CSS, hosted on AWS and created a Reverse Proxy to isolate web servers.',
      tech: ['AWS', 'React JS', 'Tailwind CSS'],
      link: 'http://my-react-app-lb-303830080.ap-south-1.elb.amazonaws.com/',
      github: 'https://github.com/shlok-upadhyay/aws-revproxy-react-app'
    },
    {
      img: ProjectImage5,
      name: 'Hotel Management System',
      about: 'A Hotel Management System desktop app built using Core Java concepts - Swing & AWT, & MySQL used for database.',
      tech: ['Core Java', 'MySQL'],
      link: 'https://drive.google.com/file/d/1fonQMvWqjC5tTNSzJ73HHQPBG-7bQQNh/view?usp=sharing',
      github: 'https://github.com/shlok-upadhyay/hotel-management-system'
    },
  ];

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Routes>
        <Route path="/" element={<Home mobileNav={mobileNav} projects={projects} />} />
        <Route path="/projects" element={<Projects mobileNav={mobileNav} projects={projects} />} />
        <Route path="/contact" element={<Contact mobileNav={mobileNav} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
