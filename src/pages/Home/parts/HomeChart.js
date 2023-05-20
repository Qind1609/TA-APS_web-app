import React, { useState, useEffect } from "react";
import CardLineChartDay from "./CardLineChartDay";
import CardLineChartMonth from "./CardLineChartMonth";
import CardLineChartWeek from "./CardLineChartWeek";

const utils = require('../../../helpers/utils');

const ChartHome = ({ time = {}, consumption = [], flow = [] }) => {
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
    console.log("time dayArray",time.dayArr);
    setDayArray(time.dayArr);
    setConsumptionDay(consumption.day);
    setFlowDay(flow.day);
  }, [time, consumption, flow])
  return (
    <>
      <div className="">
        <div className="w-full sm:mt-15">
          <ul className="flex mb-0 list-none   flex-row" role="tablist">
            <li className="-mb-px  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-2 shadow-lg  block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-blueGray-400 ")
                }
                onClick={(e) => {
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
                  "text-xs font-bold uppercase  py-2 shadow-lg  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-blueGray-400")
                }
                onClick={(e) => {
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
            <li className="-mb-px  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-2 shadow-lg block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-blueGray-400")
                }
                onClick={(e) => {
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
          <div className="relative flex flex-col min-w-0 break-words w-full">
            <div className="">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <CardLineChartDay time={dayArray} consumption={consumptionDay} flow={flowDay} />
                </div>
                {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <CardLineChartWeek
                    data={energy_data}
                    data_2={energy_data_2}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <CardLineChartMonth
                    data={energy_data}
                    data_2={energy_data_2}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartHome;
