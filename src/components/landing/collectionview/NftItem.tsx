import React from "react";
import { motion } from "framer-motion";

import Nft1Img from "../../../assets/img/NFT1.png";

const NftItem = () => {
  return (
    <motion.div whileHover={{ width: "380px" }} className="w-[310px] flex-none">
      <img src={Nft1Img} alt="" className="rounded-[15px] w-full" />
    </motion.div>
  );
};

export default NftItem;
