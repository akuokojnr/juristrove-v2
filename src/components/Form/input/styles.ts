import styled from "styled-components";

import media from "utils/media";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 0 2rem;

  ${media.md`
  	max-width: 400px;
	  margin: 0 0 2rem;
  `}

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  padding: 0.5rem;

  :focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.black};
  }
`;

export { Input, Label };
