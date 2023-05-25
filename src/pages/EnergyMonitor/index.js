import React from 'react';
import Layout from 'layouts/layout';
import ChartEnergy from './parts/EnergyChart';


export default function EnergyPage() {
  console.log(global.time);
  console.log(global.consumption);
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words  w-full rounded">
            <ChartEnergy time={global.time} consumption={global.consumption} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
