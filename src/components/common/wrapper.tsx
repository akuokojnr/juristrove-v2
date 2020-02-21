import styled from "styled-components";

import media from "utils/media";

const Wrapper = styled.div`
  max-width: 1380px;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem 1.5rem;

  ${media.md`
    padding: 4rem;
  `}
`;

export default Wrapper;
