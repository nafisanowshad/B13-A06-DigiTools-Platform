import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import navlogo from "../../assets/navlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative">
      <div className="w-10/12 mx-auto p-7 items-center flex justify-between">
        <div className="flex items-center gap-3">
          <div
            className="lg:hidden text-2xl text-black cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
          <img src={navlogo} alt="" className="w-32 md:w-auto" />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-9 font-semibold text-[#101727]">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center items-center font-semibold text-[#101727]">
          <div>
            <FiShoppingCart />
          </div>
          <div className="hidden sm:block cursor-pointer">Login</div>
          <div>
            <button className="px-5 py-2 md:px-7 md:py-3  btn rounded-full font-semibold text-[#FFFFFF] bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 z-50 ${open ? "top-17.5 opacity-100" : "-top-75 opacity-0"}`}
      >
        <ul className="flex flex-col gap-5 p-6 font-semibold text-[#101727] border-t">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li className="sm:hidden">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
