import React, { useState, useEffect, useContext } from "react";
import uuid from "uuid/v4";

import { Wrapper } from "components/common";
import Category from "./category";
import List from "./lists";

import { Categories, NoData } from "./styles";

import { UserContext } from "utils/hooks/useFirebase";

const data = [
  {
    title: "Re Akoto & 7 Others",
    path: "#",
    timestamp: "10 hours ago",
  },
  {
    title: "Prof. Stephen Kwaku Asare v Attorney General",
    path: "#",
    timestamp: "Yesterday",
  },
  {
    title: "Acheampong v Acheampong",
    path: "#",
    timestamp: "2 weeks ago",
  },
];

const Favorites: React.FC = () => {
  const { user } = useContext(UserContext);
  const categories = user.savedCases;

  return (
    <Wrapper>
      {categories && categories.length > 0 ? (
        <Categories>
          <>
            {categories.map(({ category, description, createdAt }) => (
              <Category
                key={uuid}
                name={category}
                description={description}
                date={createdAt}
              />
            ))}
          </>
        </Categories>
      ) : (
        <NoData>
          <p>You have not saved any case yet.</p>
        </NoData>
      )}

      <List data={data} />
    </Wrapper>
  );
};

export default Favorites;
