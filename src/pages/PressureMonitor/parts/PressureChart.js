import React, { useState, useEffect } from "react";
import CardBarChart from "./CardBarChart";

const ChartPress = ({ time = {}, pressure = [] }) => {
  const [timeArray, setTimeArray] = useState([]);
  const [pressureArr, setPressureArray] = useState([]);

  useEffect(() => {
    setTimeArray(time.timeArr);
    setPressureArray(pressure);
  }, [time, pressure]);
  return (
      <div className="">
        <div className="w-full">
          <div className="relative p-4 flex flex-col min-w-0 break-words w-full">
            <div className="">
              <div className="tab-content tab-space">
                  <CardBarChart time={timeArray} pressure={pressureArr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChartPress;
