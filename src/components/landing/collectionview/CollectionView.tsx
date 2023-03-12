import React from "react";
import NftItem from "./NftItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const CollectionView = () => {
  return (
    <div className="w-full mt-[200px] flex flex-col items-center">
      <div>
        <h1 className="font-bold text-[46px] leading-[68px] text-white">
          OUR LODGE'S NFT COLLECTION
        </h1>
        <p className="mt-0.5 text-xl leading-[30px] text-center font-medium text-white">
          Each Bull features a combination of unique traits,
          <br /> handcrafted in signature style by our in-house digital artists.
        </p>
      </div>
      <div className="relative w-full h-[360px]">
        <div className="flex justify-center items-center h-[360px]">
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
        </div>
      </div>
      <div className="flex justify-between max-w-[480px] w-full items-center overflow-y-hidden">
        <button>
          <FontAwesomeIcon
            icon={solid("chevron-left")}
            className="text-white"
          />
        </button>
        <div className="w-[344px] h-[5px] bg-[#D9D9D9]">
          <div className="h-full w-[30%] bg-primaryColor"></div>
        </div>
        <button>
          <FontAwesomeIcon
            icon={solid("chevron-right")}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default CollectionView;
