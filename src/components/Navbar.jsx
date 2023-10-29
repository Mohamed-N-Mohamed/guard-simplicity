import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ textColor }) => {
  return (
    <nav className={`navbar ${textColor}`}>
      <ul className='flex pl-16 items-center gap-4 md:pt-8'>
        <Link to='/' className='hover:border-b text-lg'>
          Home
        </Link>
        <Link to='/guards' className='hover:border-b text-lg'>
          Guards
        </Link>
        <Link to='/contact' className='hover:border-b text-lg'>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
