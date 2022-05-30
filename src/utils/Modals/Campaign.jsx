import React, { useContext, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CrowedFundingContext } from "../../context/CrowedFundingContext";
import RaiseFund from "./RaiseFund";

const Campaign = ({ open, handleModal }) => {
  const [fundRaiseModal, SetFundRaiseModal] = useState(false);
  const handleFundRaiseModal = () => {
    SetFundRaiseModal(!fundRaiseModal);
  };
  const { currentWatchRequest } = useContext(CrowedFundingContext);

  return (
    <div>
      <Modal
        centered
        isOpen={open}
        toggle={handleModal}
        className="w-full rounded-full "
      >
        <ModalHeader className="font-bold text-xl flex text-center mx-auto">
          Campaign Details
        </ModalHeader>
        <ModalBody>
          <div className="w-[86%] pb-2 text-red-600 mx-auto text-sm font-bold">
            Note: You need to be contributer to vote and make the campaign
            successful
          </div>
          <div className="flex flex-col mx-[2rem] gap-y-4">
            <div>
              <span className="font-bold">Name: </span>
              <span> {currentWatchRequest?.title}</span>
            </div>

            <div>
              <span className="font-bold">Description: </span>
              <span> {currentWatchRequest?.description}</span>
            </div>

            <div>
              <span className="font-bold">Required Amount: </span>
              <span> {currentWatchRequest?.target}</span>
            </div>

            <div>
              <span className="font-bold">Receipent Address: </span>
              <span className="text-[0.6rem]">
                {" "}
                {currentWatchRequest?.receipent}
              </span>
            </div>

            <div>
              <span className="font-bold">Close Date: </span>
              <span> {currentWatchRequest?.deadline}</span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div
            className="text-xl bg-yellow-500 px-1 py-2 w-[40%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center"
            onClick={() => SetFundRaiseModal(true)}
          >
            Raise Fund
          </div>
          {/* <div className="text-xl bg-yellow-500 px-1 py-2 w-[50%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center">
            Vote for Campaign
          </div> */}

          <Button
            onClick={handleModal}
            className="bg-red-600 hover:bg-red-500 absolute -top-5 -right-5"
          >
            X
          </Button>
        </ModalFooter>
      </Modal>
      <RaiseFund open={fundRaiseModal} handleModal={handleFundRaiseModal} />
    </div>
  );
};

export default Campaign;
