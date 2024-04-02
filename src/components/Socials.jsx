import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Socials = ({ color }) => {
  return (
    <div className="flex gap-6 justify-center xl:justify-normal items-center">
      <a href="https://www.linkedin.com/in/shlok-upadhyay/" target="_blank">
        <button>
          <FaLinkedinIn size='1.2rem' className={`hover:scale-110 transition-all ${color}`} />
        </button>
      </a>  
      <a href="https://github.com/shlok-upadhyay" target="_blank">
        <button>
          <FaGithub size='1.2rem' color={color} className={`hover:scale-110 transition-all ${color}`} />
        </button>
      </a>
    </div>
  );
};

export default Socials;