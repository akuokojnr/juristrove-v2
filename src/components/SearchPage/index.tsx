import React from "react";

import Layout from "components/Layout";
import Search from "components/Search";

const SearchPage: React.FC = () => (
  <Layout isApp={true}>
    <Search />
  </Layout>
);

export default SearchPage;
