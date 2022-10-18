import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiFillExclamationCircle } from 'react-icons/ai';
import CoinGeckoChart from '../../components/CoinGeckoChart';

const AssetOverview = () => {
  return (
    <div className="flex items-start gap-10 mt-10">
      <CoinGeckoChart />
      <Tabs
        className="w-[420px] bg-white rounded-[4px]"
        selectedTabClassName="font-semibold text-primary border-b-0 border-t-2 border-t-primary"
      >
        <TabList className="grid grid-cols-3 font-medium text-center text-[#5b6163]">
          <Tab className="border border-neutral-300 py-4 cursor-pointer">Buy</Tab>
          <Tab className="border border-neutral-300 py-4 cursor-pointer">Sell</Tab>
          <Tab className="border border-neutral-300 py-4 cursor-pointer">Convert</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col items-center rounded-[4px] border-x border-b border-neutral-300">
            <AiFillExclamationCircle className="text-[80px] text-[#edbc03] mt-[60px]" />
            <p className="font-medium mt-[40px] mb-[20px]">Deposit Required</p>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export { AssetOverview };
