import React from 'react';
import {Div, Ul, Li} from './style'

function TrailCrumb (props) {
  return (

    <Div>

       <Ul>
          <Li onClick = {props.status.home == true ? ()=>props.setHistory(props.key) : '' } >Home </Li>

           {props.status.estado >=1 ? <Li onClick={props.status.estado >= 2 ? ()=>props.setItems() : ''}>{props.location}</Li> : ''}
           {props.status.estado ==2 ? <Li>{props.location== 'hotels' ? 'Rooms':'Vehicules'}</Li>: ''}
        </Ul>

    </Div>
  )
}

export default TrailCrumb;
