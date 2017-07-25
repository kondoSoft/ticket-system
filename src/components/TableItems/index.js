import React from 'react';
import styled from 'styled-components';
import {menuContainer,celda,actiona,actione,actiond,ButtonContainer}from '../styles/items.js'
import Cont from '../ButtonContainer/index.js'
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
function  Table(){
  return (

    <Tabla>
      <div style = {celda}>Contenido</div>
      <div style = {celda}>Contenido</div>
      <div style = {celda}>Contenido</div>
      <div style = {celda}>
          <button style = {actione}> Editar </button>
          <button style = {actiond}>Eliminar  </button>
       </div>
    </Tabla>

  )

}
export default Table;
