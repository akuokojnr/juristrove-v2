import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Reader from "components/Reader";

import { DocWrap } from "./styles";

interface CaseTemplateProps {
  data: {
    case: {
      title: string;
      url: string;
    };
  };
}

const CaseTemplate: React.FC<CaseTemplateProps> = ({ data }) => {
  const { title, url } = data.case;

  return (
    <>
      <SEO title={title} />
      <Layout isApp={true}>
        <DocWrap>
          <Reader caseUrl={url} title={title} />
        </DocWrap>
      </Layout>
    </>
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
