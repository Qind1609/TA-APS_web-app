import React, { useState, useEffect } from 'react';
import CardBarChart from './CardBarChart';

const ChartFlow = ({ time = {}, flow = [] }) => {
  const [openTab, setOpenTab] = useState(1);
  const [dayArray, setDayArray] = useState([]);
  const [weekArray, setWeekArray] = useState([]);
  const [monthArray, setMonthArray] = useState([]);
  const [flowDay, setFlowDay] = useState([]);
  const [flowWeek, setFlowWeek] = useState([]);
  const [flowMonth, setFlowMonth] = useState([]);
  useEffect(() => {
    setDayArray(time.dayArr);
    setWeekArray(time.weekArr);
    setMonthArray(time.monthArr);
    setFlowDay(flow.day);
    setFlowWeek(flow.week);
    setFlowMonth(flow.month);
  }, [time, flow])
  return (
      <div className=''>
        <div className='w-full sm:mt-20'>
          <ul className='flex mb-0 list-none flex-row' role='tablist'>
            <li className='-mb-px last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase py-2 shadow-lg rounded-full mx-4 block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-blueGray-600'
                    : 'text-blueGray-600 bg-blueGray-400')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Days
              </a>
            </li>
            <li className='-mb-px last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold rounded-full uppercase py-2 shadow-lg block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-blueGray-600'
                    : 'text-blueGray-600 bg-blueGray-400')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Weeks
              </a>
            </li>
            <li className='-mb-px mx-2 rounded-full last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold rounded-full ml-4 uppercase py-2 shadow-lg block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-blueGray-600'
                    : 'text-blueGray-600 bg-blueGray-400')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Months
              </a>
            </li>
          </ul>
          <div className='relative p-4 flex flex-col min-w-0 break-words w-full'>
            <div className=''>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <CardBarChart time={dayArray} flow={flowDay} canvasID='dayChartBarFlow'/>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <CardBarChart time={weekArray} flow={flowWeek} canvasID='weekChartBarFlow'/>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <CardBarChart time={monthArray} flow={flowMonth} canvasID='monthChartBarFlow'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChartFlow;
