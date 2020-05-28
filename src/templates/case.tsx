import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Reader from "components/Reader";

import { DocWrap } from "./styles";

interface CaseTemplateProps {
  data: {
    case: {
      originalId: string;
      title: string;
      url: string;
      slug: string;
      issaved: boolean;
    };
  };
}

const CaseTemplate: React.FC<CaseTemplateProps> = ({ data }) => {
  const { title, url } = data.case;

  return (
    <>
      <SEO title={title} />
      <Layout isApp={true} hasSaveButton={true} caseMeta={data.case}>
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
      originalId
      title
      url
      slug
      issaved
    }
  }
`;
