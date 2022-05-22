import React, { useState } from "react";
import Card from "./Card";
import Campaign from "../utils/Modals/Campaign";

const CurrentRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="requests">
      <div className="-mt-[2.2rem] text-center text-2xl font-semibold pb-10 text-white md:mt-[5rem] ">
        Trending Campaign
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-y-20 mf:flex-row mf:flex-wrap mf:px-[8rem] mf:gap-x-10 mf:mx-auto mf:justify-between">
        {[0, 0, 0].map((dat) => {
          return (
            <Card
              isOpen={isOpen}
              handleModal={handleModal}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
      <hr className="mt-[9rem] w-[70%] mx-auto text-white" />
    </div>
  );
};

export default CurrentRequest;
