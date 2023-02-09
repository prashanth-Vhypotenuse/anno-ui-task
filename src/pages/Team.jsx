import React, { useState } from "react";
import { Fade } from "react-reveal";
import dataJSON from "../common-data/teamData.json";

const Team = () => {
  const [name, setName] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-voilet py-20 px-4 lg:px-24">
        <div className="text-center">
          <h2 className="color-pink font-medium font-Cardo text-4xl pb-2 relative">
            Meet Creatives
            <span className="absolute left-[22%] md:left-[28%] lg:left-[34%] opacity-10 text-[2em] md:text-[3em] lg:text-[5em] top-8 lg:top-11">
              Team
            </span>
          </h2>
          <h1 className="pb-4 font-extrabold text-2xl text-white lg:text-5xl mt-4">
            Our Team
          </h1>
          <hr className="border-white border-4 w-28 mx-auto rounded-md mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
          {dataJSON.teamDetails.map((team, index) => (
            <div key={index} className="relative overflow-hidden hover:shadow-2xl">
              <img
                src={team.image}
                alt={team.name}
                className={team.name === name ? "opacity-80" : ''}
                onMouseOver={() => {
                  setName(team.name);
                  setShowDetails(true);
                }}
                onMouseLeave={() => {
                  setName("");
                  setShowDetails(false);
                }}
              />

              {name === team.name && showDetails && (
              <Fade bottom>
                <div
                  className="absolute mx-4 bottom-10 w-[90%] text-center bg-white py-4 px-12 my-4"
                  onMouseOver={() => {
                    setName(team.name);
                    setShowDetails(true);
                  }}
                >
                  <h3 className="font-semibold text-3xl">{team.name}</h3>
                  <span className="font-medium text-xl">
                    {team.designation}
                  </span>
                  <div className="flex text-black py-3 justify-center">
                    <i className="icofont-facebook hover:bg-blue-900 hover:text-white p-3 rounded-full cursor-pointer"></i>
                    <i className="icofont-twitter hover:bg-blue-600 hover:text-white p-3 rounded-full cursor-pointer"></i>
                    <i className="icofont-behance hover:bg-blue-600 hover:text-white p-3 rounded-full cursor-pointer"></i>
                    <i className="icofont-linkedin hover:bg-blue-900 hover:text-white p-3 rounded-full cursor-pointer"></i>
                  </div>
                </div>
              </Fade>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-[400px] lg:h-screen"
        style={{
          backgroundImage: `url('./assets/background/parallax-bg.jpg')`,
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full px-6 md:px-10 lg:px-48">
          <div className="flex justify-center items-center h-full">
            <h1 className="block relative text-3xl md:text-4xl lg:text-6xl font-semibold font-serif text-white text-center">
              Where something special happens every day
              <span className="block absolute opacity-30 font-Cardo font-bold lg:-top-2 text-[3em] lg:text-[5em]">
                Anno
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
