import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamImg1 from "../../../assets/img/team1.png";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TeamMember = () => {
  return (
    <div className="w-2/12 px-2">
      <img
        src={TeamImg1}
        alt=""
        className="w-full object-cover bg-gradient-to-b from-[#FF0099] to-[#B845FF] rounded-[10px]"
      />
      <div className="pt-[17px] px-2">
        <p className="text-white font-medium text-2xl leading-[36x] text-center">
          ARTIST BULL
        </p>
        <p className="text-white text-base font-normal leading-[24px]">
          Lead Founder
        </p>
        <p className="text-white font-light text-[10px] leading-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          aliquid!
        </p>
      </div>
    </div>
  );
};

const TeamView = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="pt-[160px] px-5">
        <FontAwesomeIcon
          icon={solid("chevron-left")}
          className="text-[#DB00FF] text-[32px]"
        />
      </div>
      <div className="w-[90%] flex overflow-y-hidden pt-[56px]">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
      <div className="pt-[160px] px-5">
        <FontAwesomeIcon
          icon={solid("chevron-right")}
          className="text-[#DB00FF] text-[32px]"
        />
      </div>
    </div>
  );
};

export default TeamView;
