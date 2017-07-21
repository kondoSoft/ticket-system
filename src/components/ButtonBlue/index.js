import React from 'react';
import {Button} from './style';


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
