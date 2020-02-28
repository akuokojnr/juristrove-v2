import ReactTimeAgo from "react-time-ago";
import React, { useState } from "react";
import JavascriptTimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
JavascriptTimeAgo.locale(en);

import { BookmarkIcon } from "./styles";

interface ListItemProps {
  slug: string;
  title: string;
  savedAt: string;
}

const ListItem: React.FC<ListItemProps> = ({ slug, title, savedAt }) => {
  const [isCaseSaved, saveCase] = useState(true);

  const handleClick = () => {
    saveCase(!isCaseSaved);
  };

  return (
    <li>
      <a href={`/${slug}`}>
        {title}
        <span>
          Saved{" "}
          <ReactTimeAgo date={savedAt} />
        </span>
      </a>
      <BookmarkIcon onClick={handleClick} active={isCaseSaved} />
    </li>
  );
};

export default ListItem;
