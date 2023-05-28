import React from 'react';
import Layout from 'layouts/layout';
import CardSettings from './parts/CardSettings';
import CardProfile from './parts/CardProfile';



export default function SettingPage() {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </Layout>
  );
}

SettingPage.Layout = Layout;
