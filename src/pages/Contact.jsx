import { useEffect } from "react";

import ContactMe from "../components/ContactMe";

// eslint-disable-next-line react/prop-types
const Contact = ({ mobileNav }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className={`max-w-[1280px] mx-auto animate-fade ${mobileNav ? 'opacity-20' : 'opacity-100'}`}>
      <ContactMe />
    </main>
  );
};

export default Contact;