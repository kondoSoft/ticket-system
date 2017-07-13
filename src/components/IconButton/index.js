import React, { Component } from 'react';
import styled from 'styled-components'

const ContainerButton = styled.div`
  width:90%;
  height:50px;
  background-color:red;
`;

class IconButton extends Component {
  render() {
    return (
      <ContainerButton>
      </ContainerButton>
    );
  }
}

export default IconButton;
