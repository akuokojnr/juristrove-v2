import styled, { keyframes } from "styled-components";

const loading = keyframes`
  50% {
    opacity: 0;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  animation: ${loading} 1.5s linear infinite;
`;
