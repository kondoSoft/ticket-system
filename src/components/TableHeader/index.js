import React from 'react';
import styled from 'styled-components';
import {menuContainer,celdaH,actiona,actione,actiond,ButtonContainer}from '../styles/items.js'
import Cont from '../ButtonContainer/index.js'
const TablaH=styled.div`
  width:100%;
  border:1px;
  margin: 10px;
  border-radius: 10px;
  display:flex;
  flax-direction:row;
  flex-wrap:wrap;
  justify-content:space-arround;
`;
function  TableH(){
  return (

    <TablaH>
      <div style = {celdaH}>Key</div>
      <div style = {celdaH}>Nombre</div>
      <div style = {celdaH}>Direccion</div>
      <div style = {celdaH}>Accion</div>
    </TablaH>

  )

}
export default TableH;
