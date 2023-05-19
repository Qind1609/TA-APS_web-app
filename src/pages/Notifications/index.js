import React from 'react';
import CardTable from './parts/CardTable';
import Layout from 'layouts/layout';

export default function NotificationPage() {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full md:mt-16  mt-4  px-4">
          <CardTable color="light" />
        </div>
      </div>
    </Layout>
  );
}