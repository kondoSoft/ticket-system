import React from 'react';
//import styled from 'styled-components';
import {ButtonBlue} from './style';


function Button (props) {
  return (
    <div>
      <ButtonBlue onClick={props.setCart ? ()=> props.setCart() : ''}>
        {props.name}
      </ButtonBlue>
    </div>
  )
}

export default Button;
