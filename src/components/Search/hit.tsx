import React, { useState } from "react";
import { Link } from "gatsby";
import { Snippet } from "react-instantsearch-dom";

import { HitWrap, BookmarkIcon } from "./styles";

interface HitProps {
  hit: {
    title: string;
    slug: string;
    content: string;
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => {
  const [isCaseSaved, saveCase] = useState(false);

  const handleClick = () => {
    saveCase(!isCaseSaved);
  };

  return (
    <HitWrap>
      <Link to={hit.slug}>
        <h4>{hit.title}</h4>
        <Snippet hit={hit} attribute="content" />
      </Link>
      <BookmarkIcon onClick={handleClick} active={isCaseSaved} />
    </HitWrap>
  );
};

export default Hit;
