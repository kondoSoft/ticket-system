import React from 'react';
//import styled from 'styled-components';
import {ButtonBlue} from '../styles/Button.js';


function Button (props) {
  return (
    <div>
      <ButtonBlue onClick={props.addCart ? ()=> props.addCart() : props.setPayment ? ()=> props.setPayment() : ''}>
        {props.name}
      </ButtonBlue>
    </div>
  )
}

export default Button;
