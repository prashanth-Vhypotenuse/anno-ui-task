import React from "react";
import CustomButton from "./CustomButton";

const CustomCard = ({ data }) => {
  return (
    <div className={`bg-white px-10 relative hover:shadow-2xl ${data.featured ? 'py-20' : 'py-10 lg:my-12'}`}>
      {data.featured && (
        <p className="absolute featured -left-1 top-10 bg-pink py-1 px-5 text-white text-sm font-bold">
          FEATURED
        </p>
      )}
      <h3
        className={ `text-3xl font-bold ${data.featured && 'color-pink' }`}>
        {data.tilte}
      </h3>
      <h4 className="text-xl font-semibold py-1">{data.subTitle}</h4>
      <h2 className={ `text-6xl font-bold py-6 ${data.featured && 'color-pink'}`}>
        <sup className="mt-4 text-3xl font-bold -mr-4">$</sup> {data.price}
      </h2>

      <ul>
        {data.services.length > 0 &&
          data.services.map((sevice, index) => (
            <li
              key={index}
              className="text-base font-normal text-gray-800 py-1"
            >
              {sevice}
            </li>
          ))}
      </ul>

      <CustomButton
        type="button"
        className={` text-white py-2 px-10 mt-4 font-medium  ${data.featured ? 'bg-pink hover:bg-pink-600' :
          'bg-voilet hover:bg-gray-700'}`}
        value={data.buttonText}
      />
    </div>
  );
};

export default CustomCard;
