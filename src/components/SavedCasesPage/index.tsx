import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Favorites from "components/Favorites";

const FavoritesPage: React.FC = () => (
  <>
    <SEO title="Saved cases" />
    <Layout isApp={true}>
      <Favorites />
    </Layout>
  </>
);

export default FavoritesPage;
