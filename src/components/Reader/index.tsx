import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface ReaderProps {
  caseUrl: string;
  title: string;
}

const Reader: React.FC<ReaderProps> = ({ caseUrl, title }) => {
  const viewerConfig = {
    showAnnotationTools: true,
    enableFormFilling: false,
    showLeftHandPanel: true,
    showDownloadPDF: true,
    showPrintPDF: true,
    showPageControls: true,
    dockPageControls: false,
    embedMode: "IN_LINE",
  };

  const initializeViewer = () => {
    var adobeDCView = new AdobeDC.View({
      clientId: process.env.GATSBY_ADOBE_VIEW_CLIENT_ID,
      divId: "adobe-dc-view",
    });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: caseUrl,
          },
        },
        metaData: { fileName: title },
      },
      viewerConfig
    );
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

export default Reader;
