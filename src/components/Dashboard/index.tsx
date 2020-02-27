import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Welcome from "components/Welcome";
import { Wrapper } from "components/common";

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

const Dashboard: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout isApp={true}>
        <Wrapper>
          <Welcome username="Daniel" data={data} />
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
