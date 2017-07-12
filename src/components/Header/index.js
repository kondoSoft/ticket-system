import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 40px;
  background-color: #3498db;
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #000;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <Div>

        </Div>
        <Nav>
          HOME
        </Nav>
      </div>
    );
  }
}

export default Header;
