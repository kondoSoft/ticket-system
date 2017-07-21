import React from 'react';
//import styled from 'styled-components';
import { Div, Img, P } from './style';
import Button from '../ButtonBlue';

function Thumbnail (props) {

  return (
    <Div onClick={()=> props.setUI(props.elements.key)}>
      <Button name={props.elements.title}/>
      <Img src={props.elements.image}/>
      {props.elements.price ? <P>Price: ${props.elements.price}</P> : ''}
      {props.elements.address ? <P>Address: {props.elements.address}</P> : ''}
    </Div>
  )
}

export default Thumbnail;
