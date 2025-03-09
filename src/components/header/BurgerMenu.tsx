import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

import "./BurgerMenu.css";
import { navItems } from "../../constants/navItems";
import logoImage from "../../images/logo.svg";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="blurred-background" onClick={handleCloseMenu} />
      )}

      <Menu
        right
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        className="text-center w-[200px]"
      >
        <div className="flex flex-row">
          <img
            src={logoImage}
            alt="logo"
            className="ml-[-20px] mb-5"
            width={180}
            height={200}
          />
          <button className="close-button w-[220px]" onClick={handleCloseMenu}>
            ✕
          </button>
        </div>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="font-normal py-3 rounded-lg text-base text-customGreen transition-all duration-300 hover:text-black hover:underline"
            onClick={handleCloseMenu}
          >
            {item.label}
          </a>
        ))}
        <div>
          <button
            className="font-normal text-sm bg-[#132433] text-white px-[10px] rounded-md py-[17px] transition-all duration-300 hover:bg-customGreen hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={handleCloseMenu}
          >
            ЗВ’ЯЗАТИСЬ З НАМИ
          </button>
        </div>
      </Menu>
    </>
  );
};

export default BurgerMenu;
