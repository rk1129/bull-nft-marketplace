import React from "react";

const HeaderButton = ({
  name,
  isSelected = false,
}: {
  name: string;
  isSelected?: boolean;
}) => {
  return (
    <button
      className={`${
        isSelected ? "text-primaryColor" : "text-white"
      } text-base leading-5 font-medium`}
    >
      {name}
    </button>
  );
};

export default HeaderButton;
