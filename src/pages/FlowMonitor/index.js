import React from 'react';
import ChartFlow from './parts/FlowChart';
import Layout from 'layouts/layout';

export default function FlowPage() {
  console.log(global.time);
  console.log(global.flow);
  return (
    <Layout>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <div className='relative flex flex-col min-w-0 break-words w-full rounded'>
            <ChartFlow time={global.time} flow={global.flow} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
