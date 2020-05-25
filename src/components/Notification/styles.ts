import styled from "styled-components";

import media from "utils/media";

export const Wrapper = styled.div<{ active: boolean }>`
  max-width: 310px;
  width: 100%;
  padding: 1.5rem;
  position: absolute;
  bottom: 2rem;
  right: translateX(calc(50% - 125px));
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  transform: translateY(2rem);
  opacity: 0;
  transition: all 240ms ease-in-out;

  ${({ active }) => active && `opacity: 1; transform: translateY(0);`};

  ${media.lg`
    max-width: 350px;
  `};

  & p {
    font-size: 0.9rem;
  }

  & svg {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    cursor: pointer;
  }
`;
