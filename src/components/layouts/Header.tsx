import React from "react";
import HeaderButton from "./HeaderButton";

import LinkedInImg from "../../assets/img/linkedin.png";
import FacebookImg from "../../assets/img/facebook.png";
import InstaImg from "../../assets/img/instagram.png";
import SMLogo from "../../assets/img/small-logo.png";

const Header = () => {
  return (
    <div className="w-full flex justify-center absolute">
      <div className="header-content max-w-[1073px] w-full flex justify-between items-center pl-[51px] pr-[19px]">
        <div className="flex gap-[34px]">
          <HeaderButton name="HOME" isSelected={true} />
          <HeaderButton name="COLLECTION" />
          <HeaderButton name="ABOUT" />
          <HeaderButton name="ROADMAP" />
          <HeaderButton name="TEAM" />
          <HeaderButton name="FAQ" />
        </div>
        <div className="pt-[17px] pb-3 flex gap-6 items-center">
          <div className="flex gap-[15px]">
            <img src={LinkedInImg} className="w-4 h-4" alt="" />
            <img src={FacebookImg} className="w-4 h-4" alt="" />
            <img src={InstaImg} className="w-4 h-4" alt="" />
          </div>
          <button className="px-[19px] py-2.5 border-[1px] border-primaryColor text-white bg-transparent text-xl leading-[26px] shadow-[0_0px_4px_#FF0099] hover:bg-primaryColor">
            JOIN DISCORD
          </button>
          <img src={SMLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
