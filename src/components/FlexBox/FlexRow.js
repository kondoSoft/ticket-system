import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  position: absolute;
  z-index: 2;
  width: inherit;

  @media (max-width: 320px) {
    width: 100%;
    z-index: 0;
  }
`;

export { Row };
