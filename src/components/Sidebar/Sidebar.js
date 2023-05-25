import React from 'react';
import { Link } from 'react-router-dom';
import ExportPopup from 'components/ExportBox/ExportPopup';
import { useState, useEffect } from 'react';

import Button from 'components/Buttons/ButtonDarkMode';
import NotificationDropdown from 'components/Dropdowns/NotificationDropdown';
import UserDropdown from 'components/Dropdowns/UserDropdown';

export default function Sidebar({ isSidebarOpen, handleButtonClick }) {
  const [mounted, setMounted] = useState(false);
  const [collapseShow, setCollapseShow] = useState('hidden');

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = 'dark';

    if (currentTheme === 'dark') {
      return (
        <Button className="bg-gray-200 mx-4 " onClick={() => {}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200 mx-4" onClick={() => {}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <>
      <nav
        className={`md:left-0 md:block bg-blueGray-800  md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl lex flex-wrap items-center justify-between relative m-2 rounded-lg  z-10 py-4 px-6
        ${isSidebarOpen ? 'md:w-1/5' : 'md:w-64'}  
        `}
      >
        <button onClick={handleButtonClick} className="button">
          <i className="fas fa-bars text-white md:block hidden font-semibold p-2"></i>
        </button>
        <div
          className={`md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto
         `}
        >
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <Link
            className={` text-left md:pb-2 text-blueGray-600 mr-0  whitespace-nowrap text-sm uppercase font-bold p-4 px-0
            ${isSidebarOpen ? 'hidden' : ''}`}
            to="/"
          >
            eThink Alpha
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <ExportPopup />
            </li>
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">{renderThemeChanger()}</li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div
                  className={`w-6/12
                `}
                >
                  <Link
                    to="/"
                    className={`md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0
                    `}
                  >
                    THINK ALPHA
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6
              className={`md:min-w-full text-blueGray-400 text-md uppercase  pt-1 mt-6 pb-4 no-underline
            ${isSidebarOpen ? 'hidden' : ''}`}
            >
              Monitors
            </h6>

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  to="/home"
                  className={
                    'text-xs uppercase py-3 flex ' +
                    (window.location.href.indexOf('/home') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-blueGray-500 hover:text-blueGray-500')
                  }
                >
                  <i
                    className={
                      'fas fa-home mr-3 text-sm ' +
                      (window.location.href.indexOf('/home') !== -1 ? 'opacity-75' : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  Home
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/energy-monitor"
                  className={
                    'text-xs uppercase py-3  flex ' +
                    (window.location.href.indexOf('/energy-monitor') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-blueGray-500 hover:text-blueGray-500')
                  }
                >
                  <i
                    className={
                      'fas fa-tv mr-3 text-sm ' +
                      (window.location.href.indexOf('/energy-monitor') !== -1 ? 'opacity-75' : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}>Electricity</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  to="/load-monitor"
                  className={
                    'text-xs uppercase py-3  flex ' +
                    (window.location.href.indexOf('/load-monitor') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-blueGray-500 hover:text-blueGray-500')
                  }
                >
                  <i
                    className={
                      'fas fa-tools mr-3 text-sm ' +
                      (window.location.href.indexOf('/load-monitor') !== -1 ? 'opacity-75' : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}>Pneumatics Load</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  to="/notifications"
                  className={
                    'text-xs uppercase py-3  flex ' +
                    (window.location.href.indexOf('/notifications') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-blueGray-500 hover:text-blueGray-500')
                  }
                >
                  <i
                    className={
                      'fas fa-bell mr-3 text-sm ' +
                      (window.location.href.indexOf('/notifications') !== -1 ? 'opacity-75' : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}> Notifications</p>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full " />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-400 text-md uppercase  block pt-4 mt-10 pb-4 no-underline">
              <p className={`${isSidebarOpen ? 'hidden' : ''}`}> Settings</p>
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  to="/settings"
                  className={
                    'text-xs uppercase py-3 flex ' +
                    (window.location.href.indexOf('/settings') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-blueGray-500 hover:text-blueGray-500')
                  }
                >
                  <i
                    className={
                      'fas fa-table mr-3 text-sm ' +
                      (window.location.href.indexOf('/settings') !== -1 ? 'opacity-75' : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}> Settings</p>
                </Link>
              </li>
              <li className="items-center">
                <Link to="/log-in" className="text-blueGray-500 hover:text-blueGray-500 text-xs uppercase py-3  flex">
                  <i className="fas fa-fingerprint text-blueGray-400 mr-3 text-sm"></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}> login</p>
                </Link>
              </li>

              <li className="items-center">
                <Link to="/register" className="text-blueGray-500 hover:text-blueGray-500 text-xs uppercase py-3 flex">
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-4 text-sm"></i>{' '}
                  <p className={`${isSidebarOpen ? '' : 'hindden'}`}> register</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
