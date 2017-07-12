import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 235px;
  height: auto;
  border: 1px solid #000;
  padding: 10px;
`;

const Img = styled.img`
  
`;

const P = styled.p`
  color: #95a5a6;
`;

class Thumbnail extends Component {
  render() {
    return (
      <div>
        <Div>
          <Img src="http://lorempixel.com/output/people-q-c-240-180-9.jpg"/>
          <P>My friend couldnt believe
          the price. The hotels were
          top of the line, and our guide
          was great</P>
        </Div>
      </div>
    );
  }
}

export default Thumbnail;
