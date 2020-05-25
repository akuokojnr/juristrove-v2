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

  const user =
    delve(window, "localStorage") &&
    JSON.parse(window.localStorage.getItem("user"));

  const userId = user.uid;

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
