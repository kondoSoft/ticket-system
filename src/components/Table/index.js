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
      {toReturn.map((data,i) => <div style={celda} key={i}>{props.elements[data]}</div>)}
    </Tabla>

  )

}
export default Table;
