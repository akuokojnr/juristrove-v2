import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import { Document, Page } from "react-pdf/dist/entry.webpack";

// import { PageWrap } from "./styles";

interface ReaderProps {
  caseUrl: string;
}

/* const Reader: React.FC<ReaderProps> = ({ caseUrl }) => {
  const [numOfPages, setNumOfPages] = useState(0);

  const onDocLoadSuccess = document => {
    const { numPages } = document;
    setNumOfPages(numPages);
  };

  const getPages = () =>
    Array.from(new Array(numOfPages), (_, i) => (
      <PageWrap key={`page_${i++}`}>
        <Page pageNumber={i++} width={890} />
      </PageWrap>
    ));

  return (
    <Document file={caseUrl} onLoadSuccess={onDocLoadSuccess}>
      {getPages()}
    </Document>
  );
};

export default Reader; */

const Reader2: React.FC<ReaderProps> = ({ caseUrl }) => {
  const initializeViewer = () => {
    var adobeDCView = new AdobeDC.View({
      clientId: process.env.GATSBY_ADOBE_VIEW_CLIENT_ID,
      divId: "adobe-dc-view",
    });
    adobeDCView.previewFile({
      content: {
        location: {
          url: caseUrl,
        },
      },
      metaData: { fileName: "Bodea Brochure.pdf" },
    });
  };

  useEffect(() => {
    document.addEventListener("adobe_dc_view_sdk.ready", initializeViewer);
  });

  return (
    <>
      <Helmet>
        <script src="https://documentcloud.adobe.com/view-sdk/main.js" />
      </Helmet>

      <div id="adobe-dc-view" />
    </>
  );
};

export default Reader2;
