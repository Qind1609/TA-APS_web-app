import React, { useEffect, useState } from 'react';
import Layout from 'layouts/layout';
import ChartHome from './parts/HomeChart';
import {
  useGetHomeDataMutation,
} from './services';

export default function HomePage() {
  const [time, setTime] = useState({});
  const [consumption, setConsumption] = useState({});
  const [flow, setFlow] = useState({});
  const [getHomeDataApi] = useGetHomeDataMutation();

  const getHomeData = async () => {
    const { data } = await getHomeDataApi();
    if (data) {
      setTime(data.time);
      setConsumption(data.consumption);
      setFlow(data.flow);
    }
  };

  // get all data at the first reload, then query  every 60 seconds
  // useEffect(() => {
  //   getHomeData();
  //   const interval = setInterval(() => {
  //     getHomeData();
  //   }, 60000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <ChartHome time={time} consumption={consumption} flow={flow} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
