import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import dataJSON  from "../common-data/clientsData.json";

const Clients = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div>
        <Slider {...dataJSON.settings}>
          {dataJSON.clientsData.map((client, i) => {
            return (
              <div key={i}>
                <div className="flex justify-around">
                  <img
                    className="w-4/5 h-40"
                    src={client.img}
                    alt={`Clients'${i}`}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
