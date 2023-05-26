import React from 'react';
import Layout from 'layouts/layout';
import CardTable from './parts/CardTable';

export default function NotificationPage() {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full  mt-4  px-4">
          <CardTable color="light" />
        </div>
      </div>
    </Layout>
  );
}
