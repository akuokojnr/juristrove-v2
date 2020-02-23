import styled from "styled-components";

import media from "utils/media";

const PageWrap = styled.div`
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  ${media.md`
    margin-bottom: 1.5rem;
    
    canvas {
      width: 890px !important;
    }
  `}
`;

export { PageWrap };
