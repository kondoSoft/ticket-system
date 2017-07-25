import styled from 'styled-components';
import App from '../dialog/index.js'
import {menuContainer,celda,actiona,actione,actiond,ButtonContainer}from '../styles/items.js'
import React from 'react';

const Cont = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`;

function Contenedor() {
  return(
  <Cont className='botones'>
    <App/>
    <button style = {actione}> Editar </button>
    <button style = {actiond}>Eliminar  </button>
  </Cont>
)
}

export default Contenedor;
