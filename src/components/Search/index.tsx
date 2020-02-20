import React from "react";

import { Wrapper } from "components/common";
import Hit from "./hit";

import { SearchWrap, SearchInput, SearchIcon, HitsWrapper } from "./styles";

const Search: React.FC = () => (
  <Wrapper>
    <SearchWrap>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search cases by title or keywords"
      />
    </SearchWrap>

    <HitsWrapper>
      <Hit />
      <Hit />
    </HitsWrapper>
  </Wrapper>
);

export default Search;
