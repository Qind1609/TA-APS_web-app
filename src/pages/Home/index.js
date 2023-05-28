import React from 'react';
import Layout from 'layouts/layout';
import ChartHome from './parts/HomeChart';

export default function HomePage() {
  console.log(global.time);
  console.log(global.consumption);
  console.log(global.flow);
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <ChartHome time={global.time} consumption={global.consumption} flow={global.flow} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
