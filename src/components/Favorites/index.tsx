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
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </Categories>
      <List data={data} />
    </Wrapper>
  );
};

export default Favorites;
