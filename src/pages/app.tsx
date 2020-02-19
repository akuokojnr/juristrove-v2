import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";

const Dashboard: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout isApp={true}></Layout>
    </>
  );
};

export default Dashboard;