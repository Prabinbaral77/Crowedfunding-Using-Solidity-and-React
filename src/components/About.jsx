import React from "react";
import Logo from "../../assets/eth.jpg";

const About = () => {
  return (
    <div className="mt-[10rem]" id="about">
      <div className="pt-1 text-center text-2xl font-semibold pb-10 text-white">
        About <span className="text-yellow-200">CrowedFunding</span>
      </div>

      <div className="relative flex flex-col gap-y-10 px-8 mf:mx-auto me:flex-row mf:w-[70%] mf:gap-x-12 me:w-[910px]">
        <div className="mx-auto rounded-2xl overflow-hidden me:mx-0 w-[60%] mf:w-full">
          <img
            src={Logo}
            alt="Ethereum object"
            className="object-cover h-full shadow-xl"
          />
        </div>
        <div className="mx-auto ">
          <p className="w-full text-white text-[1.2rem] text-center pl-4">
            This is a smart contract based crowed funding. where invester can
            inveest on the project based on their interest. This is totally
            discentrilized and controlled by investor. They can create the
            campaign and can voted on the project for funding. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Mollitia sapiente
            soluta optio quod, eaque culpa quas id odit magni, quam libero
            necessitatibus facilis placeat. Repudiandae quisquam delectus quidem
            quod nulla velit dolorum ex! Asperiores laboriosam iure beatae quod
            nisi vero odio fugit deleniti, obcaecati debitis, expedita dolores
            qui nemo quas!
          </p>
        </div>
      </div>
      <hr className="mt-[8rem] w-[70%] mx-auto text-white" />
    </div>
  );
};

export default About;
