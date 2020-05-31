import React, { useState, useEffect } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Reader from "components/Reader";

import useFirebase from "utils/hooks/useFirebase";
import getUserId from "utils/hooks/useFirebase/getUserId";

import { DocWrap } from "./styles";

interface CaseTemplateProps {
  slug: string;
}

const CaseTemplate: React.FC<CaseTemplateProps> = ({ slug }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const firebase = useFirebase();
  const userId = getUserId();

  // Load request case meta
  const [value] = useDocument(firebase?.firestore().doc(`cases/${slug}`));
  const data = value?.data();

  // Get download url
  const [url, loading, error] = useDownloadURL(
    firebase?.storage().ref(`cases/${data?.title}.pdf`)
  );

  // Check if case has already been saved
  const [snapshot, isLoading, err] = useDocument(
    firebase?.firestore().doc(`users/${userId}/savedCases/${data?.title}`)
  );

  useEffect(() => {
    if (snapshot?.exists) {
      setIsSaved(true);
    }
  });

  return (
    <>
      <SEO title={data?.title} />
      <Layout
        isApp={true}
        hasSaveButton={true}
        caseMeta={data}
        caseIsSaved={isSaved}
        checkingSaveStatus={isLoading}
        setSaveStatus={setIsSaved}
      >
        <DocWrap>
          {!loading && url && <Reader caseUrl={url} title={data?.title} />}
        </DocWrap>
      </Layout>
    </>
  );
};

export default CaseTemplate;
