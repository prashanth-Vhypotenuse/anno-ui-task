import React, { useState } from "react";
import dataJSON from "../common-data/portfolioData.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PortfolioCard from "../components/PortfolioCard";
// import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [type, setType] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-blue-50 py-20">
      <div className="text-center">
        <h2 className="color-pink font-medium font-Cardo text-4xl pb-2 relative">
          Show Your Works
          <span className="absolute left-[22%] md:left-[28%] lg:left-[34%] opacity-10 text-[2em] md:text-[3em] 
          lg:text-[5em] top-8 lg:top-11">
            Works
          </span>
        </h2>
        <h1 className="pb-4 font-extrabold text-2xl lg:text-5xl mt-4">
          Our Portfolia
        </h1>
        <hr className=" border-pink border-4 w-28 mx-auto rounded-md mb-4" />
      </div>

      <div className="bg-white my-20 mx-4 lg:mx-28">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 py-4 px-10 ">
          {dataJSON.portfolioTabs.map((tab, index) => (
            <li
              key={index}
              className="font-Montserrat text-[14px] font-medium cursor-pointer text-center pb-2"
              onClick={(e) => setActiveTab(e.target.innerText)}
            >
              <span
                className={
                  activeTab === tab
                    ? "border-b-4 text-red-500 border-b-red-400 px-4 pb-2"
                    : "hover:text-red-500"
                }
              >
                {tab}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {activeTab !== "All"
          ? dataJSON.portfolioData
              .filter((data) => data.type.includes(activeTab))
              .map((filterData, index) => (
                <PortfolioCard 
                  filterData={filterData} 
                  key={index} 
                  showDetails={showDetails} 
                  setShowDetails={setShowDetails} 
                  type={type}
                  setType={setType}
                />
              ))
            : dataJSON.portfolioData.map((filterData, index) => (
              <PortfolioCard 
                filterData={filterData} 
                key={index} 
                showDetails={showDetails} 
                setShowDetails={setShowDetails} 
                type={type}
                setType={setType}
              />
            ))}
      </div>

      <div className="pt-24">
        <Slider {...settings}>
          {dataJSON.portfolioSlider.map((porfolio, i) => {
            return (
              <div key={i}>
                <div className="text-center px-14 lg:px-28 py-8">
                  <p className="text-xl font-light md:font-normal font-Montserrat md:text-2xl text-gray-700">
                    <i className="icofont-quote-left color-pink text-5xl pr-2"></i>
                    {porfolio.message}
                  </p>
                  <div className="flex justify-center py-4">
                    <img
                      className="w-36 h-36 rounded-full"
                      src={porfolio.image}
                      alt={porfolio.name}
                    />
                  </div>
                  <p className="text-xl font-medium ">{porfolio.name}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;