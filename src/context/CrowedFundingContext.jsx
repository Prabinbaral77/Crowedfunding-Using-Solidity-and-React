import React, { useState, useEffect, createContext } from "react";
import { contractABI, contractAddress } from "../utils/constant";
import { ethers } from "ethers";

const { ethereum } = window;
console.log(ethereum, "eth");

export const CrowedFundingContext = createContext();

const getCrowedFundingContract = async () => {
  const providers = new ethers.providers.Web3Provider(ethereum);
  const signers = providers.getSigner();
  const crowedFundingContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signers
  );
  return crowedFundingContract;
};

export const CrowedFundingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install MetaMask!");
      const account = ethereum.request({ method: "eth_accounts" });
      if (account.length) {
        setCurrentAccount(account[0]);
        console.log(account);
      } else {
        console.log("No accounts are found.");
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <CrowedFundingContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </CrowedFundingContext.Provider>
  );
};
