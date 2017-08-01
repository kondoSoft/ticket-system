import React from 'react';
import {Div, Ul, Li} from './style'

function TrailCrumb (props) {

  return (

    <Div>

       <Ul>
          <Li onClick = {props.status.home == true ? ()=>props.setHistory(props.key) : '' } >Home </Li>

          {props.location == props.key ? '': props.status.estado == false ? '' : <Li onClick={()=>props.setItems(props.key)}>{props.location}</Li> }
        </Ul>

    </Div>
  )
}

export default TrailCrumb;
