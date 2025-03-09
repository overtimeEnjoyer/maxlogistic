import React from "react";
import { Service } from "../types/service";

interface ServicesCardProp {
  service: Service;
}

const ServicesCard: React.FC<ServicesCardProp> = ({ service }) => {
  return (
    <div className="flex flex-col lg:w-4/5 w-3/5 bg-white mt-24">
      <img src={service.image} alt={service.title} className="w-full h-3/5" />
      <div className="flex flex-col lg:py-7 lg:px-9 md:py-5 md:px-7 sm:py-4 sm:px-5 py-3 px-4">
        <h2 className="font-ubuntu font-[700] lg:text-[32px] lg:leading-[40px] md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[28px] text-[18px] leading-[20px] max-w-[95%]">
          {service.title}
        </h2>
        <p className="font-titillium font-[400] lg:text-[20px] lg:leading-[38px] md:text-[18px] md:leading-[30px] sm:text-[16px] sm:leading-[26px] text-[14px] leading-[20px] text-[#557087] max-w-[95%] pt-4 lg:pb-16 md:pb-12 sm:pb-10 pb-8">
          {service.main}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;