import styled from "styled-components";

import media from "utils/media";

const DocWrap = styled.section`
  height: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.readerBg};

  ${media.lg`
    padding: 2rem 0;
  `};

  #adobe-dc-view {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export { DocWrap };
