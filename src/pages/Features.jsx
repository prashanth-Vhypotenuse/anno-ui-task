import React from "react";
// import featuresImage from "../assets/Features-image.png";

const Features = () => {
  return (
    <div className="lg:h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-2 md:place-content-center pt-20 lg:py-0">
      <div className="w-full lg:w-4/5 mx-auto pb-16 lg:py-0">
        <img
          src="./assets/Features-image.png"
          alt="Features"
          className="w-full h-auto"
        />
      </div>

      <div className="w-full px-4 lg:w-4/5 mx-auto lg:mx-0 pb-20 lg:pb-0">
        <h2
          className="color-pink font-medium font-Cardo text-4xl pb-2 absolute"
          data-backfont="Skills"
        >
          Expert in Skills
          <span></span>
        </h2>
        <hr className="border-4 border-pink w-28 rounded-md mb-4" />
        <h1 className="font-extrabold text-3xl lg:text-5xl mt-4 text-[#24182e]">
          Creative Solutions <br /> for Your Business
        </h1>
        <p className="mt-4 text-base lg:text-lg font-medium text-gray-700">
          Creative problem solving is the mental process of creating a solution
          to a problem. It is a special form of problem solving in which the
          solution is independently created rather than learned with assistance.
          Creative problem solving requires more than just knowledge and
          thinking.
        </p>
      </div>
    </div>
  );
};

export default Features;
