import React from "react";
import CustomInput from "../components/CustomInput";
import Clients from "../components/Clients";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-voilet">
        <div className="grid md:grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-20 py-12 order-last lg:order-first">
            <h2
              className="color-pink font-medium font-Cardo text-4xl pb-2"
              data-backfont="Contact"
            >
              Contact Us
            </h2>
            <h1 className="text-white pb-4 font-extrabold text-3xl lg:text-5xl mt-4">
              Request a <br /> Quote Now
            </h1>
            <hr className="border-4 border-white w-20 rounded-md" />
            <form action="">
              <div className="py-3">
                {/* <label
                  htmlFor="name"
                  className="text-white text-lg font-normal py-2"
                >
                  Name
                </label> */}
                <CustomInput
                  type="text"
                  name="name"
                  labelName="Name"
                  className="block text-xl w-full lg:w-4/5 py-2 bg-voilet border border-white outline-none text-white px-4"
                />
              </div>

              <div className="py-3">
                {/* <label
                  htmlFor="email"
                  className="text-white text-lg font-normal py-2"
                >
                  Email
                </label> */}
                <CustomInput
                  type="email"
                  name="email"
                  labelName="Email"
                  className="block text-xl w-full lg:w-4/5 py-2 bg-voilet border border-white outline-none text-white px-4"
                />
              </div>

              <div className="py-3">
                <label
                  htmlFor="project"
                  className="text-white text-lg font-normal block"
                >
                  Project Details
                </label>
                <textarea
                  name="project"
                  id="project"
                  cols="40"
                  rows="4"
                  className="bg-voilet border border-white text-white px-4 outline-none w-full lg:w-4/5 py-2"
                ></textarea>
              </div>

              <button
                type="button"
                className="text-white bg-pink px-10 py-2 text-base font-medium cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7456719881798!2d77.61251501434354!3d12.924061019417616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e91ae2b089%3A0x6d0ebe66d8ae5ad!2sVHypotenuse%20Private%20Limited!5e0!3m2!1sen!2sin!4v1675172680599!5m2!1sen!2sin"
              className="w-full h-60 lg:h-screen"
              allowFullScreen=""
              loading="lazy"
              title="google map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Clients />
    </div>
  );
};

export default ContactUs;
