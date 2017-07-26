import styled from 'styled-components';

const Div = styled.div`
  margin-top: 140px;
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 6px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  color: #333;

  &:before{
    padding: 8px;
    color: #777;
    content: "/\00a0";
  }
`;

export {Div, Ul, Li}
