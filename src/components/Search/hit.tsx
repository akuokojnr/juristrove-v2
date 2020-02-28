import React, { useState } from "react";
import { Link } from "gatsby";
import { Snippet } from "react-instantsearch-dom";
import { DialogOverlay } from "@reach/dialog";

import Bookmark from "components/Bookmark";

import { HitWrap, BookmarkIcon, StyledDialogContent, Close } from "./styles";
import "@reach/dialog/styles.css";

interface HitProps {
  hit: {
    title: string;
    slug: string;
    content: string;
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => {
  const [isCaseSaved, saveCase] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const open = () => {
    setShowDialog(true);
  };

  const close = () => setShowDialog(false);

  return (
    <>
      <HitWrap>
        <Link to={hit.slug}>
          <h4>{hit.title}</h4>
          <Snippet hit={hit} attribute="content" />
        </Link>
        <BookmarkIcon onClick={open} active={isCaseSaved} />
      </HitWrap>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <StyledDialogContent>
          <Close className="close-button" onClick={close}>
            <span aria-hidden>×</span>
          </Close>
          <Bookmark
            hasSaved={saveCase}
            title={hit.title}
            slug={hit.slug}
            closeModal={close}
          />
        </StyledDialogContent>
      </DialogOverlay>
    </>
  );
};

export default Hit;
