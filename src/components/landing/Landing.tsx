import React from "react";
import { motion } from "framer-motion";
import CollectionView from "./collectionview/CollectionView";
import TeamView from "./collectionview/TeamView";
import Faq from "./Faq/Faq";

import { ReactComponent as RightVectorSM } from "../../assets/img/sm-vector-right.svg";
import { ReactComponent as RightVectorLG } from "../../assets/img/lg-vector-right.svg";
import { ReactComponent as LeftVectorSM } from "../../assets/img/sm-vector-left.svg";
import { ReactComponent as LeftVectorLG } from "../../assets/img/lg-vector-left.svg";

import VectorDownImg from "../../assets/img/vetoc-down.png";
import NftImg1 from "../../assets/img/nft/1.png";
import NftImg2 from "../../assets/img/nft/2.png";
import NftImg3 from "../../assets/img/nft/3.png";
import NftImg4 from "../../assets/img/nft/4.png";
import LandingImg1 from "../../assets/img/langing-img1.png";
import LandingImg2 from "../../assets/img/langing-img2.png";
import LandingImg3 from "../../assets/img/langing-img3.png";
import LandingImg4 from "../../assets/img/langing-img4.png";
import LandingImg5 from "../../assets/img/langing-img5.png";
import LandingImg6 from "../../assets/img/langing-img6.png";
import LandingImg7 from "../../assets/img/langing-img7.png";
import LandingImg8 from "../../assets/img/langing-img8.png";
import LandingImg9 from "../../assets/img/langing-img9.png";
import LandingImg10 from "../../assets/img/langing-img10.png";
import LandingImg11 from "../../assets/img/langing-img11.png";
import LandingImg12 from "../../assets/img/langing-img12.png";
import LandingImg13 from "../../assets/img/langing-img13.png";
import DiscordImg from "../../assets/img/discord.png";
import LinkedInImg from "../../assets/img/linkedin.png";
import FacebookImg from "../../assets/img/facebook.png";
import InstaImg from "../../assets/img/instagram.png";
import BigLogo from "../../assets/img/big-logo.png";

