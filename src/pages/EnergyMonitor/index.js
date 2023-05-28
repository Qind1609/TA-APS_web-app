import React, {useEffect, useState} from 'react';
import Layout from 'layouts/layout';
import ChartEnergy from './parts/EnergyChart';

export default function EnergyMonitorPage() {
  const [timeArray, setTimeArray] = useState([global.time]);
  const [consumptionArr, setConsumptionArray] = useState([global.consumption]);
  useEffect(() => {
    setTimeArray(global.time);
    setConsumptionArray(global.consumption);
  }, [global.time, global.consumption]);
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <ChartEnergy time={timeArray} consumption={consumptionArr} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
