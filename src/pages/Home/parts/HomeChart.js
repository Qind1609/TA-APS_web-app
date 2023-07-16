import React, { useState, useEffect } from 'react';
import CardLineChart from './CardLineChart';

const ChartHome = ({ time = {}, consumption = {}, flow = {} }) => {
  const [openTab, setOpenTab] = useState(1);
  const [dayArray, setDayArray] = useState([]);
  const [weekArray, setWeekArray] = useState([]);
  const [monthArray, setMonthArray] = useState([]);
  const [consumptionDay, setConsumptionDay] = useState([]);
  const [flowDay, setFlowDay] = useState([]);
  const [consumptionWeek, setConsumptionWeek] = useState([]);
  const [flowWeek, setFlowWeek] = useState([]);
  const [consumptionMonth, setConsumptionMonth] = useState([]);
  const [flowMonth, setFlowMonth] = useState([]);

  useEffect(() => {
    setDayArray(time.dayArr);
    setWeekArray(time.weekArr);
    setMonthArray(time.monthArr);
    setConsumptionDay(consumption.day);
    setConsumptionWeek(consumption.week);
    setConsumptionMonth(consumption.month);
    setFlowDay(flow.day);
    setFlowWeek(flow.week);
    setFlowMonth(flow.month);
  }, [time, consumption, flow]);
  return (
      <div className="">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-row" role="tablist">
            <li className="-mb-px  last:mr-0 flex-auto text-center">
              <a
                className={
                  // eslint-disable-next-line
                  "text-xs font-bold uppercase py-2 shadow-lg rounded-full mx-4 block leading-normal " +
                  (openTab === 1 ? "text-white bg-blueGray-600" : "text-blueGray-600 bg-blueGray-400")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Days
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  // eslint-disable-next-line
                  "text-xs font-bold rounded-full uppercase py-2 shadow-lg block leading-normal " +
                  (openTab === 2 ? "text-white bg-blueGray-600" : "text-blueGray-600 bg-blueGray-400")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Weeks
              </a>
            </li>
            <li className="-mb-px mr-2 rounded-full last:mr-0 flex-auto text-center">
              <a
                className={
                  // eslint-disable-next-line
                  "text-xs font-bold rounded-full mx-4 uppercase py-2 shadow-lg block leading-normal " +
                  (openTab === 3 ? "text-white bg-blueGray-600" : "text-blueGray-600 bg-blueGray-400")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Months
              </a>
            </li>
          </ul>
          <div className="relative p-4 flex flex-col min-w-0 break-words w-full">
            <div className="">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <CardLineChart
                    time={dayArray}
                    consumption={consumptionDay}
                    flow={flowDay}
                    canvasID="dayChartLineHome"
                    openTab={openTab}
                  />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <CardLineChart
                    time={weekArray}
                    consumption={consumptionWeek}
                    flow={flowWeek}
                    canvasID="weekChartLineHome"
                    openTab={openTab}
                  />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <CardLineChart
                    time={monthArray}
                    consumption={consumptionMonth}
                    flow={flowMonth}
                    canvasID="monthChartLineHome"
                    openTab={openTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChartHome;
