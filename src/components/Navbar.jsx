import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#about">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#projects">
            Projects
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#testimonails">
            Testimonails
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Signup
        </button>
        
        <img
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-large font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#testominails"
          >
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};
