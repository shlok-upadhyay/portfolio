import { Link } from "react-router-dom";

const ToContact = () => {
  return (
    <section className="m-24 sm:mt-48 mb-20 mx-12">
      <div className="flex flex-col items-center gap-4">
        <h2 className="md:w-[600px] text-center text-3xl xl:text-4xl text-[#0b0a1a] font-bold">Prepared to turn your ideas into reality? I&apos;m here to help</h2>
        <Link to='/contact' className='mt-3'>
          <button className="min-w-[150px] py-3.5 bg-[#fe705a] hover:bg-[#fc5f47] rounded-full text-sm text-white font-semibold">
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ToContact;