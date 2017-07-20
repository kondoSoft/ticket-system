import React from 'react';
//import styled from 'styled-components';
import {ButtonBlue} from './style';


function Button (props) {
  return (
    <div>
      <ButtonBlue>
        {props.name}
      </ButtonBlue>
    </div>
  )
}

export default Button;
