import React from "react";
import bannerLogo from "../../assets/bannerLogo.png";
import bannerimg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto mt-15 grid grid-cols-2">
      <div className="space-y-7">
        <button className="flex items-center gap-1 p-2 px-4 border-none shadow-none btn rounded-full !bg-[#e1e7ff]">
          <img src={bannerLogo} alt="" className="w-4 h-4 rounded-full" />

          <span className="bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium text-[13px]">
            New: AI-Powered Tools Available
          </span>
        </button>

        <div>
          <h1 className="text-[#101727FF] text-[70px] font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[#627382FF] font-normal leading-7">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div className="flex gap-7">
          <button className="bg-linear-to-b from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-full hover:opacity-90 transition-all duration-300 hover:-translate-y-1 cursor-pointer font-semibold text-[16px]">
            Explore Products
          </button>

          {/* <div className="flex gap-1 justify-center items-center">
          <div><IoPlayOutline /></div>
          <button className="bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> Watch Demo</button>
          </div> */}
          <button className="group relative p-[1.5px] rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA]">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-3 border-blue-700">
              <div className="text-[#4F39F6] text-xl">
                <IoPlayOutline />
              </div>

              <span className="font-semibold text-[16px] bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Watch Demo
              </span>
            </div>
          </button>
        </div>
      </div>

      <div>
        <img src={bannerimg} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Banner;
