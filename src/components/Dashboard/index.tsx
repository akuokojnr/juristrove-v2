import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import delve from "dlv";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Welcome from "components/Welcome";
import { Wrapper } from "components/common";

import useFirebase from "utils/hooks/useFirebase";

import { Blurb, Loader, ActivityWrap } from "./styles";

const Dashboard: React.FC = () => {
  const firebase = useFirebase();
  const user =
    delve(window, "localStorage") &&
    JSON.parse(window.localStorage.getItem("user"));
  const authType =
    delve(window, "localStorage") &&
    JSON.parse(window.localStorage.getItem("authType"));

  const username = user.displayName;
  const userId = user.uid;
  const isLogin = authType.isLogin;

  const [value, loading, error] = useCollection(
    firebase?.firestore().collection(`users/${userId}/recentlyViewed`)
  );

  const data = value?.docs;

  return (
    <>
      <SEO title="Dashboard" />
      <Layout isApp={true}>
        <Wrapper>
          <Blurb>
            <h3>Hello {username}!</h3>
            {isLogin ? (
              <p>Welcome back to Juristrove.</p>
            ) : (
              <p>Welcome to Juristrove</p>
            )}
          </Blurb>
          <ActivityWrap>
            <p>Recent</p>
            {loading ? <Loader /> : <Welcome data={data} />}
          </ActivityWrap>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
