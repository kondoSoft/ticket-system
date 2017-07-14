import React, { Component } from 'react';
//import styled from 'styled-components';
import {ButtonBlue} from './style';


class Button extends Component {
  render() {
    return (
      <div>
        <ButtonBlue>
          {this.props.name}
        </ButtonBlue>
      </div>
    );
  }
}

export default Button;
