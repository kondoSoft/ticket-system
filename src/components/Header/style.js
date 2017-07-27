import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 40px;
  background-color: #3498db;
  position: fixed;
  z-index: 4;
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #bdc3c7;
  margin-bottom: 10px;
  position: fixed;
  z-index: 4;
  margin-top: 40px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin-right: 100px;
`;

const Li = styled.li`
  color: #fff;
  padding: 10px;
  background-color: #3498db;
  border-radius: 50%;

  &:hover{
    transition: .3s;
    cursor: pointer;
  }
`;

const P = styled.p`
  background-color: green;
  color: #fff;
  border-radius: 50%;
  padding: 0px 5px 0px 5px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  font-size: 12px;
`

export {Div, Nav, Ul, Li, P};
