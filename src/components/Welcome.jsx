import React, { useState, useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import NewCampaignModal from "../utils/Modals/NewCampaign";
import { CrowedFundingContext } from "../context/CrowedFundingContext";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentAccount } = useContext(CrowedFundingContext);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[57rem] pt-[3rem] ms:pt-[6rem] ">
      <div className="text-white text-[3rem] ms:pt-[6rem] font-bold flex items-center justify-center text-center ">
        SmartContract Based CrowedFunding
      </div>
      <div className="flex gap-x-24 pt-[4rem] justify-center flex-col sm:flex-row gap-y-6 sm:gap-y-0 px-8 sm:px-2">
        <div
          className="text-xl text-center border-4 border-white px-7 py-3 rounded-full cursor-pointer bg-yellow-400 transition-all duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          New Campaign
        </div>
        <div className="text-xl text-center border-4 border-white px-7 py-3 rounded-full cursor-pointer bg-yellow-400 transition-all duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105">
          Running Campaign
        </div>
      </div>
      <div className="flex text-white mt-[6rem] ms:mt-[10rem]  h-[12rem] w-[20rem] md:h-[15rem] md:w-[30rem] eth-card mx-auto rounded-2xl flex-col">
        <div className="flex justify-between">
          <div>
            <FaEthereum
              size={70}
              className="ml-4 mt-2 border-2 p-1 rounded-full"
            />
          </div>
          <div>
            <RiFundsFill
              size={70}
              className="mr-4 mt-2 p-1 border-2 rounded-full"
            />
          </div>
        </div>
        <div className="pt-[4rem] text-center font-bold">
          <span className="text-xl">Wallet Address</span>:
          {shortenAddress(currentAccount)}
        </div>
      </div>
      <hr className="mt-[9rem] w-[70%] mx-auto text-white" />
      <NewCampaignModal open={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Welcome;
