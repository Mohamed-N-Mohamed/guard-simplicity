import React from "react";
import { useEffect } from "react";

const Footer = () => {
  function getFullYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  const year = getFullYear();
  return <footer className="footer p-8 bg-black text-white text-center">
    <p className="text-lg">Copyright &copy; {year} by Guard Simplicity</p>

  </footer>
};

export default Footer;
