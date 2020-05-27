import React, { useState } from "react";
import { QueryDocumentSnapshot } from "react-firebase-hooks";
import uuid from "uuid/v4";

import { Wrapper } from "components/common";
import ListItem from "./list-item";

import { NoData, ImgWrap, Lists } from "./styles";

import illustration from "assets/images/friendly-ones.png";

interface FavoritesProps {
  data:
    | QueryDocumentSnapshot<{
        title: string;
        path: string;
        timestamp: string;
      }>
    | undefined;
}

const Favorites: React.FC<FavoritesProps> = ({ data }) => {
  if (!data || !data.length) {
    return (
      <NoData>
        <ImgWrap>
          <img src={illustration} alt="" />
        </ImgWrap>
        <p>When you saved cases, they'll show up here for easy access.</p>
      </NoData>
    );
  }

  return (
    <Wrapper>
      <Lists>
        <ul>
          {data.map(
            ({
              title,
              path,
              timestamp,
            }: {
              title: string;
              path: string;
              timestamp: string;
            }) => (
              <ListItem
                key={uuid()}
                title={title}
                slug={path}
                savedAt={timestamp}
              />
            )
          )}
        </ul>
      </Lists>
    </Wrapper>
  );
};

export default Favorites;
