import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {Div, Nav, Ul, Li, P} from './style';
import fontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Icon = styled(fontAwesome)`
  font-size:25px;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <Div>

        </Div>
        <Nav>
          <Ul>
            <Li onClick={()=>this.props.SetUICart()}><Icon name={this.props.icon}/></Li>
            <Li><P>0</P></Li>
          </Ul>
        </Nav>
      </div>
    );
  }
}

export default Header;
