import styled from "styled-components";
import { Link } from "gatsby";

import media from "utils/media";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 0 2rem;

  ${media.md`
  	max-width: 400px;
	  margin: 0 0 1.5rem;
  `}

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .pwd {
    padding: 0 !important;
    display: flex !important;
  }

  .forgot-password {
    margin-left: auto;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  padding: 0.5rem 1rem;
  transition: box-shadow 420ms;

  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.activeBoxShadow};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.moderateCyan};
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.6rem;
`;
