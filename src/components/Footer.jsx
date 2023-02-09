import React from "react";
import dataJSON from "../common-data/footerData.json";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Footer = () => {
  return (
    <div className="bg-voilet pt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 md:mx-24 px-4 md:px-0">
        <div>
          <img src="./assets/logo-footer.png" alt="footer" />
          <p className="text-white pr-4 mt-4 font-normal">
            Anno template provides fully flexible templates, allowing to
            customize every page.
          </p>
          <ul className="text-white pr-4 mt-4 list-none font-normal">
            <li>
              <a href="tel:+44 1234-567-8">+44 1234-567-8</a>
            </li>
            <li>
              <a href="/">Potsdamer Platz 9797</a>
            </li>
          </ul>
        </div>
        <div className="pr-10">
          <h5 className="text-xl font-semibold text-white">
            Join The Newsletter
          </h5>
          <p className="text-white font-normal my-4">
            Lorem ipsum dolor sit amet, ut ius audiam denique tractatos.
          </p>

          <form action="">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <CustomInput
              type="email"
              name="email"
              placeholder="subscribe"
              className="w-full px-4 py-1.5 outline-none border border-white text-white bg-voilet text-lg font-medium 
              placeholder:text-white"
            />

            <CustomButton
              type="button"
              className="mt-4 text-white bg-pink py-2 px-10 text-base font-medium hover:bg-red-600 cursor-pointer"
              value="SUBSCRIBE"
            />
          </form>
        </div>

        <div>
          <h5 className="text-xl font-semibold text-white pt-4 md:pt-0">
            Quick Links
          </h5>

          <ul className="text-white pr-4 mt-4 list-none font-normal leading-8">
            {dataJSON.quickLinks.map((link, index) => (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold text-white my-4 lg:mt-0 ">
            Media Gallery
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {dataJSON.footerGallery.map((gallery, index) => (
              <div key={index}>
                <img
                  src={gallery.image}
                  alt={`gallery${index}`}
                  className="h-24 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-blue-500 my-6" />

      <div className="pb-10">
        <p className="text-center text-white">
          © 2019 Anno Agency. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
