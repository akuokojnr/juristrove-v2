import React from "react";
import uuid from "uuid/v4";

import { Lists, BackIcon, Head } from "./styles";
import ListItem from "./list-item";

interface FavoriteListProps {
  title: string | null;
  data: Array<{
    title: string;
    path: string;
    timestamp: string;
  }>;
  handleBack: (value: null) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({
  title,
  data,
  handleBack,
}) => {
  const goBack = () => handleBack(null);

  return (
    <section>
      <Head>
        <BackIcon onClick={goBack} />
        <p>{title}</p>
      </Head>
      <Lists>
        {data ? (
          <ul>
            {data.map(({ title, slug, savedAt }) => (
              <ListItem
                key={uuid()}
                title={title}
                slug={slug}
                savedAt={savedAt}
              />
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
