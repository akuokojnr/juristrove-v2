import styled from "styled-components";

const Content = styled.ul`
  margin: 0;

  li {
    list-style-type: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.limeGray};
    transition: all ease 150ms;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
    }

    span {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.smallText};
      margin-top: 0.5rem;
    }

    :last-child {
      border: none;

      a {
        margin-bottom: 0;
      }
    }

    :hover {
      background: rgba(79, 90, 89, 0.09);
      border-radius: 6px;
    }
  }
`;

const NoData = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export { Content, NoData };
