import styled from 'styled-components';

const Div = styled.div`
  margin-top: 120px;
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
    padding: 5px;
    color: #777;
    content: "\00BB";
  }
`;

export {Div, Ul, Li}
