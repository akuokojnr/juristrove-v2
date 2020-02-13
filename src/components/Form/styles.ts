import styled from "styled-components";
import { Link } from "gatsby";

import media from "utils/media";

const FormWrap = styled.form`
  margin: 2rem 0;
  width: 100%;
  max-width: 400px;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.moderateCyan};
`;

export { FormWrap, StyledLink };
