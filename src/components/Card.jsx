import React from "react";
import { Progress } from "reactstrap";
import Campaign from "../utils/Modals/Campaign";
import { shortenAddress } from "../utils/shortenAddress";

const Card = ({ isOpen, handleModal, setIsOpen, data }) => {
  return (
    <div onClick={() => setIsOpen(true)}>
      <div className="w-[23rem] h-[16.5rem] campaign-card rounded-xl text-white mx-auto px-3 pt-4 cursor-pointer">
        <p>
          {" "}
          <span className="font-bold text-xl text-yellow-50">Title :</span>
          <span className="uppercase text-red-500 font-semibold">
            {" "}
            {data.title}
          </span>
        </p>
        <p>
          {" "}
          <span className="font-bold text-xl text-yellow-50">
            Description :
          </span>{" "}
          <span className="text-gray-800">{data.description}</span>
        </p>

        <p>
          {" "}
          <span className="font-bold text-yellow-50">
            Receiver Address :
          </span>{" "}
          <span className="text-gray-800">
            {shortenAddress(data.receipent)}
          </span>
        </p>

        <div className="mx-[15%] py-3">
          <Progress
            animated
            striped
            value={data.voter === 0 ? 0 : data.voter / data.contributer / 100}
            className="w-full h-[0.6rem]"
          />
          {data.voter == 0 ? (
            <p>0% vote out of 100%</p>
          ) : (
            <p>{(data.voter / data.contributer) * 100} vote out of 100%</p>
          )}
        </div>
        <div className="text-xl bg-yellow-600 px-4 py-2 w-[60%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-500 transition-all duration-100">
          Raise Fund
        </div>
      </div>
      <Campaign open={isOpen} handleModal={handleModal} />
    </div>
  );
};

export default Card;
