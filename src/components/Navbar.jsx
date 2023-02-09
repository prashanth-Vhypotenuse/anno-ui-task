import React, { useEffect, useState } from "react";
import dataJSON from "../common-data/navabarData.json";
import CustomInput from "./CustomInput";
// import Fade from "react-reveal/Fade";
// import Slide from "react-reveal/Slide"

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(true);
  const [subTabs, setSubTabs] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMobileTab, setShowMobileTab] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileSubTab, setShowMobileSubTab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show) {
        setNavBackground(false);
      } else {
        setNavBackground(true);
      }
    };
    // console.log(setNavBackground);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-30 px-10 top-0 ${!navBackground && 'bg-white'}`}
      >
        <div className="hidden lg:grid lg:grid-cols-10 gap-4">
          <div className="text-white col-span-3 flex justify-center">
            <img
              src={`${navBackground ? "./assets/team/logo-white.png": "./assets/team/logo-black.png"}`}
              alt={`${navBackground ? "logo white" : "logo black"}`}
              className="w-52 h-16"
            />
          </div>
          <div
            className={`col-span-6 ${navBackground ? 'text-white' : 'text-black'}`}
          >
            <ul className="grid grid-cols-7 py-6 gap-2">
              {dataJSON.navbarLinkData.map((navbar, index) => (
                <li
                  key={index}
                  onMouseEnter={() => {
                    if (navbar.tab === "Concepts") {
                      setSubTabs(true);
                    }
                    else {
                      setSubTabs(false);
                    }
                  }}
                  // onMouseLeave={() => setSubTabs(false)}
                  // className="relative h-4/5"
                  // key={index}
                >
                  <a href={`${navbar.link}`} className="font-Montserrat text-[14px] font-medium">{navbar.tab}</a>
                  {subTabs && (
                    <ul
                      className="absolute overflow-hidden hover:shadow-2xl mr-6 mt-6 bg-white py-4"
                      onMouseLeave={() => setSubTabs(false)}
                    >
                      {navbar.tab === "Concepts" &&
                        navbar.subTab.map((sub, index) => (
                          <li
                            key={index}
                            className="hover:text-red-400 cursor-pointer font-Montserrat text-[14px] text-gray-900
                            font-medium px-10 py-2"
                            onClick={() => setSubTabs(false)}
                          >
                            {sub}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white col-span-1 py-6 px-4 flex justify-end">
            <i
              className={ `icofont-navigation-menu text-lg text-white font-semibold cursor-pointer ml-4 ${navBackground ? 'text-white' : 
              'text-black'}`}
              onClick={() => setShowSidebar(true)}
            >
              {" "}
            </i>
            <i
              className={`icofont-search text-lg text-white font-semibold cursor-pointer px-4 ${navBackground ? 'text-white' : 
              'text-black'}`}
              onClick={() => setShowSearchModal(true)}
            ></i>

          </div>
        </div>
      </nav>

      <nav className="fixed top-0 w-screen z-20 bg-white">
        <div className="relative">
          <div className="lg:hidden flex justify-between">
            <div>
              <img src="./assets/team/logo-black.png" alt="Mobile logo" />
            </div>
            <div className="px-5 mt-5">
              {!showMobileTab ? (
                <i
                  className="icofont-navigation-menu text-xl text-black font-semibold cursor-pointer"
                  onClick={() => setShowMobileTab(true)}
                >
                  {" "}
                </i>
              ) : (
                <i
                  className="icofont-close text-2xl font-Montserrat font-semibold text-black cursor-pointer"
                  onClick={() => setShowMobileTab(false)}
                />
              )}
            </div>
          </div>

          <ul className={showMobileTab ? "h-80 overflow-auto px-4" : "px-4"}>
            {showMobileTab &&
              dataJSON.navbarLinkData.map(({ tab, link, subTab, index }) => (
                <li
                  key={index}
                  className="relative text-center font-Montserrat font-normal border-b last:border-0 py-2 text-lg"
                >
                  <a
                    href={link}
                    className=""
                    onClick={() => setShowMobileTab(false)}
                  >
                    {" "}
                    {tab}{" "}
                  </a>
                  {tab === "Concepts" && !showMobileSubTab && (
                    <i
                      className="absolute fa-solid fa-chevron-right right-4 text-gray-700"
                      onClick={() => setShowMobileSubTab(true)}
                    ></i>
                  )}
                  {tab === "Concepts" && showMobileSubTab && (
                    <i
                      className="absolute fa-solid fa-chevron-down right-4 text-gray-700"
                      onClick={() => setShowMobileSubTab(false)}
                    ></i>
                  )}
                  <ul className="">
                    {tab === "Concepts" &&
                      showMobileSubTab &&
                      subTab.map((subtab, index) => (
                        <li
                          key={index}
                          className="ml-4 text-left border-b last:border-0 first:border-t-2 py-2 text-lg font-light
                           text-gray-700"
                          onClick={() => setShowMobileTab(false)}
                        >
                          {subtab}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </nav>

      {showSearchModal && (
        <div className="fixed z-40 h-screen flex items-center justify-center p-4 search-bg w-full">
          <i
            className="icofont-close text-2xl font-semibold fixed top-16 right-16 text-white cursor-pointer hover:text-pink-600"
            onClick={() => setShowSearchModal(false)}
          />
          <div className="absolute w-full rounded top-1/2 left-1/3">
            <form action="">
              <div className="relative">
                <CustomInput
                  type="text"
                  name="search"
                  className="py-5 px-4 border search-bg focus:border-red-600 outline-none font-semibold text-2xl text-white w-1/3
                      placeholder:text-white placeholder:font-semibold placeholder:text-4xl"
                  placeholder="Type and hit Enter ..."
                />
                {/* <i className={navBackground ? "icofont-search text-xl text-white font-semibold cursor-pointer px-4 mx-4" :
                    "absolute -right-10 icofont-search text-xl text-black font-semibold cursor-pointer px-4 mx-4" }></i> */}
              </div>
            </form>
          </div>
        </div>
      )}

      {showSidebar && (
        <div>
          {/* <Slide right> */}
            <div className="fixed w-5/12 h-screen z-40 bg-pink right-0 overflow-auto transition-transform duration-500">
              <div className="flex justify-between items-center p-14">
                <img src="./assets/team/logo-white-sidemenu.png" alt="logo white" />
                <i
                  className="icofont-close text-2xl font-semibold text-white cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                />
              </div>
              <ul className="px-14">
                {dataJSON.navbarLinkData.map(({ tab, link, index }) => (
                  <li
                    key={index}
                    className="text-white text-[32px] font-Montserrat font-normal py-3 cursor-pointer"
                    onClick={() => setShowSidebar(false)}
                  >
                    <a href={link}>{tab}</a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 text-white py-3 px-14">
                {dataJSON.socialIcons.map((iconName, index) => (
                  <i className={iconName} key={index}></i>
                ))}
              </div>
            </div>
          {/* </Slide> */}
        </div>
      )} 
    </>
  );
};

export default Navbar;
