import React from "react";

import Layout from "components/Layout";
import LoginForm from "components/FormPage";
import SEO from "components/SEO";

const ResetPage: React.FC = () => {
  return (
    <>
      <SEO title="Reset your password" />
      <Layout>
        <LoginForm
          type="reset"
          title="Reset your password"
          buttonText="Continue"
        />
      </Layout>
    </>
  );
};

export default ResetPage;
