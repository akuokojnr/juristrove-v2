import React, { useState } from "react";
import { Link } from "gatsby";

import { HitWrap, BookmarkIcon } from "./styles";

const Hit: React.FC = () => {
  const [isCaseSaved, saveCase] = useState(false);

  const handleClick = () => {
    saveCase(!isCaseSaved);
  };

  return (
    <HitWrap>
      <Link to="/case">
        <h4>Prof. Stephen Kwaku Asare v Attorney-General</h4>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </p>
      </Link>
      <BookmarkIcon onClick={handleClick} active={isCaseSaved} />
    </HitWrap>
  );
};

export default Hit;
