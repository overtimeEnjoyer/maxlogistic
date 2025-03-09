import React from "react";
import { motion } from "framer-motion";  // Import motion from framer-motion
import { images } from "../../images";

const LocationSection = () => {
  return (
    <div>
      <div className="backGroundLocation p-5">
        <motion.div
          className="w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left md:items-start md:min-h-[35vh] lg:mt-24 lg:gap-10 xl:gap-0 md:gap-18"
          id="location"
          initial={{ opacity: 0, y: 50 }} // Set initial state (hidden and below)
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          <motion.div
            className="flex flex-row justify-end items-start md:mr-14"
            initial={{ opacity: 0 }} // Initial state for the location icon and text
            animate={{ opacity: 1 }} // Fade in the icon and text
            transition={{ delay: 0.2, duration: 0.6 }} // Delay and duration for fade-in effect
          >
            <motion.img
              src={images.locationIcon}
              alt="location Icon"
              className="mr-5"
              initial={{ x: -50, opacity: 0 }} // Start from left and hidden
              animate={{ x: 0, opacity: 1 }} // Animate to original position with full opacity
              transition={{ duration: 0.6 }} // Duration for the image animation
            />
            <div>
              <p className="flex flex-row items-center max-md:mx-auto font-ubuntu font-medium lg:text-[25px] xl:text-[40px] lg:leading-[40px] md:text-[22px] md:leading-[30px] sm:text-[28px] sm:leading-[30px] text-[24px] leading-[24px]">
                Наше розташування
              </p>
              <p className="font-ubuntu font-normal xl:text-[24px] lg:text-[15px] xl:leading-[50px] lg:leading-[40px] lg:mt-5 md:leading-[35px] md:text-[15px] sm:leading-[35px] text-[16px] leading-[24px] max-w-[80%] sm:max-w-full">
                м. Городок, Львівська обл., Львівський
                <br /> район, вул. Львівська 659А, ТзОВ
                <br /> «Логістична Компанія «Захід Ресурс»
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center mt-4 md:mt-0 w-4/5 sm:w-1/2 h-[30vh] lg:w-[580px] lg:h-[420px] xl:w-[750px] xl:h-[420px]"
            initial={{ opacity: 0 }} // Start with hidden map iframe
            animate={{ opacity: 1 }} // Fade in the map iframe
            transition={{ delay: 0.4, duration: 0.6 }} // Delay and duration for fade-in effect
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.672333366405!2d23.71083277655961!3d49.79222653453858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b1db60c30a857%3A0x2cefe1d8099accb9!2z0JzQuNGC0L3QuNC5INC_0L7RgdGCIMKr0JPQvtGA0L7QtNC-0LrCuy4g0JLQnNCeIOKEljEsINCS0JzQniDihJYyICgi0KHQutC90LjQu9GW0LIiLCDRgtGA0LDQvdGB0L_QvtGA0YLQvdC40Lkg0LLRltC00LTRltC7KQ!5e0!3m2!1sen!2sua!4v1739801870860!5m2!1sen!2sua"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        src={images.bannerManyMaxLogisticsIcon}
        alt="banner Many MaxLogistics Icon"
        className="w-full md:mt-[-40px]"
        initial={{ opacity: 0 }} // Start with hidden banner
        animate={{ opacity: 1 }} // Fade in the banner
        transition={{ delay: 0.6, duration: 0.6 }} // Delay and duration for banner animation
      />
    </div>
  );
};

export default LocationSection;
