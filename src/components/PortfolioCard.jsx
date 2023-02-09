import React from 'react'
import Zoom from 'react-reveal/Zoom'

const PortfolioCard = ({ filterData, setType, setShowDetails, type, showDetails }) => {
  return (
      <div>
        <div className="overflow-hidden relative">
          <img
            src={filterData.image}
            alt={`Portfolio`}
            className={`w-full h-auto cursor-pointer hover:scale-125 transition ease-in-out duration-500 -z-10 
            ${type === filterData.brand && 'scale-125'}`}
            onMouseOver={() => {
              setType(filterData.brand);
              setShowDetails(true);
            }}
            onMouseOut={() => {
              setType("");
              setShowDetails(false);
            }}
          />
          {type === filterData.brand && showDetails && (
            <div
              className="absolute bottom-10 text-center w-10/12 bg-white py-8 px-4 mx-6"
              onMouseOver={() => {
                setType(filterData.brand);
                setShowDetails(true);
              }}
              onMouseOut={() => {
                setType("");
                setShowDetails(false);
              }}
            >
              <Zoom>
                <h3 className="font-semibold text-3xl">
                  {filterData.brand}
                </h3>
              </Zoom>
                <span className="font-medium text-xl"><Zoom>Branding</Zoom></span>
            </div>
          )}
        </div>
      </div>
  )
}

export default PortfolioCard