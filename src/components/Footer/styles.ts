import styled from "styled-components";

export const Footer = styled.footer`
  height: 4rem;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
  }
`;
