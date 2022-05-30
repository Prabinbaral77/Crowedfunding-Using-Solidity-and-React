import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { CrowedFundingContext } from "../../context/CrowedFundingContext";
import { PulseLoader } from "react-spinners";

const RaiseFund = ({ open, handleModal }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const {
    currentAccount,
    currentWatchRequest,
    raiseFundForFunding,
    setFundingAmount,
    fundingAmount,
    isLoading,
  } = useContext(CrowedFundingContext);

  useEffect(() => {
    if (isNaN(fundingAmount)) {
      setErrorMsg("Please Enter valid number.");
    } else if (fundingAmount < 0.000001) {
      setErrorMsg("Minimum of 0.000001 ether is required.");
    } else {
      setErrorMsg("");
    }
  }, [fundingAmount]);
  return (
    <Modal
      centered
      isOpen={open}
      toggle={handleModal}
      className="w-full rounded-full "
    >
      <ModalHeader className="font-bold text-xl flex text-center mx-auto">
        Funding Details({currentWatchRequest?.title})
      </ModalHeader>
      <ModalBody>
        {errorMsg && (
          <p className="font-bold text-sm text-red-500 text-center py-2">
            {errorMsg}
          </p>
        )}
        <div className="flex flex-col mx-[2rem] gap-y-4">
          <div>Current Account Address:</div>
          <Input bsSize="" disabled value={currentAccount} />
          <div>
            <p>Enter the amount of ETH that you want to Donate.: </p>
            <Input
              bsSize=""
              placeholder="x ETH"
              name="EthAmount"
              required
              value={fundingAmount}
              onChange={(e) => setFundingAmount(e.target.value)}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        {fundingAmount ? (
          <div
            className="text-xl bg-yellow-500 px-1 py-2 w-[40%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center"
            onClick={raiseFundForFunding}
          >
            {isLoading ? (
              <PulseLoader color="#111827" size={5} />
            ) : (
              <span>Send Eth</span>
            )}
          </div>
        ) : (
          <div className="text-xl bg-yellow-500 px-1 py-2 w-[40%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center">
            Send Eth
          </div>
        )}

        <Button
          onClick={handleModal}
          className="bg-red-600 hover:bg-red-500 absolute -top-5 -right-5"
        >
          X
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RaiseFund;
