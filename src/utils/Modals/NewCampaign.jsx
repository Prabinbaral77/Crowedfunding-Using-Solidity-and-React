import React, { useContext } from "react";
import { CrowedFundingContext } from "../../context/CrowedFundingContext";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const NewCampaignModal = ({ open, closeModal }) => {
  const { currentAccount } = useContext(CrowedFundingContext);
  return (
    <Modal
      centered
      isOpen={open}
      toggle={closeModal}
      className="w-full rounded-full "
    >
      <ModalHeader
        toggle={open}
        className="font-bold text-xl flex text-center mx-auto"
      >
        Create New Campaign
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col mx-[2rem] gap-y-4">
          <div>
            <p>Name: </p>
            <Input bsSize="" placeholder="Name of Campaign" />
          </div>

          <div>
            <p>Descriptions: </p>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="Enter campaign Description in Details."
            />
          </div>

          <div>
            <p>Required Amount: </p>
            <Input bsSize="" placeholder="7000" />
          </div>

          <div>
            <p>Receipent Address: </p>
            <Input bsSize="" placeholder="0xbF33Ac0c.....1a8FA03f9E" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeModal} className="bg-blue-700 hover:bg-blue-500">
          Submit
        </Button>{" "}
        <Button onClick={closeModal} className="bg-red-600 hover:bg-red-500">
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewCampaignModal;
