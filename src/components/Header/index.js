import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Div, Nav, Ul, Li} from './style';
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
            <Link to="/"><Li><Icon name={this.props.icon}/></Li></Link>
          </Ul>
        </Nav>
      </div>
    );
  }
}

export default Header;
