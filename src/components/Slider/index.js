import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

class Slider extends Component {
  render() {
    return (
      <div>
        <Img src="http://lorempixel.com/output/city-q-c-1280-380-4.jpg"/>
      </div>
    );
  }
}

export default Slider;
