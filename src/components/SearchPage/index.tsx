import React, { useRef } from "react";
import { InstantSearch, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Wrapper } from "components/common";
import SearchInput from "./search-input";
import Hit from "./hit";

import { HitsWrapper, Root } from "./styles";

const SearchPage: React.FC = () => {
  const ref = useRef();

  const searchClient = algoliasearch(
    `${process.env.GATSBY_ALGOLIA_APP_ID}`,
    `${process.env.GATSBY_ALGOLIA_SEARCH_KEY}`
  );

  return (
    <>
      <SEO title="Search" />
      <Layout isApp={true}>
        <Wrapper>
          <InstantSearch
            searchClient={searchClient}
            indexName="CASES"
            root={{ Root, props: { ref } }}
          >
            <SearchInput />

            <HitsWrapper>
              <Hits hitComponent={Hit} />
            </HitsWrapper>
          </InstantSearch>
        </Wrapper>
      </Layout>
    </>
  );
};

export default SearchPage;
