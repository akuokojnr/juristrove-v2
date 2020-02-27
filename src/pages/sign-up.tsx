import React from "react";

import Layout from "components/Layout";
import RegisterForm from "components/FormPage";
import SEO from "components/SEO";

const IndexPage: React.FC = () => {

  return (
    <>
      <SEO title="Sign up" />
      <Layout>
        <RegisterForm
          type="sign-up"
          title="Create your Juristrove account"
          buttonText="Sign up"
        />
      </Layout>
    </>
  );
};

export default IndexPage;
