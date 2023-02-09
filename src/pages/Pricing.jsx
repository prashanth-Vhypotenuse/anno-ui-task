import React from "react";
import dataJSON from "../common-data/pricingData.json";
import CustomCard from "../components/CustomCard";

const Pricing = () => {
  return (
    <div className="bg-blue-50 px-4 md:px-10 lg:px-20 py-32 ">
      <div className="text-center">
        <h2 className="color-pink font-medium font-Cardo text-4xl pb-2 relative">
          Select Your Plan
          <span className="absolute left-[22%] md:left-[28%] lg:left-[34%] opacity-10 text-[2em] md:text-[3em] 
          lg:text-[5em] top-8 lg:top-11">
            Plans
          </span>
        </h2>
        <h1 className="pb-4 font-extrabold text-2xl lg:text-5xl mt-4">
          Our Pricing
        </h1>
        <hr className="w-20 border-pink mx-auto my-3 border-4 rounded-md" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {dataJSON.pricingData.length > 0 &&
          dataJSON.pricingData.map((data , index) => <CustomCard data={data} key={index} />
        )}
      </div>
    </div>
  );
};

export default Pricing;
