import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';


export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 ">
        <Navbar />
        <div className=" w-full ">
          {children}
        </div>
      </div>
    </>
  );
}
