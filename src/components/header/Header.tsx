import React from "react";
import { motion } from "framer-motion";
import BurgerMenu from "./BurgerMenu";
import { images } from "../../images";
import { navItems } from "../../constants/navItems";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-around items-center md:justify-between py-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-[400px] md:justify-center justify-start"
      >
        <img src={images.logo} alt="logo" width={200} height={134} />
      </motion.div>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex ml-auto mr-10"
      >
        <ul className="flex justify-between items-center list-none xl:w-[800px] lg:w-[750px] md:w-[600px]">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="font-normal text-base transition-all duration-300 hover:text-black hover:underline"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              whileHover={{ backgroundColor: "#0f8f56", transition: { duration: 0.3 } }}
              className="font-normal text-sm bg-[#132433] text-white px-[10px] rounded-md py-[17px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              ЗВ’ЯЗАТИСЬ З НАМИ
            </motion.button>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
