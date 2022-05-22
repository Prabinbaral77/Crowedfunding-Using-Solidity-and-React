import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
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
        <div className="hidden md:flex absolute right-12 bg-yellow-400 px-7 py-2 rounded-xl cursor-pointer text-gray-500 hover:text-yellow-400 hover:bg-gray-500 transition-all duration-150 ease-in-out">
          Connect wallet
        </div>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer absolute top-5 right-8"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            className="text-white md:hidden cursor-pointer absolute top-5 right-8 "
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="text-white z-10 fixed top-0 right-0 p-3 w-[70vw] h-[70vh] shadow-2xl md:hidden flex flex-col justify-start items-end rounded-md blue-glassmorphism text-xl gap-y-4">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <div className="cursor-pointer hover:text-yellow-400 ">About</div>
            <div className="cursor-pointer hover:text-yellow-400 ">
              Transactions
            </div>
            <div className="cursor-pointer hover:text-yellow-400 ">
              Current Requests
            </div>
            <div className="bg-yellow-400 font-semibold px-2 py-1 rounded-lg ">
              Connect wallet
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
