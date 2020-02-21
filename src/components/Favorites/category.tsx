import React from "react";

import { Card } from "./styles";

interface CategoryProps {
  name: string;
  description: string;
  date: string;
}
const Category: React.FC<CategoryProps> = ({ name, description, date }) => (
  <Card>
    <p>{name}</p>
    <p>{description}</p>
    <p>{date}</p>
  </Card>
);

export default Category;
