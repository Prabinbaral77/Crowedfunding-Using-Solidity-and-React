import React from "react";
import Card from "./Card";

const CurrentRequest = () => {
  return (
    <div>
      <div className="-mt-[2.2rem] text-center text-2xl font-semibold pb-10 text-white md:mt-[5rem] ">
        Trending Campaign
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-y-20 mf:flex-row mf:flex-wrap mf:px-[8rem] mf:gap-x-10 mf:mx-auto mf:justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <hr className="mt-[9rem] w-[70%] mx-auto text-white" />
    </div>
  );
};

export default CurrentRequest;
