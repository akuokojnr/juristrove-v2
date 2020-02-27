import React, { useState, useEffect } from "react";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

import useFirebase, { UserContext } from "utils/hooks/useFirebase";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const firebase = useFirebase();

  const [user, setUser] = useState({});
  const [userRef, setUserRef] = useState({});

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

        setUserRef(ref);

        let doc = await ref.get();
        setUser(doc.data());
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();
  }, [firebase]);

  return (
    <UserContext.Provider value={{ user, userRef }}>
      <main>
        <AppNav />
        {children}
        <AppFooter />
      </main>
    </UserContext.Provider>
  );
};

export default AppLayout;
