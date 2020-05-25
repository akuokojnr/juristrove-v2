import React, { useState } from "react";
import { QueryDocumentSnapshot } from "react-firebase-hooks";
import uuid from "uuid/v4";

import { Wrapper } from "components/common";
import Category from "./category";
import List from "./lists";

import { Categories, NoData } from "./styles";

interface FavoritesProps {
  data:
    | QueryDocumentSnapshot<{
        category: string;
        description: string;
        savedAt: string;
      }>
    | undefined;
}

const Favorites: React.FC<FavoritesProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // let data =
  //   categories && categories.filter(i => i.category === activeCategory);

  const handleClick = category => {
    setActiveCategory(category);
    console.log(categories);
  };

  if (!data || !data.length) {
    return (
      <NoData>
        <p>You have not saved any case yet.</p>
      </NoData>
    );
  }

  return (
    <Wrapper>
      <Categories>
        {data.map(({ category, description, savedAt }) => (
          <Category
            key={uuid()}
            name={category}
            description={description}
            date={savedAt}
            handleClick={() => handleClick(category)}
          />
        ))}
      </Categories>
      {/* {activeCategory && (
        <List
          title={activeCategory}
          data={data}
          handleBack={setActiveCategory}
        />
      )} */}
    </Wrapper>
  );
};

export default Favorites;
