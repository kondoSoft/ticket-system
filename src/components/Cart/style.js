import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  margin-top: 30px;
  margin-right: 20px;
  border-radius: 6px;
  color: #555;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RowEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export {Div, Row, RowEnd}
