import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Reader from "components/Reader";

import { Wrapper, Header, BackIcon, DocWrap } from "./styles";

import { CaseTemplateQuery } from "_graphqlTypes";

import case1 from "cases/case-1.pdf";

interface CaseTemplateProps {
  data: {
    case: CaseTemplateQuery;
  };
}

const CaseTemplate: React.FC<CaseTemplateProps> = ({ data }) => {
  const { title, url } = data.case;

  return (
    <Layout>
      <Wrapper>
        <Header>
          <BackIcon />
          <p>{title}</p>
        </Header>
        <DocWrap>
          <Reader caseUrl={case1} />
        </DocWrap>
      </Wrapper>
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
