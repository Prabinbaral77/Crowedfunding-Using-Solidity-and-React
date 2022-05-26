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
import { PulseLoader } from "react-spinners";

const NewCampaignModal = ({ open, closeModal }) => {
  const { formData, handleChange, handleNewRequests, isLoading } =
    useContext(CrowedFundingContext);

  return (
    <Modal
      centered
      isOpen={open}
      toggle={closeModal}
      className="w-full rounded-full"
    >
      <ModalHeader
        toggle={() => closeModal()}
        className="font-bold text-xl flex text-center mx-auto"
      >
        Create New Campaign
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col mx-[2rem] gap-y-4">
          <div>
            <p>Name: </p>
            <Input
              bsSize=""
              placeholder="Name of Campaign"
              value={formData.name}
              onChange={(e) => handleChange(e, "campaignName")}
              name="campaignName"
            />
          </div>

          <div>
            <p>Descriptions: </p>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="Enter campaign Description in Details."
              value={formData.description}
              onChange={(e) => handleChange(e, "description")}
            />
          </div>

          <div>
            <p>Required Amount: </p>
            <Input
              bsSize=""
              placeholder="7000"
              value={formData.reqAmount}
              onChange={(e) => handleChange(e, "reqAmount")}
              name="reqAmount"
            />
          </div>

          <div>
            <p>Receipent Address: </p>
            <Input
              bsSize=""
              placeholder="0xbF33Ac0c.....1a8FA03f9E"
              onChange={(e) => handleChange(e, "receipentAddress")}
              name="receipentAddress"
              value={formData.receipentAddress}
            />
          </div>

          <div>
            <p>End Date: </p>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleChange(e, "date")}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeModal} className="bg-red-600 hover:bg-red-500">
          Cancel
        </Button>
        <Button
          onClick={handleNewRequests}
          className="bg-blue-700 hover:bg-blue-500"
        >
          {isLoading ? (
            <PulseLoader color="#111827" size={5} />
          ) : (
            <span>Submit</span>
          )}
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default NewCampaignModal;
