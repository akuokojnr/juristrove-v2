import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

import { PageWrap } from "./styles";

interface ReaderProps {
  caseUrl: string;
}

const Reader: React.FC<ReaderProps> = ({ caseUrl }) => {
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

export default Reader;
