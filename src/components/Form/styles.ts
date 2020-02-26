import styled from "styled-components";
import { Link } from "gatsby";

const FormWrap = styled.form`
  margin: 2rem 0;
  width: 100%;
  max-width: 400px;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.moderateCyan};
`;

const Error = styled.span`
  max-width: 400px;
  width: 100%;
  font-size: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: -0.5rem;
`

export { FormWrap, StyledLink, Error };
