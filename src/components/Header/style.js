import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 93px;
  background-color: #fff;
  border-bottom: 1px solid #bdc3c7;
  margin-bottom: 10px;
  position: fixed;
  z-index: 4;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin: 0px 100px 0px 100px;
  padding: 15px;
`;

const Li = styled.li`
  color: #b2b2b2;
  padding: 20px 10px 20px 10px;

  &:hover{
    transition: .3s;
    cursor: pointer;
  }
`;

const P = styled.p`
  background-color: rgba(32, 79, 158, 1);
  color: #fff;
  border-radius: 50%;
  padding: 3px 8px 3px 8px;
  margin: -60px 0px 0px 95px;
  position: absolute;
  font-size: 12px;
`

export {Nav, Ul, Li, P};
