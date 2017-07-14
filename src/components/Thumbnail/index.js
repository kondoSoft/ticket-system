import React, { Component } from 'react';
//import styled from 'styled-components';
import { Div, Img, P, Caption } from './style';
import Button from '../Button';

class Thumbnail extends Component {
  render() {
    return (
      <Div>
        <Button name={this.props.names}/>
        <Img src={this.props.image}/>
        <Caption>
          <P>My friend couldnt believe
          the price. The hotels were
          top of the line, and our guide
          was great</P>
        </Caption>
      </Div>
    );
  }
}

export default Thumbnail;
