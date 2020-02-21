import React from "react";
import uuid from "uuid/v4";

import { Lists, BackIcon, Head } from "./styles";
import ListItem from "./list-item";

interface FavoriteListProps {
  title: string;
  data: Array<{
    title: string;
    path: string;
    timestamp: string;
  }>;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ title, data }) => {
  return (
    <section>
      <Head>
        <BackIcon />
        <p>Uncategorized</p>
      </Head>
      <Lists>
        {data ? (
          <ul>
            {data.map(item => (
              <ListItem key={uuid()} {...item} />
            ))}
          </ul>
        ) : (
          <span>You do not have any saved case in this category.</span>
        )}
      </Lists>
    </section>
  );
};

export default FavoriteList;
