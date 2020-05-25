import styled from "styled-components";
import { Link } from "gatsby";

export const FormWrap = styled.form`
  margin: 2rem 0;
  width: 100%;
  max-width: 400px;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.moderateCyan};
`;
