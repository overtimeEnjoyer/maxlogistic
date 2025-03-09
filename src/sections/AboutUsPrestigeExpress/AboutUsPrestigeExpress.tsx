import React from "react";
import { images } from "../../images";
import { AboutUsPrestigeExpressImage } from "../../images/AboutUsPrestigeExpress/AboutUsPrestigeExpress";

const AboutUsPrestigeExpress = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5">
      <p className="text-sm md:text-2xl font-medium md:w-3/5 w-4/5 text-center md:leading-9">
        ПП «Престиж Експрес» прагне забезпечити високий рівень сервісу і довіру
        клієнтів завдяки відданості якості та професіоналізму. Команда
        досвідчених фахівців завжди готова надати вам найкращі рішення для
        успішного та ефективного перевезення вантажів, що відповідають всім
        міжнародним стандартам та вимогам.
      </p>
      <div className="hidden md:block">
        <img
          src={images.AboutUsPrestigeExpressBigImage}
          alt="Collage of trucks: a tanker truck, a white truck in the sun, the back of a van. Text: 'International standards and requirements."
          className="w-full px-5 md:-mt-10"
        />
      </div>
      <div className="block md:hidden">
        <img
          src={AboutUsPrestigeExpressImage.AboutUsPrestigeExpressNotCutPhotO}
          alt="Collage of trucks: a tanker truck, a white truck in the sun, the back of a van. Text: 'International standards and requirements."
          className="w-full px-5 mt-5 md:-mt-10"
        />
        <img
          src={AboutUsPrestigeExpressImage.AboutUsPrestigeExpressСutPhoto}
          alt="Collage of trucks: a tanker truck, a white truck in the sun, the back of a van. Text: 'International standards and requirements."
          className="w-full px-5 md:-mt-10 mb-5 md:mb-0"
        />
      </div>
    </div>
  );
};

export default AboutUsPrestigeExpress;
