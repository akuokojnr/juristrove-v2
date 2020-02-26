import React, { createRef } from "react";
import { InstantSearch, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

import { Wrapper } from "components/common";
import SearchInput from "./search-input";
import Hit from "./hit";

import { HitsWrapper, Root } from "./styles";

const Search: React.FC = () => {
  const ref = createRef();

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  return (
    <Wrapper>
      <InstantSearch
        searchClient={searchClient}
        indexName="dev_CASES"
        root={{ Root, props: { ref } }}
      >
        <SearchInput />

        <HitsWrapper>
          <Hits hitComponent={Hit} />
        </HitsWrapper>
      </InstantSearch>
    </Wrapper>
  );
};

export default Search;
