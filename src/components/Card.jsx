import React from "react";
import { Progress } from "reactstrap";

const Card = () => {
  return (
    <div>
      <div className="w-[23rem] h-[16.5rem] campaign-card rounded-xl text-white mx-auto px-5 pt-4">
        <p>
          {" "}
          <span className="font-bold text-xl text-yellow-50">Title :</span>
          <span className="uppercase text-red-500 font-semibold">
            {" "}
            Funding for School
          </span>
        </p>
        <p>
          {" "}
          <span className="font-bold text-xl text-yellow-50">
            Description :
          </span>{" "}
          <span className="text-gray-800">
            Funding for School Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est id unde cum ipsam sint, aut hic.
          </span>
        </p>

        <p>
          {" "}
          <span className="font-bold text-yellow-50">
            Receiver Address :
          </span>{" "}
          <span className="text-gray-800">jied5erw...4dfsg</span>
        </p>

        <div className="mx-[15%] py-3">
          <Progress animated striped value={75} className="w-full h-[0.6rem]" />
          <p>70 Raised out of 100</p>
        </div>
        <div className="text-xl bg-yellow-600 px-4 py-2 w-[60%] mx-auto rounded-full cursor-pointer text-blue-600 font-bold shadow-xl hover:scale-95 hover:bg-yellow-500 transition-all duration-100">
          Raise Fund
        </div>
      </div>
    </div>
  );
};

export default Card;
