import React, { useState, useEffect } from "react";
import CardLineChart from "./CardLineChart";

const ChartTemp = ({ time = {}, temperature = [] }) => {
  const [timeArray, setTimeArray] = useState([]);
  const [temperatureArr, setTemperatureArray] = useState([]);

  useEffect(() => {
    setTimeArray(time.timeArr);
    setTemperatureArray(temperature);
  }, [time, temperature]);
  return (
      <div className="">
        <div className="w-full">
          <div className="relative p-4 flex flex-col min-w-0 break-words w-full">
            <div className="">
              <div className="tab-content tab-space">
                  <CardLineChart time={timeArray} temperature={temperatureArr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChartTemp;
