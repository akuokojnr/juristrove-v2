import styled from "styled-components";

const StyledButton = styled.button`
  ${({ theme }) => theme.button};
  width: 100%;
`;

export { StyledButton };
