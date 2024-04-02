import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

import Logo from '../assets/images/logo.png';
import Socials from '../components/Socials';

// eslint-disable-next-line react/prop-types
const Header = ( { mobileNav, setMobileNav }) => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    });
  
    return () => {
      window.removeEventListener('scroll', scrollYPos);
    }
  });
  

  const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  const location = useLocation();

  return (
    <header className={`${header ? 'py-[1px] bg-white shadow-lg' : 'py-[1px]'} sticky top-0 z-30 transition-all duration-200`}>
      {/* Regular Nav */}
      <div className={`max-w-[1280px] mx-auto bg-white ${mobileNav ? 'opacity-20' : 'opacity-100'}`}>
        <nav className="flex justify-between items-center my-6 mx-12 ease-in-out duration-300">
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <div className="flex items-center gap-5 md:gap-10">
            <div className="hidden md:flex gap-8 ">
              {links.map((link, index) => (
                <Link to={link.path} key={index} className={`relative hover:text-[#d34747] transition-all font-medium ${link.path === location.pathname ? 'text-[#d34747]' : ''}`}>
                  {link.path === location.pathname && (
                    <motion.span initial={{ y: '100%' }} animate={{ y: '0' }} transition={{ type: 'tween' }} layoutId="underline" className="absolute left-0 top-full h-[2px] bg-[#d13939] w-full" />
                  )}
                  {link.name}
                </Link>
              ))}
            </div>
            <button className="flex md:hidden" onClick={() => setMobileNav(!mobileNav)}>
              <RxHamburgerMenu size='1.4rem' />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed w-[70%] bg-white top-0 h-full ease-in-out duration-500 border-l border-l-gray-900 ${mobileNav ? 'right-0' : 'right-[-100%]'}`}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <button className="my-4 mx-4 self-end border-[1.5px] border-[#fe705a] rounded p-[2px]" onClick={() => setMobileNav(!mobileNav)}>
              <RxCross2 size='1.5rem' />
            </button>
            <Link to='/' onClick={() => setMobileNav(!mobileNav)}>
              <img src={Logo} alt='Logo' />
            </Link>          
            <div className="mt-12 flex flex-col gap-8 text-xl text-center">
              {links.map((link, index) => (
                <Link to={link.path} key={index} className={`relative hover:text-[#d34747] transition-all font-medium ${link.path === location.pathname ? 'text-[#d34747]' : ''}`} onClick={() => setMobileNav(!mobileNav)}>
                  {link.name}
                </Link> 
              ))
              }
            </div>  
          </div>
          <div className="pb-12">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;