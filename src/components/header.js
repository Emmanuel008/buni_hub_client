import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-200 text-white">
      <img
        src="/images/costech.png"
        alt="Left Image"
        className="h-36 w-36 object-contain"
      />
      <h1 className="text-4xl font-bold text-orange-400">
        TANZANIA COMMISION FOR SCIENCE AND TECHNOLOGY (COSTECH){" "}
      </h1>
      <img
        src="/images/buni.png"
        alt="Right Image"
        className="h-36 w-36 object-contain"
      />
    </div>
  );
};

export default Header;
