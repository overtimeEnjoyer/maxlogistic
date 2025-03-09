import React from "react";
import { dataWhatAreOurAdvantages } from "../../constants/dataWhatAreOurAdvantages";

const WhatAreOurAdvantages = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-10/12 px-4 md:px-0">
        <h2 className="text-[#22282B] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold mt-10 md:mt-20 border-b border-gray-300 pb-6 md:pb-10">
          В ЧОМУ НАШІ ПЕРЕВАГИ?
        </h2>
      </div>
      <div className="w-full">
        <div className="w-11/12 md:w-10/12 mx-auto px-4 md:px-0">
          {dataWhatAreOurAdvantages.map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-8 md:py-10 border-b border-gray-300"
            >
              <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-6">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className=" w-[140px] h-[140px] mr-16 md:mr-0 mx-auto md:mx-0 md:-mt-8" 
                />
                <h3 className="text-[#22282B] font-semibold text-xl sm:text-2xl text-center md:text-left md:w-1/3 lg:w-1/2">
                  {item.title}
                </h3>
                <p className="text-[#71797C] text-base sm:text-lg md:text-[19px] font-medium text-center md:text-left md:w-1/2 lg:w-6/12">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatAreOurAdvantages;