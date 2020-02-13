import React from "react";

import Layout from "components/Layout";
import RegisterForm from "components/FormPage";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <RegisterForm type="sign-up" title="Create your Juristrove account" buttonText="Sign up" />
    </Layout>
  );
};

export default IndexPage;
