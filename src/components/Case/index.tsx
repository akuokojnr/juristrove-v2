import React, { useState, useEffect } from "react";
import { useDocument } from "react-firebase-hooks/firestore";

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
  const [caseUrl, setCaseUrl] = useState();

  const firebase = useFirebase();
  const userId = getUserId();

  const [value, loading, error] = useDocument(
    firebase?.firestore().doc(`cases/${slug}`)
  );

  const data = value?.data();

  const getCaseUrl = async link => {
    const url = await firebase
      ?.storage()
      .refFromURL(link)
      .getDownloadURL();
    return url;
  };

  const [snapshot, isLoading, err] = useDocument(
    firebase?.firestore().doc(`users/${userId}/savedCases/${data?.title}`)
  );

  useEffect(() => {
    if (snapshot?.exists) {
      setIsSaved(true);
    }

    const url = getCaseUrl(data?.url);
    setCaseUrl(url);
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
          <Reader caseUrl={caseUrl} title={data?.title} />
        </DocWrap>
      </Layout>
    </>
  );
};

export default CaseTemplate;
