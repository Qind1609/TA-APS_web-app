import React, {useState, useEffect} from 'react';
import Layout from 'layouts/layout';
import ChartPress from './parts/PressureChart';

export default function PressureMonitorPage() {
  const [timeArray, setTimeArray] = useState([global.time]);
  const [pressureArr, setPressureArray] = useState([global.press]);
  useEffect(() => {
    setTimeArray(global.time);
    setPressureArray(global.press);
  }, [global.time, global.press]);
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words  w-full rounded">
            <ChartPress time = {timeArray} pressure = {pressureArr} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
