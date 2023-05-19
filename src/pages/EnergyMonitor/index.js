import React from 'react';
import Layout from 'layouts/layout';
import ChartEnergy from './parts/EnergyChart';


export default function EnergyMonitorPage() {
  const data_energy = [];
  for (let i = 0; i < 100; i++) {
    data_energy.push(Math.floor(Math.random() * 100));
  }
  const data_energy_2 = [];
  for (let i = 0; i < 100; i++) {
    data_energy_2.push(Math.floor(Math.random() * 100));
  }
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words  w-full rounded">
            <ChartEnergy energy_data={data_energy} energy_data_2={data_energy_2} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
