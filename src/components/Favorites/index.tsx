import React, { useState, useContext } from "react";
import uuid from "uuid/v4";

import { Wrapper } from "components/common";
import Category from "./category";
import List from "./lists";

import { Categories, NoData } from "./styles";

import { UserContext } from "utils/hooks/useFirebase";

const Favorites: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const { user } = useContext(UserContext);
  const categories = user.savedCases;
  let data =
    categories && categories.filter(i => i.category === activeCategory);

  const handleClick = category => {
    setActiveCategory(category);
    console.log(categories);
  };

  return (
    <Wrapper>
      {!activeCategory && (
        <>
          {categories && categories.length > 0 ? (
            <Categories>
              <>
                {categories.map(({ category, description, savedAt }) => (
                  <Category
                    key={uuid()}
                    name={category}
                    description={description}
                    date={savedAt}
                    handleClick={() => handleClick(category)}
                  />
                ))}
              </>
            </Categories>
          ) : (
            <NoData>
              <p>You have not saved any case yet.</p>
            </NoData>
          )}
        </>
      )}
      {activeCategory && (
        <List
          title={activeCategory}
          data={data}
          handleBack={setActiveCategory}
        />
      )}
    </Wrapper>
  );
};

export default Favorites;
