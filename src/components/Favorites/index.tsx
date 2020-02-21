import React from "react";

import { Wrapper } from "components/common";
import Category from "./category";
import List from "./lists";

import { Categories } from "./styles";

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
  return (
    <Wrapper>
      <Categories>
        <Category
          name="Uncategorized"
          description="Some short description"
          date="June 11, 2020"
        />
        <Category
          name="Contract"
          description="Some short description"
          date="June 11, 2020"
        />
        <Category
          name="Research"
          description="Some short description"
          date="June 11, 2020"
        />
        <Category
          name="Supreme court"
          description="Some short description"
          date="June 11, 2020"
        />
      </Categories>
      <List data={data} />
    </Wrapper>
  );
};

export default Favorites;
