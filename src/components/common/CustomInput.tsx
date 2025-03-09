import React from "react";

interface CustomInputProp {
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProp> = ({
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="sm:py-[18px] sm:px-[32px] border-2 rounded-3xl border-[#dadada] sm:w-[350px] py-[6px] px-[12px] w-[300px] mb-6">
      <input
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-transparent text-[#fff] placeholder-[#fff] text-[16px] sm:text-[18px] border-none outline-none w-full appearance-none"
      />
    </div>
  );
};

export default CustomInput;
