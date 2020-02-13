import React from "react";

import Layout from "components/Layout";
import LoginForm from "components/Login";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default IndexPage;
