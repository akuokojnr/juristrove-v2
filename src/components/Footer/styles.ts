import styled from "styled-components";

import media from "utils/media";

const Footer = styled.footer`
  height: 4rem;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
  }
`;

export { Footer };
