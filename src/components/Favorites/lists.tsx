import React from "react";
import uuid from "uuid/v4";

import { Lists, BackIcon, Head } from "./styles";

interface FavoriteListProps {
  title: string;
  data: Array<{
    title: string;
    path: string;
    timestamp: string;
  }>;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ title, data }) => (
  <section>
    <Head>
      <BackIcon />
      <p>Uncategorized</p>
    </Head>
    <Lists>
      {data ? (
        <ul>
          {data.map(({ title, path, timestamp }) => (
            <li key={uuid()}>
              <a href={path}>
                {title}
                <span>Saved {timestamp}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <span>You do not have any saved case in this category.</span>
      )}
    </Lists>
  </section>
);

export default FavoriteList;
