import React from 'react';
import ExportPopup from 'components/ExportBox/ExportPopup';
import ImportPopup from 'components/ImportBox/ImportPopup';
import DarkModeToggle from 'components/DarkModeToggles/DarkModeToggle';
import UserDropdown from 'components/Dropdowns/UserDropdown';
// import NotificationDropdown from 'components/Dropdowns/NotificationDropdown';

export default function Navbar({ handleButtonClick }) {
  return (
    <>
      {/* Navbar */}
      <nav className=" mx-4 my-2 rounded-lg bg-blueGray-800 md:flex-row md:flex-nowrap md:justify-start flex items-center sm:p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-4 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Think Alpha
          </a>

          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>

          {/* ExportPopup */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <ExportPopup />
          </ul>

          {/* ExportPopup */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <ImportPopup />
          </ul>

          {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <NotificationDropdown />
          </ul> */}

          <div className=" hidden lg:inline-block">
            <DarkModeToggle onClick={() => {}} />
          </div>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </>
  );
}
