import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  z-index: 5;
  background-color: red;
`;

class Return extends Component {

  render() {
    return (
      <Div>
        hola
      </Div>
    );
  }
}

export default Return;
