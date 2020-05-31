import React from "react";
import { Link } from "gatsby";
import { Snippet } from "react-instantsearch-dom";

import { HitWrap } from "./styles";

interface HitProps {
  hit: {
    title: string;
    slug: string;
    position: number;
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => {
  return (
    <HitWrap>
      <Link to={hit.slug}>
        <h4>{hit.title}</h4>
        <Snippet hit={hit} attribute="content" />
      </Link>
    </HitWrap>
  );
};

export default Hit;
