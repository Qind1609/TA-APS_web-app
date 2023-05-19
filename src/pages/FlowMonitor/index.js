import React from "react";
import ChartLoad from "./parts/LoadChart";
import Layout from "layouts/layout";

export default function FlowPage() {

  const data_load = [];
  for (let i = 0; i < 100; i++) {
    data_load.push(Math.floor(Math.random() * 100));
  }

  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words  w-full rounded">
            <ChartLoad load_data={data_load} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
