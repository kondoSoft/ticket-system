import React from 'react';
import {Div, Row, RowEnd} from './style';
import Button from '../Button';


function Cart (props) {

  return (
    <Div>
      {props.cart}
      <Row>
        {props.elements}
      </Row>
      <RowEnd>
        <h1>Total ${props.total}</h1>
      </RowEnd>
      <Button onClick={props.setPayment()} name="Payment"/>
    </Div>
  )
}

export default Cart;
