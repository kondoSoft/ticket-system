import React from 'react';
import {Div, Row, RowEnd} from './style';


function Cart (props) {

  return (
    <Div>
      <h1>Cart is empty</h1>
      {console.log(props.elements)}
      <Row>
        {props.elements}
      </Row>
      <RowEnd>
        <h1>Total: $0.00</h1>
      </RowEnd>
    </Div>
  )
}

export default Cart;
