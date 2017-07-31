import React from 'react';
import {Div, Ul, Li} from './style'

function TrailCrumb (props) {

  return (
    <Div>
      <Ul>
        <Li onClick={()=>props.setHistory(props.key)}>Home</Li>
        <Li>{props.location}</Li>
      </Ul>
    </Div>
  )
}

export default TrailCrumb;
