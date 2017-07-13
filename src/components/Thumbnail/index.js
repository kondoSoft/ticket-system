import React, { Component } from 'react';
//import styled from 'styled-components';
import { Div, Img, P, Caption } from './style';


class Thumbnail extends Component {
  render() {
    return (
      <div>
        <Div>
          <Img src="http://lorempixel.com/output/people-q-c-250-220-9.jpg"/>
          <Caption>
            <P>My friend couldnt believe
            the price. The hotels were
            top of the line, and our guide
            was great</P>
          </Caption>
        </Div>
      </div>
    );
  }
}

export default Thumbnail;
