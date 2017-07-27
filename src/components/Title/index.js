import React from 'react';
import {Titles} from './style';


function Title (props) {
  return (
    <div>
      <Titles>
        {props.name}
      </Titles>
    </div>
  )
}

export default Title;
