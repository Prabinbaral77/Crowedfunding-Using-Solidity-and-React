import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const Campaign = ({ open, handleModal }) => {
  return (
    <Modal
      centered
      isOpen={open}
      toggle={handleModal}
      className="w-full rounded-full "
    >
      <ModalHeader
        // toggle={open}
        className="font-bold text-xl flex text-center mx-auto"
      >
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
            <span> Funding for School</span>
          </div>

          <div>
            <span className="font-bold">Description: </span>
            <span>
              {" "}
              Funding for School Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est id unde cum ipsam sint, aut hic.
            </span>
          </div>

          <div>
            <span className="font-bold">Required Amount: </span>
            <span> 7000</span>
          </div>

          <div>
            <span className="font-bold">Receipent Address: </span>
            <span> 0xbF33Ac0cfdf544gfd51a8FA03f9E</span>
          </div>

          <div>
            <span className="font-bold">Close Date: </span>
            <span> 22 may 2022</span>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="text-xl bg-yellow-500 px-1 py-2 w-[40%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center">
          Raise Fund
        </div>
        <div className="text-xl bg-yellow-500 px-1 py-2 w-[50%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-600 transition-all duration-100 text-center">
          Vote for Campaign
        </div>

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

export default Campaign;
