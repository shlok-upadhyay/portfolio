import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-[130px] bg-[#212030] animate-fade">
      <div className="flex flex-col items-center gap-4">
        <Socials color='text-[#fe705a]' />
        <p className='text-sm font-light text-[#7b7b7b]'>Copyright &copy; Shlok Upadhyay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;