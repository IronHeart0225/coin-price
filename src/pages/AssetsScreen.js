import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { FaBitcoin, FaStar } from 'react-icons/fa';

const AssetsScreen = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#f9f9ff] p-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaBitcoin className="text-[40px] text-[#f7931a]" />
          <h1 className="font-semibold text-[28px] text-main">Bitcoin</h1>
          <span className="font-medium text-[24px] text-[#5b6163]">BTC</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-[8px] px-3 py-2 cursor-pointer">
          <FaStar className="text-[#edbc03]" />
          <span className="font-medium text-[16px] text-main">Watchlist</span>
        </div>
      </div>
      <Tabs
        className="mt-4"
        selectedTabClassName="border-b-2 border-main font-semibold text-main"
      >
        <TabList className="flex flex-row  items-center gap-6 border-b border-neutral-300 px-4 font-medium text-[#5b6163]">
          <Tab className="py-4 cursor-pointer">Overview</Tab>
          <Tab className="py-4 cursor-pointer">Wallet</Tab>
          <Tab className="py-4 cursor-pointer">Vault</Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AssetsScreen;
