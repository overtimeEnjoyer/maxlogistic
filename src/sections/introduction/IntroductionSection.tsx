import React from "react";
import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <div
      className="introductionBackgroud flex flex-col justify-end items-start max-md:justify-center max-md:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-overlay z-0 ml-4 flex flex-col pl-16 py-8 max-md:p-5 max-md:bg-white/50 rounded-2xl md:w-[560px] md:mr-auto mr-5 md:ml-0 md:h-[400px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-bold font-titillium text-[#132433] text-left mb-6 text-[40px] md:mb-0 leading-10 mt-5"
        >
          Комплексна логістична
          <br />
          компанія виходить <br />
          на світову арену.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="md:text-xl text-sm font-titillium text-[#132433] text-left font-medium mb-8 md:mb-0 md:text-[20px] md:mt-3 md:leading-8"
        >
          Оптимізуйте роботу свого бізнесу за допомогою
          <br />
          наших надійних логістичних рішень.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex md:w-[460px] mt-4 max-sm-button:flex-col max-sm-button:items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="font-normal text-sm bg-darkBlue max-md:w-full text-white px-[10px] rounded-md py-[17px] transition-all duration-300 hover:bg-customGreen hover:shadow-lg"
          >
            ЗВ’ЯЗАТИСЬ З НАМИ
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="font-normal w-[170px] max-md:w-full text-sm bg-[#EB3531] text-white rounded-md py-[17px] transition-all duration-300 hover:bg-customGreen hover:shadow-lg"
          >
            ПРО НАС
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
