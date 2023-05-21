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
    console.log("time weekArray",time.weekArr);
    setDayArray(time.dayArr);
    setWeekArray(time.weekArr);
    setMonthArray(time.monthArr);
    setConsumptionDay(consumption.day);
    setConsumptionWeek(consumption.week);
    setConsumptionMonth(consumption.month);
    setFlowDay(flow.day);
    setFlowWeek(flow.week);
    setFlowMonth(flow.month);
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
          <div className="relative p-4 flex flex-col min-w-0 break-words w-full">
            <div className="">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <CardLineChartDay time={dayArray} consumption={consumptionDay} flow={flowDay} />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <CardLineChartWeek time={weekArray} consumption={consumptionWeek} flow={flowWeek} />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <CardLineChartMonth time={monthArray} consumption={consumptionMonth} flow={flowMonth} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartHome;
