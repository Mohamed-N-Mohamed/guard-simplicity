import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar text-white'>
      <ul className='flex justify-center items-center gap-4 md:pt-8'>
        {/* <li>Home</li> */}
        <Link to='/' className='hover:border-b'>
          Home
        </Link>
        <Link to='/guards' className='hover:border-b'>
          Guards
        </Link>
        <Link to='/contact' className='hover:border-b'>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
