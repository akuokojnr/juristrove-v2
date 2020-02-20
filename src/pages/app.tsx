import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Welcome from "components/Welcome";
import { Wrapper } from "components/common";

const Dashboard: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout isApp={true}>
        <Wrapper>
          <Welcome username="Daniel" />
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
