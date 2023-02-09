import React from "react";
import dataJSON  from "../common-data/aboutData.json";
import CustomButton from "../components/CustomButton";
import NumberCounter from "../components/NumberCounter";

const About = () => {
  return (
    <>
      <div className="lg:h-screen w-full bg-voilet grid grid-cols-1 md:grid-cols-2">
        <div className="mx-0 lg:pb-0 px-4 lg:px-20 grid grid-cols-1 place-content-center py-20 lg:py-0 order-last lg:order-first">
          <h2
            className="color-pink font-medium font-Cardo text-4xl pb-2 relative"
            data-backfont="Digital"
          >
            What We Do
          </h2>
          <h1 className="text-white pb-4 font-extrabold text-2xl lg:text-5xl mt-4" style={{ lineHeight: '1.2em'}}>
            Digital <br/><span className="">Services</span>
          </h1>
          <hr className="border-white border-4 w-20 rounded-md mb-4" />

          <p className="mt-4 text-lg font-normal text-white">
            The term Digital Services refers to the electronic delivery of
            information including data and content across multiple platforms and
            devices like web or mobile. Information is presented in a way that
            is easy to use and understand and typically involves transactional
            services such as submitting forms for processing and receiving
            benefits.
          </p>
          <CustomButton
            type="button"
            className="border-2 border-white w-full lg:w-2/5  mt-10 py-2 text-white font-semibold hover:bg-white hover:text-black"
            value="Read More"
          />
        </div>

        <div className="w-full h-full mx-auto">
          <img
            src="./assets/mountain-image.jpg"
            alt="About"
            className="w-full h-[300px] lg:h-full object-cover"
          />
        </div>
      </div>

      <div className="lg:h-screen w-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full mx-auto">
          <img
            src="./assets/aboutLeftImage.jpg"
            alt="About"
            className="w-full h-[350px] lg:h-full"
          />
        </div>

        <div className="mx-0 lg:pb-0 px-4 lg:px-20 grid grid-cols-1 place-content-center py-20 lg:py-0">
          <h2
            className="color-pink font-medium font-Cardo text-4xl pb-2"
            data-backfont="Partners"
          >
            About Us
          </h2>
          <h1 className="text-black pb-4 font-extrabold text-2xl md:text-5xl mt-4">
            Partners for <br /> Growth
          </h1>
          <hr className="border-pink border-4 w-28 rounded-md mb-4" />

          <p className="mt-4 text-lg font-medium text-gray-700">
            The process of improving some measure of an enterprise's success.
            Business growth can be achieved either by boosting the top line or
            revenue of the business with greater product sales or service
            income, or by increasing the bottom line or profitability of the
            operation by minimizing costs.
          </p>
          <CustomButton
            type="button"
            className="lg:w-2/5 w-full mt-10 py-2 text-white font-semibold bg-voilet hover:bg-black"
            value="Read More"
          /> 
        </div>
      </div>

      <div className="bg-voilet py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-6 lg:pl-0">
          {dataJSON.companyActivities.map((activity, index) => (
            <div key={index} className="flex gap-3">
              <i
                className={`${activity.icon} text-7xl font-normal color-pink`}
              ></i>
              <div>
                <h3 className="text-3xl font-semibold text-white my-1">
                  <NumberCounter end={activity.num} duration="5000"/>
                </h3>
                <h5 className="text-lg font-semibold text-white ">
                  {activity.actvityName}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
