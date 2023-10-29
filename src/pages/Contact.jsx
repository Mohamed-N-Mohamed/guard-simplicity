import React from "react";
import Navbar from "../components/Navbar";
import { AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='contact-us'>
      <Navbar textColor='text-black' />
      <h2>National Services, Local Support</h2>
      <p>
        If you’d like to find out more about our services get in touch with TSS
        today!
      </p>
      <p>
        Our dedicated customer service team is waiting for your call and will
        assist you with any queries
      </p>

      <div className='form'>
        <h3>Get in Touch</h3>
        <div className='phone flex items-center'>
          <AiFillPhone size={32} />
          <span>02085235533</span>
        </div>

        <div className='address flex items-center'>
          <FaLocationDot size={32} />
          <span>UK, London</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
