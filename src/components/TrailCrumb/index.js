import React from 'react';
import {Div, Ul, Li} from './style'

function TrailCrumb (props) {

  return (
    <Div>
      <Ul>
        <Li onClick={()=>props.setHistory()}>Home</Li>
        <Li>Hotels</Li>
      </Ul>
    </Div>
  )
}

export default TrailCrumb;
