import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Concepts = () => {
  const [initialLoad, setIntialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntialLoad(false);
    }, 3000);
  }, []);
  return (
    <div className="h-screen bg-voilet w-full  overflow-hidden">
      <div className="relative">
        {initialLoad ? (
          <img
            src="./assets/team/loader.svg"
            alt="svg"
            className="w-20 absolute top-72 left-2/4"
          />
        ) : (
          <div>
            <motion.div
              className="absolute top-20 -left-6 lg:top-32 lg:-left-20"
              animate={{
                x: 10,
                y: 20,
                z: 30,
              }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <img
                src="./assets/team/memphis-1.png"
                alt="memphis-1"
                className="w-40 h-40 lg:w-3/4 lg:h-3/4"
              />
            </motion.div>

            <motion.div
              className="absolute right-2/4 top-60"
              animate={{ rotate: 360 }}
              transition={{ from: 90, repeat: Infinity, duration: 3 }}
            >
              <img src="./assets/team/memphis-3.png" alt="memphis-3" />
            </motion.div>

            <motion.div
              className="absolute text-center w-full top-60 lg:top-44 mx-auto"
              whileHover={{
                x: 10,
                y: 5,
                z: 5,
                transition: { duration: 1 },
              }}
            >
              <Fade big>
                <img
                  src="./assets/team/parallax-text-1.png"
                  alt="parallax-text-1"
                  className="w-9/12 lg:w-9/12 mx-auto"
                />
              </Fade>
              <Zoom>
                <div className="text-white font-bold text-[24px] md:text-4xl lg:font-bold lg:text-6xl left-1/4">
                  We Design User{" "}
                  <span className="lg:border-b-4 border-b-4 border-red-500">
                    Interfaces{" "}
                  </span>
                </div>
              </Zoom>

              <div
                className="text-white text-[18px] md:text-2xl lg:text-5xl my-3 font-medium lg:pt-4 text-center 
              uppercase tracking-widest lg:tracking-normal "
              >
                <Fade bottom>Freelancer Designer</Fade>
              </div>
            </motion.div>

            <motion.div
              className="absolute h-screen top-96 lg:top-28 right-0 lg:-right-24"
              animate={{
                x: 10,
                y: 20,
                z: 30,
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <img
                src="./assets/team/memphis-2.png"
                alt="memphis-2"
                className="w-40 h-40 lg:w-3/4 lg:h-2/4"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Concepts;
