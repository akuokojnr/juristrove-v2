import React from "react";

import { Close } from "@styled-icons/evaicons-solid/Close";

import { Wrapper } from "./styles";

interface NotificationProps {
  message: string;
  active: boolean;
  handleClose: (value: boolean) => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  active,
  handleClose,
}) => {
  const close = () => handleClose(false);

  return (
    <Wrapper active={active}>
      <Close size={20} onClick={close} />
      <p>{message}</p>
    </Wrapper>
  );
};

export default Notification;
