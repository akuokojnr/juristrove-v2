import styled from "styled-components";

import media from "utils/media";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 0 2rem;

  ${media.md`
  	max-width: 400px;
	  margin: 0 0 3rem;
  `}

  span {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.4);
  width: 100%;
  padding-bottom: 0.5rem;

  :focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.black};
  }
`;

export { Input, Label };
