import React from "react";
import ReactTimeAgo from "react-time-ago";
import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

import { Card } from "./styles";

interface CategoryProps {
  name: string;
  description: string;
  date: string;
  handleClick: () => void;
}

const Category: React.FC<CategoryProps> = ({
  name,
  description,
  date,
  handleClick,
}) => (
  <Card onClick={handleClick}>
    <p>{name}</p>
    <p>{description}</p>
    <p>
      Updated{" "}
      <ReactTimeAgo date={date} />
    </p>
  </Card>
);

export default Category;
