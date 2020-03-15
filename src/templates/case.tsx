import React from "react";
import { graphql } from "gatsby";
import { navigate } from "@reach/router";

import Layout from "components/Layout";
import Reader from "components/Reader";

import { DocWrap } from "./styles";

import { CaseTemplateQuery } from "_graphqlTypes";

interface CaseTemplateProps {
  data: {
    case: CaseTemplateQuery;
  };
}

const CaseTemplate: React.FC<CaseTemplateProps> = ({ data }) => {
  const { title, url } = data.case;
  const goBack = () => navigate(-1);

  return (
    <Layout>
      <DocWrap>
        <Reader caseUrl={url} title={title} />
      </DocWrap>
    </Layout>
  );
};

export default CaseTemplate;

export const query = graphql`
  query($id: String!) {
    case: datoCmsCase(id: { eq: $id }) {
      title
      url
    }
  }
`;
