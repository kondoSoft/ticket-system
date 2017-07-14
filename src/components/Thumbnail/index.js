import React from 'react';
//import styled from 'styled-components';
import { Div, Img, } from './style';
import Button from '../Button';

function Thumbnail (props) {
  return (
    <Div>
      <Button name={props.names}/>
      <Img src={props.image}/>
    </Div>
  )
}

export default Thumbnail;
