import React from 'react';
import {Div, Row, RowEnd} from './style';


function Cart (props) {

  return (
    <Div>
      {props.cart}
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
