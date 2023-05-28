import React, {useState, useEffect} from 'react';
import Layout from 'layouts/layout';
import ChartTemp from './parts/TemperatureChart';

export default function TemperatureMonitorPage() {
  const [timeArray, setTimeArray] = useState([global.time]);
  const [temperatureArr, setTemperatureArray] = useState([global.temp]);
  useEffect(() => {
    setTimeArray(global.time);
    setTemperatureArray(global.temp);
  }, [global.time, global.temp]);
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <ChartTemp time={timeArray} temperature={temperatureArr}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
