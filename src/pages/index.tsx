import React from "react";

import Layout from "components/Layout";
import LoginForm from "components/FormPage";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <LoginForm
        type="sign-in"
        title="Sign in to your account"
        buttonText="Sign in"
      />
    </Layout>
  );
};

export default IndexPage;
