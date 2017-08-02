import React from 'react';
import {Div, Ul, Li} from './style'

function TrailCrumb (props) {
  return (

    <Div>
       <Ul>
        <Li onClick={props.history.status == true ? ()=>props.setHistory() : '' } >Home</Li>
       {props.location ? <Li onClick={props.history.state >= 2 ? ()=>props.setItems() : ''}>{props.location}</Li> : ''}
       {props.history.state ==2 ? <Li>{props.location== 'hotels' ? 'Rooms':'Vehicles'}</Li>: ''}
      </Ul>
    </Div>
  )
}

export default TrailCrumb;
