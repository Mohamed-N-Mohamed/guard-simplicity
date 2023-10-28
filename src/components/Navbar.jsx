import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar p-4'>
      <ul className='flex justify-center items-center gap-4 md:pt-8'>
        {/* <li>Home</li> */}
        <Link to='/'>Home</Link>
        <Link to='/guards'>Guards</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
