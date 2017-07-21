import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Div, Nav, Ul, Li} from './style';

class Header extends Component {
  render() {
    return (
      <div>
        <Div>

        </Div>
        <Nav>
          <Ul>
            <Link to="/"><Li>{this.props.text}</Li></Link>
          </Ul>
        </Nav>
      </div>
    );
  }
}

export default Header;
