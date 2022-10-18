import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { RiNotification3Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b border-neutral-300 px-4 py-3">
      <div className="flex flex-row items-center font-medium text-main text-[18px] cursor-pointer">
        <div className="bg-[#eef0f3] hover:bg-[#e9ebee] rounded-full p-2 mr-3">
          <BiArrowBack />
        </div>
        Assets
      </div>
      <div className="flex flex-row items-center gap-3">
        <button
          type="button"
          className="bg-primary hover:bg-[#014cec] rounded-[32px] font-semibold text-[16px] text-white px-7 py-2"
        >Buy / Sell</button>
        <button
          type="button"
          className="bg-[#eef0f3] hover:bg-[#e9ebee] rounded-[32px] font-semibold text-[16px] text-main px-7 py-2"
        >Send / Receive</button>
        <div className="relative bg-[#eef0f3] hover:bg-[#e9ebee] rounded-full p-3">
          <RiNotification3Line />
          <div className="absolute top-[5px] right-[5px] w-[10px] h-[10px] bg-rose-700 rounded-full" />
        </div>
        <div className="bg-[#eef0f3] hover:bg-[#e9ebee] rounded-full p-3">
          <CgMenuGridO />
        </div>
        <div className="w-[2px] h-[32px] bg-neutral-200" />
        <div className="bg-neutral-400 w-[42px] h-[42px] rounded-full" />
      </div>
    </div>
  );
}

export default Header;
