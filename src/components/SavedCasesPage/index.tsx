import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import delve from "dlv";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Wrapper } from "components/common";
import Favorites from "components/Favorites";

import { Loader } from "./styles";

import useFirebase from "utils/hooks/useFirebase";

const FavoritesPage: React.FC = () => {
  const firebase = useFirebase();

  let user;

  if (typeof window !== `undefined`) {
    user = JSON.parse(window.localStorage.getItem("user"));
  }

  const userId = delve(user, "uid") && user.uid;

  const [value, loading, error] = useCollection(
    firebase?.firestore().collection(`users/${userId}/savedCases`)
  );

  const data = value?.docs;

  return (
    <>
      <SEO title="Saved cases" />
      <Layout isApp={true}>
        <Wrapper>{loading ? <Loader /> : <Favorites data={data} />}</Wrapper>
      </Layout>
    </>
  );
};

export default FavoritesPage;
