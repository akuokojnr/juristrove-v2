import React, { useState, useEffect } from "react";

import { Wrapper } from "components/common";
import Category from "./category";
import List from "./lists";

import { Categories, NoData } from "./styles";

import useFirebase from "utils/hooks/useFirebase";

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
  const [user, setUser] = useState({});
  const firebase = useFirebase();

  const categories = user.savedCases;

  let {
    user: { email },
  } = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    if (!firebase) return;

    const getUserData = async () => {
      try {
        let ref = await firebase
          .firestore()
          .collection("users")
          .doc(email);

        let doc = await ref.get();
        setUser(doc.data());
        console.log(doc.data());
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();
  }, [firebase]);

  return (
    <Wrapper>
      {categories && categories.length > 0 ? (
        <Categories>
          <>
            {categories.map(({ id, category, description, createdAt }) => (
              <Category
                key={id}
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

{
  /* <Category
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
        /> */
}
