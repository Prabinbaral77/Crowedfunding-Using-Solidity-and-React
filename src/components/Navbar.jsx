import React from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gradient-bg-welcome w-full h-[4rem] gap-x-8 md:gap-x-16 text-gray-200 relative ">
      <div className="w-[50px] cursor-pointer absolute left-24">
        <img src={Logo} className="w-full h-full rounded-2xl" />
      </div>
      <div className="cursor-pointer hover:text-yellow-400 hidden md:flex">
        About
      </div>
      <div className="cursor-pointer hover:text-yellow-400 hidden md:flex">
        Transactions
      </div>
      <div className="cursor-pointer hover:text-yellow-400 hidden md:flex">
        Current Requests
      </div>
      <div className="absolute right-12 bg-yellow-400 px-7 py-2 rounded-xl cursor-pointer text-gray-500 hover:text-yellow-400 hover:bg-gray-500 transition-all duration-150 ease-in-out">
        Connect wallet
      </div>
    </div>
  );
};

export default Navbar;
