import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const FaqItem = ({
  title,
  description,
  selectedTitle,
  setSelectedTitle,
}: {
  title: string;
  description: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  selectedTitle: string;
}) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    if (title !== selectedTitle) setDescriptionVisible(false);
  }, [selectedTitle, title]);

  const onItemClicked = () => {
    if (descriptionVisible === false) {
      setSelectedTitle(title);
    }
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <div
      className="w-[60%] min-w-[800px] border-b-[1px] border-primaryColor"
      onClick={onItemClicked}
    >
      <div className="flex justify-between items-center">
        <div className="w-24" />
        <p
          className={`font-bold text-xl leading-[30px] py-4 ${
            descriptionVisible ? "text-primaryColor" : "text-white"
          }`}
        >
          {title}
        </p>
        <p className="w-24 flex justify-center">
          <FontAwesomeIcon
            icon={solid("chevron-down")}
            className={`text-primaryColor text-2xl ${
              descriptionVisible ? "-rotate-180" : ""
            } transition-all duration-500`}
          />
        </p>
      </div>
      <p
        className={`${
          descriptionVisible ? "h-28 pt-[14px]" : "h-0 pt-0"
        } overflow-y-hidden transition-all duration-500 text-center text-white text-xs leading-[15px]`}
      >
        {description}
      </p>
    </div>
  );
};

const Faq = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

  return (
    <div className="w-full flex flex-col items-center pt-[233px] transition-all duration-1000">
      <h1 className="text-white font-bold text-[46px] leading-[68px]">
        Bull's Lodge NFT
      </h1>
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="What is Bull’s Lodge NFT project’s mission and vision"
        description="Most of us have found ourselves either with NFT Project without utilities or worse, end up with rugpull. As this is not enough, we also have to face with Bearish Market sentiment and it's consequences... When it's sunshine and flowers everything is beautiful. But what about when Market is bloody hell? That was enough and we have made our decision! We want to create a value with Metaverse & In Real Life utilities and benefits for the members of our society. When it comes to earning, we want to create sustainable passive income model for members of Lodge. For this purpose, we have gathered together as volunteers/investors/contributors of Web3 and NFT. We have come together to push each other's back despite how strong the wind is. People from communities across the Web3, Blockchain, Machine Learning and NFT Spaces are now working to build a better COMMUNITY, a better HOME, a better LODGE!"
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="What is Bull’s Lodge NFT and how can i buy"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WAIT? YOU GUYS MENTIONED “LODGE”, WHAT DO YOU MEAN?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHAT IS THE MINTING PRICE AND MAX SUPPLY?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHY CREATE A COMMUNITY WALLET IF YOU ARE GOING TO CONTROL EVERYTHING?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHAT ARE 1000 RESERVED BULLS?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHAT BENEFITS DO I GET BY HOLDING BULL'S LODGE NFT?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHEN CAN I BEGIN MINTING?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHERE CAN I TRADE MY BULLS?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="HOW MANY BULL'S LODGE NFT'S CAN I PURCHASE?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHAT WILL HAPPEN IF WHALES OWN HUGE PROPORTION OF NFTS?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <FaqItem
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        title="WHO IS BEHIND BULL’S LODGE NFT PROJECT?"
        description="Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities. You can buy Bull’s through our official website by connecting into your Metamask once minting begins."
      />
      <p className="text-white font-normal text-xs leading-[14px] text-center pt-8">
        If you can’t find the information you seek here, don’t hesitate to reach
        out to our super-friendly support team in our Official Discord
      </p>
    </div>
  );
};

export default Faq;
