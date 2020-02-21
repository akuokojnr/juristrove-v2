import React from "react";

import Layout from "components/Layout";
import Favorites from "components/Favorites";

const FavoritesPage: React.FC = () => (
  <Layout isApp={true}>
    <Favorites />
  </Layout>
);

export default FavoritesPage;
