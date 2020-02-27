import React, { useState, useEffect } from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Welcome from "components/Welcome";
import { Wrapper } from "components/common";

import useFirebase from "utils/hooks/useFirebase";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({});
  const firebase = useFirebase();

  const data = user.recentlyView;

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
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();
  }, [firebase]);

  return (
    <>
      <SEO title="Home" />
      <Layout isApp={true}>
        <Wrapper>
          <Welcome username={user.username} data={data} />
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
