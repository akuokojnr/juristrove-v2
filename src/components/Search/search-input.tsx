import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

import { SearchWrap, SearchInput, SearchIcon } from "./styles";

export default connectSearchBox(({ refine, ...rest }) => (
  <SearchWrap>
    <SearchIcon />
    <SearchInput
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </SearchWrap>
));
