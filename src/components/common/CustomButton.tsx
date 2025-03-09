import React from "react";

interface CustomButtonProp {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

const CustomButton: React.FC<CustomButtonProp> = ({ onClick, title }) => {
  return (
    <button
      className="font-[600] sm:text-[18px] text-[14px] text-[#fff] sm:py-4 sm:px-8 py-2 px-4 rounded-[32px] bg-[#005245] transition-all duration-300 hover:bg-customGreen hover:scale-105 hover:shadow-lg active:scale-95"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
