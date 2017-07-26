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
function  Table(props){
  return (
    <Tabla>
      <div style = {celda}>{props.hotel.title}</div>
      <div style = {celda}>{props.hotel.address}</div>
      <div style = {celda}>{<img width='50' src={props.hotel.image}/>}</div>
      <div style = {celda}> <ButtonContainer/> </div>
    </Tabla>

  )

}
export default Table;
