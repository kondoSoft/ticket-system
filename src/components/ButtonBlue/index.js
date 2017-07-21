import React from 'react';
import {Button} from '../styles/Button.js';


function ButtonBlue (props) {
  return (
    <div>
      <Button>
        {props.name}
      </Button>
    </div>
  )
}

export default ButtonBlue;
