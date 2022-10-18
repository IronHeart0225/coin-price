import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const AppLayout = (props) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        {props.children}
      </div>
    </div>
  );
}

export default AppLayout;
