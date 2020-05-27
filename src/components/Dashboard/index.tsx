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

  let user;
  let authType;

  if (typeof window !== `undefined`) {
    user = JSON.parse(window.localStorage.getItem("user"));
    authType = JSON.parse(window.localStorage.getItem("authType"));
  }

  const username = delve(user, "displayName") && user.displayName;
  const userId = delve(user, "uid") && user.uid;
  const isLogin = delve(authType, "isLogin") && authType.isLogin;

  const [value, loading, error] = useCollection(
    firebase
      ?.firestore()
      .collection(`users/${userId}/savedCases`)
      .orderBy("timestamp", "desc")
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
            <p>Saved cases</p>
            {loading ? <Loader /> : <Welcome data={data} />}
          </ActivityWrap>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
