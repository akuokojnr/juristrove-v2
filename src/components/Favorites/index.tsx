import React, { useState } from "react";
import { QueryDocumentSnapshot } from "react-firebase-hooks";
import uuid from "uuid/v4";
import ReactTimeAgo from "react-time-ago";
import JavascriptTimeAgo from "javascript-time-ago";

import { Wrapper } from "components/common";
import List from "./lists";

import illustration from "assets/images/friendly-ones.png";

import en from "javascript-time-ago/locale/en";
JavascriptTimeAgo.locale(en);

import { Categories, NoData, ImgWrap, Card } from "./styles";

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

  // TODO: filter categories and category items

  const handleClick = category => {
    setActiveCategory(category);
    // console.log(category);
  };

  if (!data || !data.length) {
    return (
      <NoData>
        <ImgWrap>
          <img src={illustration} alt="" />
        </ImgWrap>
        <p>You have not saved any case yet.</p>
      </NoData>
    );
  }

  return (
    <>
      <Categories>
        {data.map(
          ({
            category,
            description,
            savedAt,
          }: {
            category: string;
            description: string;
            savedAt: string;
          }) => (
            <Card key={uuid()} onClick={() => handleClick(category)}>
              <p>{category}</p>
              <p>{description}</p>
              <p>
                Updated <ReactTimeAgo date={savedAt} />
              </p>
            </Card>
          )
        )}
      </Categories>
      {/* {activeCategory && (
        <List
          title={activeCategory}
          data={data}
          handleBack={setActiveCategory}
        />
      )} */}
    </>
  );
};

export default Favorites;
