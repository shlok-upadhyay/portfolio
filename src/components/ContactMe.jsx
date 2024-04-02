import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiMail, FiHome, FiUser, FiMessageSquare, FiArrowRight } from 'react-icons/fi';

import ContactImage from '../assets/images/contact/illustration-light.svg';

const ContactMe = () => {
  const contactData = [
    {
      icon: <FiMail />,
      text: 'shloku8@gmail.com',
    },
    {
      icon: <FiHome />,
      text: 'Mumbai, Maharashtra, India',
    }
  ];

  const inputStyles = 'flex h-[50px] w-full rounded-full border border-gray-300 text-[#251f2a] text-sm font-medium pr-12 pl-8 py-2 placeholder:text-[#6b6b6b] placeholder:font- focus-visible:outline-none focus-visible:ring-[#fe705a] focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50';

  const formRef = useRef(null);

  const [emailSent, setEmailSent] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_USER_ID
    ).then(
      () => setEmailSent(1),
      () => setEmailSent(2)
    );
    formRef.current.reset();
  };

  return (
    <section className="mt-8 md:mt-24 mx-12 mb-24">
      <div className="flex flex-col gap-12 lg:gap-24">
        <div className="flex justify-center lg:justify-between">
          <div className="flex flex-col items-center lg:items-start gap-8 mt-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-normal items-center gap-2 text-[#d34747]">
              <span className="w-[30px] h-[2px] bg-[#d34747]"></span>
              <div className="text-[#d34747] font-medium">Say hello 👋</div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#251f2a] capitalize">Let&apos;s work <span className="block mt-2">together.</span></h1>
            <p className="w-[270px] text-[#4a4a47]">Reach out to me through my email id or by filling the form below 👇</p>
          </div>
          <img src={ContactImage} alt="Contact Image" className='mr-12 hidden lg:flex' />
        </div>
        <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-12'>
          <div className='flex flex-col gap-4 lg:gap-10'>
            {contactData.map((data, index) => (
              <div key={index} className="flex justify-center lg:justify-normal items-center gap-2 lg:gap-6 text-center lg:text-left">
                <div className="text-lg text-[#d34747]">{data.icon}</div>
                <div className="text-[#0b0a1a] font-medium">{data.text}</div>
              </div>
            ))}
          </div>
          <form ref={formRef} onSubmit={sendEmail} method='POST' className='w-[290px] sm:w-[400px] md:w-[570px] flex flex-col gap-4'>
            <div className='relative flex items-center'>
              <input type="text" name='name' placeholder='Name' className={inputStyles} required/>
              <FiUser className='absolute right-6' />
            </div>
            <div className='relative flex items-center'>
              <input type="email" name='emailId' placeholder='Email' className={inputStyles} required/>
              <FiMail className='absolute right-6' />
            </div>
            <div className='relative flex items-center'>
              <textarea name="message" placeholder='Type Your Message Here.' className={`${inputStyles} py-4 min-h-[150px] rounded-xl`} required></textarea>
              <FiMessageSquare className='absolute right-6 top-4' />
            </div>
            <div className='flex flex-col md:flex-row justify-center lg:justify-normal items-center gap-4'>
              <button type='submit' className="w-[150px] flex justify-center items-center gap-1 py-3.5 bg-[#fe705a] hover:bg-[#fc5f47] rounded-full text-sm text-white font-semibold">
                Let&apos;s Talk
                <FiArrowRight size='1.2rem' />
              </button>
              {(emailSent !== 0) ? (
                (emailSent === 1) ?(
                  <div className='text-[#29bd39] font-medium'>Your Message is Successfully Sent!</div>
                ) : (
                <div className='text-[#bd282b] font-medium'>There was a problem. Try again!</div>
                )
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;