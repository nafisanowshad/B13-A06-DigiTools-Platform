import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import navlogo from '../../assets/navlogo.png';

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto p-7 items-center flex justify-between'>
            <div>
                <img src={navlogo} alt="" />
            </div>
            <div>
                <ul className='flex gap-9 font-semibold text-[#101727]'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='flex gap-4 justify-center items-center font-semibold text-[#101727]'>
                <div><FiShoppingCart /></div>
                <div>Login</div>
                <div><button className='btn rounded-full font-semibold text-[#FFFFFF] bg-linear-to-r from-[#4F39F6] to-[#763ed7] border-none transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg'>Get Started</button></div>
            </div>
        </div>
    );
};

export default Navbar;