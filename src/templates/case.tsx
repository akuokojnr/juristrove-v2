import React from "react";
import { graphql } from "gatsby";
import { navigate } from "@reach/router";

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

  const goBack = () => navigate(-1);

  return (
    <Layout>
      <Wrapper>
        <Header>
          <BackIcon onClick={goBack} />
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
