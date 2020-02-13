import React from "react";

import Layout from "components/Layout";
import LoginForm from "components/FormPage";
import SEO from "components/SEO";

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Sign in" />
      <Layout>
        <LoginForm
          type="sign-in"
          title="Sign in to your account"
          buttonText="Sign in"
        />
      </Layout>
    </>
  );
};

export default IndexPage;
