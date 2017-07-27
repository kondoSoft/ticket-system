import React from 'react';
import { Img, P, Container, Button} from './style';


function CartItem (props) {

  return (
    <Container>
      <Img src={props.elements.image}/>
      <P>Price: ${props.elements.price}</P>
      <P>Type: {props.elements.type}</P>
      <P><Button onClick={()=> props.removeItemsCart(props.elements.key)}>Remove</Button></P>
    </Container>
  )
}

export default CartItem;
