// src/components/Header.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // arrow icon
import { HiOutlineMenuAlt3 } from 'react-icons/hi'; // optional: mobile menu icon

const Header = () => {
  return (
    <header className="flex  items-center justify-between px-8 py-4 bg-[#0F3D3A] absolute top-0 left-0 w-full z-10 border-b border-white/10">
      {/* Logo */}
      <div className="text-white font-bold text-3xl">
        <span className="text-green-400">E</span>thice
      </div>

      {/* Desktop Nav */}
<nav className="hidden md:flex space-x-8 text-white font-medium">
  {["Services", "About", "Case Studies", "Blog", "Contact"].map((item) => (
    <a key={item} href="#" className="relative group">
      <span className="hover:text-green-300 transition-colors duration-300">
        {item}
      </span>
      <span
        className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-green-300 transition-all duration-300 transform group-hover:w-full"
      ></span>
    </a>
  ))}
</nav>



      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black  text-[14px] px-5 py-2 rounded-md shadow-md flex justify-between items-center gap-2">
          Contact Us <FiArrowRight />
        </button>

        {/* Mobile Menu Icon (Optional) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </header>
  );
};

export default Header;
