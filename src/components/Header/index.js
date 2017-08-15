import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {Nav, Ul, Li, P} from './style';
import fontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Icon = styled(fontAwesome)`
  font-size:25px;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Ul>
            <li><img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png"/></li>
            <div>
              <Li onClick={()=>this.props.setUICart()}>Mi Carrito<Icon name={this.props.icon}/></Li>
              <P>{this.props.count}</P>
            </div>
          </Ul>
        </Nav>
      </div>
    );
  }
}

export default Header;
