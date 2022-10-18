import React from 'react';
import { BiPieChartAlt, BiTrendingUp, BiDotsVerticalRounded } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';
import { RiWalletLine } from 'react-icons/ri';
import LOGO from '../assets/images/logo.png';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center h-full min-h-[100vh] border-r border-neutral-300 gap-5 px-4 py-4">
      <img src={LOGO} alt="" className="w-[40px] mb-4" />
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <HiOutlineHome className="text-[22px] text-main" />
      </div>
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <BiPieChartAlt className="text-[22px] text-main" />
      </div>
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <BiTrendingUp className="text-[22px] text-main" />
      </div>
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <MdOutlineFiberSmartRecord className="text-[22px] text-main" />
      </div>
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <RiWalletLine className="text-[22px] text-main" />
      </div>
      <div className="hover:bg-[#e9ebee] rounded-full p-2 cursor-pointer">
        <BiDotsVerticalRounded className="text-[22px] text-main" />
      </div>
    </div>
  );
}

export default SideBar;
