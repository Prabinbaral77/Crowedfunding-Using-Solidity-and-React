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
  const [totalRequest, setTotalRequest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fundingAmount, setFundingAmount] = useState();
  const [currentWatchRequest, setCurrentWatchRequest] = useState();
  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    reqAmount: "",
    receipentAddress: "",
    date: "",
  });

  const handleChange = async (e, name) => {
    if (name !== "date") {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    } else {
      const enteredDate = new Date(e.target.value);
      const currentDate = new Date(Date.now());
      const timeDiff = Math.abs(enteredDate - currentDate);
      const diffInSecond = Math.ceil(timeDiff / 1000);
      setFormData((prevState) => ({ ...prevState, [name]: diffInSecond }));
    }
  };

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

  const handleNewRequests = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask.");
      const crowedFundingContract = await getCrowedFundingContract();
      const { campaignName, description, reqAmount, receipentAddress, date } =
        formData;
      const parsedAmount = ethers.utils.parseEther(reqAmount);
      const requestHash = await crowedFundingContract.createRequest(
        campaignName,
        description,
        receipentAddress,
        date,
        parsedAmount._hex
      );
      setIsLoading(true);
      await requestHash.wait();
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getFundingRequests = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask.");
      const crowedFundingContract = await getCrowedFundingContract();
      const noOfRequests = await crowedFundingContract.noOfRequests();
      let allRequests = [];
      for (let i = 0; i < parseInt(noOfRequests._hex); i++) {
        const tempRequest = await crowedFundingContract.requests(i);
        allRequests.push(tempRequest);
      }

      const structuredRequests = allRequests.map((request) => ({
        requestNo: parseInt(request.requestNo._hex),
        title: request.title,
        description: request.description,
        receipent: request.recipient,
        deadline: new Date(request.deadline.toNumber() * 1000).toLocaleString(),
        target: parseInt(request.target._hex) / 10 ** 18,
        completed: request.completed,
        voter: parseInt(request.noOfVoters._hex),
        contributer: parseInt(request.noOfContributer._hex),
        raisedAmount: parseInt(request.raisedAmount._hex),
      }));

      setTotalRequest(structuredRequests);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const raiseFundForFunding = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask.");
      const crowedFundingContract = await getCrowedFundingContract();
      const requestNo = await currentWatchRequest?.requestNo;
      const parsedAmount = ethers.utils.parseEther(fundingAmount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: currentWatchRequest?.receipent,
            gas: "0x5208", //21000 GWEI in decimal equivalent to hex value 0x5208
            value: parsedAmount._hex,
          },
        ],
      });
      const raiseFundHash = await crowedFundingContract.sendEth(
        requestNo,
        parsedAmount._hex
      );
      setIsLoading(true);
      await raiseFundHash.wait();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getFundingRequests();
  }, [isLoading]);
  return (
    <CrowedFundingContext.Provider
      value={{
        currentAccount,
        connectWallet,
        formData,
        setFormData,
        handleChange,
        handleNewRequests,
        isLoading,
        totalRequest,
        raiseFundForFunding,
        currentWatchRequest,
        setCurrentWatchRequest,
        fundingAmount,
        setFundingAmount,
      }}
    >
      {children}
    </CrowedFundingContext.Provider>
  );
};
