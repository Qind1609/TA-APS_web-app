import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={``}>
        <Sidebar isSidebarOpen={isSidebarOpen} handleButtonClick={handleButtonClick} />
      </div>

      <div
        className={`relative 
      ${isSidebarOpen ? 'md:ml-6' : 'md:ml-64'} `}
      >
        <Navbar handleButtonClick={handleButtonClick} />
        <div className=" w-full ">{children}</div>
      </div>
    </>
  );
}
