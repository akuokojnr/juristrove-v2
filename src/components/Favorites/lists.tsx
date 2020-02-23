import React from "react";
import uuid from "uuid/v4";
import { navigate } from "@reach/router";

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
  const goBack = () => navigate(-1);

  return (
    <section>
      <Head>
        <BackIcon onClick={goBack} />
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
