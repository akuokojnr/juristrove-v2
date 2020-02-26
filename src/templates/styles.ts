import styled from "styled-components";

import media from "utils/media";

import { ReactComponent as Back } from "assets/icons/back.svg";

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding-bottom: 2rem;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 0 1rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.limeGray};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  p {
    font-size: 0.8rem;
    font-weight: 500;
    max-width: 80%;
  }

  ${media.md`
    p {
      font-size: 1.3rem;
      font-weight: 500;
    }
  `}
`;

const BackIcon = styled(Back)`
  width: 40px;
  margin-bottom: -0.5rem;
  transform: scale(0.4);
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-top: 0.1rem;

  ${media.md`
    left: 2rem;
  `}
`;

const DocWrap = styled.section`
  max-width: 890px;
  width: auto;
  margin: 7rem 1.5rem;

  ${media.md`
    margin: 8rem auto;
  `}
`;

export { Wrapper, Header, BackIcon, DocWrap };