const Landing = () => {
  return (
    <div className="bg-[#141414]">
      <div className="landing-bg flex flex-col items-center">
        <div className="relative max-w-[1300px] w-full mt-[118px] flex flex-col items-center">
          <div className="w-full flex absolute top-0 left-0 justify-center">
            <div className="w-full max-w-[679px] flex justify-between ">
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
          </div>
          <div className="w-[1300px] absolute top-0 left-0 flex justify-between">
            <motion.div
              animate={{
                marginLeft: [-100, 20, -10, 0, 0],
                scale: [0.8, 1.2, 0.95, 1, 1],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                repeatDelay: 1,
              }}
            >
              <motion.img
                className="absolute top-0 w-[260px] z-10 shadow-[12px_4px_7px_-1px_rgba(0,0,0,0.25);] rounded-[2px] border-t-2 border-r-[3px] border-b-[5px] border-l-[5px]"
                src={NftImg1}
                alt=""
                animate={{
                  borderImage: [
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.img
                className="mt-[240px] ml-[62px] w-[260px] shadow-[12px_4px_7px_-1px_rgba(0,0,0,0.25);] rounded-[2px] border-t-2 border-r-[3px] border-b-[5px] border-l-[5px] z-0"
                src={NftImg2}
                alt=""
                animate={{
                  borderImage: [
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
            <motion.div
              animate={{
                marginRight: [-100, 20, -10, 0, 0],
                scale: [0.8, 1.2, 0.95, 1, 1],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                repeatDelay: 1,
              }}
            >
              {" "}
              <motion.img
                className="absolute w-[260px] top-0 right-0 scale-x-[-1] z-10 shadow-[12px_4px_7px_-1px_rgba(0,0,0,0.25);] rounded-[2px] border-t-2 border-r-[3px] border-b-[5px] border-l-[5px]"
                src={NftImg3}
                alt=""
                animate={{
                  borderImage: [
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.img
                className="mt-[240px] mr-[62px] w-[260px] scale-x-[-1] shadow-[12px_4px_7px_-1px_rgba(0,0,0,0.25);] rounded-[2px] border-t-2 border-r-[3px] border-b-[5px] border-l-[5px] z-0"
                src={NftImg4}
                alt=""
                animate={{
                  borderImage: [
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #FF0099, #FF0099) 1",
                    "linear-gradient(to top, #DB00FF, #00000000) 1",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.8, 0.9, 0.95, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
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
        <CollectionView />
        <div className="mt-[110px] flex gap-[113px] items-center">
          <div className="flex gap-[30px]">
            <img src={LandingImg1} alt="" className="mb-[9px] w-[168px]" />
            <img src={LandingImg2} alt="" className="mb-[-50px] w-[137px]" />
            <img src={LandingImg3} alt="" className="w-[168px]" />
          </div>
          <div className="flex flex-col gap-[25px]">
            <h1 className="font-bold text-[46px] leading-[68px] text-white">
              ARE YOU BULLISH?
            </h1>
            <p className="max-w-[500px] text-[rgba(255,255,255,0.85)] text-base font-medium leading-5">
              Welcome to the Bull's Lodge NFT project, featuring a collection of
              10,000 unique, 3D Hand Drawn NFT artworks and delivering
              privileges in Metaverse and In Real Life utilities to its
              ever-growing community. Bull’s Lodge NFT Collection is fan art and
              our inspiration is to put our Community's benefits in front of
              everything! We prioritize our member’s benefits and privileges
              while holding your NFT brings sustainable passive income to your
              feet. NFT in our community will have a value as identity in our
              society (even more in DAO!). Each Bull is unique, based over
              hundred of well-designed elements that characterize a BULLISH
              crypto enthusiast. Entering Bull's Lodge NFT means joining a
              family full of people who believe in the future of
              Cryptocurrencies and the Blockchain technology. We’re only just
              getting started yet will never stop focusing on delivering
              unparalleled benefits and utilities to the beloved members of our
              lodge.
            </p>
          </div>
        </div>
        <div className="flex items-end gap-[87px]">
          <div className="">
            <h2 className="text-[46px] font-bold leading-[68px] text-white">
              THE STORY
            </h2>
            <h2 className="h-[72px] font-semibold text-2xl leading-[36px] text-white">
              Bull's are RAGING!
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] font-medium text-base leading-5 max-w-[463px] mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever printer took a galley of type
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="-mb-5 px-[16px] py-[18px] text-white w-[302px] border-[1px] grandient-border-to-left-top font-bold text-lg leading-[22px]">
              Explore More
            </div>
          </div>
          <div className="relative h-[826px] flex items-end">
            <img
              className="absolute w-[640px] bottom-0 p-0.5"
              src={LandingImg4}
              alt=""
            />
            <div className="w-[640px] h-[510px] grandient-border border-2" />
          </div>
        </div>
        <div className="flex flex-col pt-[234px] w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-[46px] leading-[68px] text-center">
              THE ROADMAP
            </h1>
            <p className="h-[72px] text-white font-semibold text-2xl leading-[36px] text-center">
              Bull's are RACING!
            </p>
          </div>
          <div className="w-full pt-[76px] flex flex-col gap-[100px]">
            <div className="w-full h-[320px] flex justify-between gap-4">
              <img
                className="w-[57%] h-full object-cover"
                src={LandingImg10}
                alt=""
                data-inviewport-left-to-right
              />
              <div className="border-t-[1px] border-l-[1px] border-primaryColor pt-6 w-[43%] pl-[37px] pr-[71px] flex justify-between">
                <div className="flex flex-col gap-5">
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    10%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px]">
                    We will create a Community Wallet and prepare Game Economy
                    Development Phase. We prepare to launch our dividend
                    ecosystem for Bulls in Lodge.
                  </p>
                </div>
                <div className="flex items-center flex-col pt-2">
                  <p
                    className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider"
                    data-inviewport-left-to-right
                  >
                    PHASE <br />
                    <span className="text-[64px] leading-[64px]">1</span>
                  </p>
                  <img src={VectorDownImg} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full h-[320px] flex justify-between gap-4">
              <div className="border-t-[1px] border-r-[1px] border-primaryColor pt-6 w-[50%] pr-[37px] pl-[71px] flex justify-between">
                <div className="flex items-center flex-col pt-2">
                  <p className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider">
                    PHASE <br />
                    <span className="text-[64px] leading-[64px]">2</span>
                  </p>
                  <img
                    src={VectorDownImg}
                    alt=""
                    data-inviewport-right-to-left
                  />
                </div>
                <div
                  className="flex flex-col gap-5 items-end"
                  data-inviewport-right-to-left
                >
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    35%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px] text-right">
                    Preparations of game development will be initialized.
                    Additionally we have a raffle for our members to win an
                    Island tour to show our Lodge’s place and a special vacation
                    for bulls.
                  </p>
                </div>
              </div>
              <img
                className="w-[50%] h-full object-cover"
                src={LandingImg7}
                alt=""
                data-inviewport-right-to-left
              />
            </div>
            <div className="w-full h-[320px] flex justify-between gap-4">
              <img
                className=" w-[57%] h-full object-cover"
                src={LandingImg8}
                alt=""
                data-inviewport-left-to-right
              />
              <div className="border-t-[1px] border-l-[1px] border-primaryColor pt-6 w-[43%] pl-[37px] pr-[71px] flex justify-between">
                <div className="flex flex-col gap-5">
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    50%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px]">
                    Metaverse development phase will begin.
                  </p>
                </div>
                <div className="flex items-center flex-col pt-2">
                  <p className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider">
                    PHASE <br />
                    <span className="text-[64px] leading-[64px]">3</span>
                  </p>
                  <img
                    src={VectorDownImg}
                    alt=""
                    data-inviewport-left-to-right
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[320px] flex justify-between gap-4">
              <div className="border-t-[1px] border-r-[1px] border-primaryColor pt-6 w-[50%] pr-[37px] pl-[71px] flex justify-between">
                <div
                  className="flex items-center flex-col pt-2"
                  data-inviewport-right-to-left
                >
                  <p className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider">
                    PHASE <br />
                    <span className="text-[64px] leading-[64px]">4</span>
                  </p>
                  <img
                    src={VectorDownImg}
                    alt=""
                    data-inviewport-right-to-left
                  />
                </div>
                <div
                  className="flex flex-col gap-5 items-end"
                  data-inviewport-right-to-left
                >
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    65%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px] text-right">
                    We will complete Dividend Funding for Passive Income and
                    with DAO decisions will be done by community. We will also
                    announce our exclusive rarity system for our NFT collection.
                  </p>
                </div>
              </div>
              <div
                className="flex w-[50%] h-full"
                data-inviewport-right-to-left
              >
                <img alt="" src={LandingImg9} className="w-4/12 object-cover" />
                <img
                  alt=""
                  src={LandingImg11}
                  className="w-4/12 object-cover"
                />
                <img
                  alt=""
                  src={LandingImg12}
                  className="w-4/12 object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[320px] flex justify-between gap-4 relative">
              <div className="w-[57%] h-full">
                <img
                  className="w-full h-full object-cover"
                  src={LandingImg5}
                  alt=""
                  data-inviewport-left-to-right
                />
                <img
                  className="absolute bottom-0 left-[15%] fade-in-right-top-to-left-bottom"
                  src={LandingImg13}
                  alt=""
                />
              </div>
              <div className="border-t-[1px] border-l-[1px] border-primaryColor pt-6 w-[43%] pl-[37px] pr-[71px] flex justify-between">
                <div
                  className="flex flex-col gap-5"
                  data-inviewport-left-to-right
                >
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    85%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px]">
                    We will kickstart merchs for lodge including our partner’s
                    arts. Celebrations will also begin with a raffle giveaway to
                    community. (This will be open to all participants since it’s
                    planned to be done by our sponsor in local)
                  </p>
                </div>
                <div className="flex items-center flex-col pt-2">
                  <p
                    className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider"
                    data-inviewport-left-to-right
                  >
                    PHASE <br />
                    <span className="text-[64px] leading-[64px]">3</span>
                  </p>
                  <img
                    src={VectorDownImg}
                    alt=""
                    data-inviewport-left-to-right
                  />
                </div>
              </div>
            </div>
            <div
              className="w-full h-[320px] flex justify-between gap-4"
              data-inviewport
            >
              <div className="border-t-[1px] border-r-[1px] border-primaryColor pt-6 w-[50%] pr-[37px] pl-[71px] flex justify-between">
                <div className="flex items-center flex-col pt-2 gap-[20px]">
                  <p className="text-center text-[rgba(255,255,255,0.4)] font-black text-[34px] leading-[34px] tracking-wider">
                    PHASE <br />
                    <span
                      className="text-[64px] leading-[64px]"
                      data-inviewport-right-to-left
                    >
                      6
                    </span>
                  </p>
                  <div className="border-[1px] border-primaryColor p-10">
                    <div className="bg-primaryColor w-[64px] h-[64px]" />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-5 items-end"
                  data-inviewport-right-to-left
                >
                  <p className="text-[#79FFFE] font-black text-[64px] leading-[78px]">
                    100%
                  </p>
                  <p className="text-[rgba(255,255,255,0.85)] w-[300px] text-base font-medium leading-[20px] text-right">
                    We will complete Dividend Funding for Passive Income and
                    with DAO decisions will be done by community. We will also
                    announce our exclusive rarity system for our NFT collection.
                  </p>
                </div>
              </div>
              <img
                className="w-[50%] h-full object-cover"
                src={LandingImg6}
                alt=""
                data-inviewport-right-to-left
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-[170px]">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-[46px] leading-[68px] text-center">
              BULL'S LODGE NFT TEAM
            </h1>
            <p className="font-medium text-xl leading-[30px] text-center text-white">
              Project welcomes members around the world to share in knowledge
              about the ever-evolving space of NFTs.
            </p>
          </div>
          <TeamView />
        </div>
        <Faq />
        <div className="pt-[186px] w-[60%] max-w-[900px]">
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col items-center w-[311px]">
              <p className="text-white text-[22px] leading-[33px]">JOIN US</p>
              <p className="font-bold text-[40px] leading-[60px] text-white">
                ON DISCORD
              </p>
              <img src={DiscordImg} alt="" className="pt-5 w-[146px]" />
              <div className="flex justify-center gap-[15px] pt-8">
                <img src={LinkedInImg} className="w-4 h-4" alt="" />
                <img src={FacebookImg} className="w-4 h-4" alt="" />
                <img src={InstaImg} className="w-4 h-4" alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium text-primaryColor text-lg leading-[27px] underline">
                Terms and Conditions
              </p>
              <p className="font-medium text-primaryColor text-lg leading-[27px] underline">
                Privacy Policy
              </p>
            </div>
            <img src={BigLogo} alt="" className="w-[311px] object-cover" />
          </div>
          <div className="w-full flex flex-col items-center pt-[77px] pb-[200px]">
            <p className="text-white font-bold text-lg leading-[27px] text-center">
              © 2022 - Bulls Lodge NFT - All Rights Reserved.
            </p>
            <p className="text-center text-base leading-[27px] text-primaryColor">
              Contact E-mail: contact@bullslodgenft.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
