import React, { useState } from "react";

import { BookmarkIcon } from "./styles";

interface ListItemProps {
  path: string;
  title: string;
  timestamp: string;
}

const ListItem: React.FC<ListItemProps> = ({ path, title, timestamp }) => {
  const [isCaseSaved, saveCase] = useState(true);

  const handleClick = () => {
    saveCase(!isCaseSaved);
  };

  return (
    <li>
      <a href={path}>
        {title}
        <span>Saved {timestamp}</span>
      </a>
      <BookmarkIcon onClick={handleClick} active={isCaseSaved} />
    </li>
  );
};

export default ListItem;
