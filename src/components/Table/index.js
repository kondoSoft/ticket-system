import React from 'react';
import styled from 'styled-components';
import {celda}from '../styles/items.js'
import ButtonContainer from '../ButtonContainer'

const Tabla=styled.div`
  width:100%;
  border:1px;
  margin: 10px;
  border-radius: 10px;
  display:flex;
  flax-direction:row;
  flex-wrap:wrap;
  justify-content:space-arround;
`;

function filterItem(item){
  if(item != 'key' && item != 'items'){
    return true
  }
}

function  Table(props){
  let toReturn=Object.keys(props.elements).filter(filterItem)
  return (
    <Tabla>
      {toReturn.map((data,i) => data=='image' ? <div style={celda} key={i}><img width='50' src={props.elements[data]} /></div> :<div style={celda} key={i}>{props.elements[data]}</div>)}
      <div style={celda}> <ButtonContainer setObjectState={props.setObjectState} dialog={props.dialog } element={props.elements} update={props.update}/></div>
    </Tabla>
  )

}
export default Table;
