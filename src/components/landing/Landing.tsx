import React from "react";
import { motion } from "framer-motion";

import { ReactComponent as RightVectorSM } from "../../assets/img/sm-vector-right.svg";
import { ReactComponent as RightVectorLG } from "../../assets/img/lg-vector-right.svg";
import { ReactComponent as LeftVectorSM } from "../../assets/img/sm-vector-left.svg";
import { ReactComponent as LeftVectorLG } from "../../assets/img/lg-vector-left.svg";

const Landing = () => {
  return (
    <div className="bg-[#141414]">
      <div className="landing-bg flex flex-col items-center">
        <div className="relative max-w-[679px] w-full mt-[118px] flex flex-col items-center">
          <div className="w-full flex justify-between absolute top-0 left-0">
            <div className="relative">
              <motion.div
                animate={{
                  opacity: [0, 1, 1, 0, 0],
                }}
                className="z-10"
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <LeftVectorLG />
              </motion.div>
              <LeftVectorSM className="absolute top-0 left-2" />
            </div>
            <div className="relative mt-1">
              <motion.div
                animate={{
                  opacity: [0, 1, 1, 0, 0],
                }}
                className="z-10"
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <RightVectorLG />
              </motion.div>
              <RightVectorSM className="absolute top-0" />
            </div>
          </div>
          <motion.div
            className="h-[209px]"
            animate={{
              fontSize: ["60px", "66px", "66px", "57px", "63px", "60px"],
              lineHeight: ["90px", "99px", "99px", "85px", "95px", "90px"],
              color: ["#FFFFFF", "#FF0099", "#FF0099", "#FF0099", "#FFFFFF"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.6, 0.8, 0.9, 0.95, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <h1 className="font-bold text-center">
              THE BULLS ARE
              <br /> RAGING...
            </h1>
          </motion.div>
          <div>
            <h1 className="font-bold text-2xl leading-[35.57px] text-center text-white">
              Bull's Lodge NFT;
            </h1>
            <h2 className="font-medium text-white text-xl leading-[29.64px] text-center">
              Home of your benefits in <br /> Metaverse & Reality. MINT to be
              announced soon.
            </h2>
          </div>
          <button
            className="border-2 border-primaryColor mt-[59px] px-5 py-7 text-white font-bold text-[32px] rounded-[1px]
          hover:bg-gradient-to-r to-primaryColor from-[#DB00FF] z-20"
          >
            MINT TBA
          </button>
          <h1 className="mt-[5px] font-semibold text-[46px] leading-[68px] text-white text-center">
            01:23:45
          </h1>
        </div>
        <div className="w-full mt-[200px] flex flex-col items-center">
          <h1 className="font-bold text-[46px] leading-[68px] text-white">
            OUR LODGE'S NFT COLLECTION
          </h1>
          <p className="mt-0.5 text-xl leading-[30px] text-center font-medium text-white">
            Each Bull features a combination of unique traits,
            <br /> handcrafted in signature style by our in-house digital
            artists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
