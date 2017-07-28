import React from 'react';
import { Div, Img, P } from './style';
import Title from '../Title';
import ButtonAdd from '../Button';

function Thumbnail (props) {

  return (
    <Div onClick={props.elements.title ? ()=> props.setUI(props.elements.key, props.elements.items) : ''}>
      {props.elements.title ? <Title name={props.elements.title}/> : ''}
      <Img src={props.elements.image}/>
      {props.elements.price ? <P>Price: ${props.elements.price}</P> : ''}
      {props.elements.address ? <P>Address: {props.elements.address}</P> : ''}
      {props.elements.type ? <P>Type: {props.elements.type}</P> : ''}
      {props.elements.type ? <ButtonAdd addCart={() => props.addCart(props.elements)} name='Add to cart'/> : ''}
    </Div>
  )
}

export default Thumbnail;
