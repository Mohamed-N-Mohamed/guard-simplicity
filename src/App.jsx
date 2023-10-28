import { useState } from "react";
import Navbar from "./components/Navbar";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { BsBookmarkCheck } from "react-icons/bs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <div className='header'>
        <Navbar />
        <div className='header-description text-white p-4 text-center'>
          <h1 className='text-2xl pt-16 md:text-3xl md:pt-32'>
            Connecting Safety with Convenience - Your Trusted Source for
            Freelance Security Guards
          </h1>
          <p className='text-lg px-4 md:text-xl pt-8 md:px-32'>
            At Guard Simplicity, we've reimagined the way you access security
            services. Our platform is designed to make finding and hiring
            freelance security guards easier and more efficient than ever
            before. Whether you need security for an event, property, or any
            other purpose, we've simplified the process to just a few clicks on
            our website.
          </p>
        </div>
        <div className='social-links text-white flex justify-center items-center gap-4'>
          <FaYoutube size={32} />
          <FaFacebook size={32} />
          <FaTwitter size={32} />
          <FaInstagram size={32} />
        </div>
      </div>

      <div className='Our Services p-8'>
        <h2 className='text-center text-2xl'>Our Services</h2>

        <div className='services flex flex-col md:flex-row items-center gap-4'>
          <div className='search border text-center '>
            <RiUserSearchLine size={32} className='mx-auto mt-2' />
            <h3 className='text-xl pt-4 pb-4'>Quick Search</h3>
            <p className='text-sm pb-2 2 px-4'>
              A search function that enables customers to find nearby
              experienced security guards based on location, availability, and
              specific skills or qualifications
            </p>
          </div>

          <div className='profile border text-center'>
            <GrShieldSecurity size={32} className='mx-auto mt-2' />
            <h3 className='text-xl pt-4 pb-4'>Guard Profiles</h3>
            <p className='text-sm pb-2 2 px-4'>
              Detailed profiles for each security guard, including their
              experience, skills, certifications, and reviews from previous
              customers.
            </p>
          </div>

          <div className='booking border text-center'>
            <BsBookmarkCheck size={32} className='mx-auto mt-2' />
            <h3 className='text-xl pt-4 pb-4'>Instant Booking</h3>
            <p className='text-sm pb-2 2 px-4'>
              A feature that allows customers to book a security guard for
              immediate or future dates and times with just a few clicks
            </p>
          </div>

          <div className='pricing border text-center'>
            <RiUserSearchLine size={32} className='mx-auto mt-2' />
            <h3 className='text-xl pt-4 pb-4'>Transparent Pricing</h3>
            <p className='text-sm pb-2 px-4'>
              Clear and transparent pricing structures, including options for
              hourly, daily, or event-based rates, with no hidden fees
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
