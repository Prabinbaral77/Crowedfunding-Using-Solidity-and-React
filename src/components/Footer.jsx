import React from "react";
import Logo from "../../assets/Logo.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[4rem] text-gray-200">
      <div className="flex items-center justify-center gap-x-4 rounded-xl overflow-hidden">
        <div className="w-12">
          <img src={Logo} alt="company logo" className="w-full object-cover" />
        </div>
        <div>Blockchain Disaster PVT LTD.</div>
      </div>
      <div className="flex flex-col items-center justify-center pt-[2rem]">
        <div className="flex items-center">
          <FaRegCopyright />{" "}
          <div>
            Developed and Designed By{" "}
            <span className="text-yellow-400">Prabin Baral</span>.
          </div>
        </div>
        <div>All Right Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
