import styled from 'styled-components';
import App from '../Dialog'
import {actione,actiond}from '../styles/items.js'
import React from 'react';

const Cont = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`;

function ButtonContainer() {
  return(
  <Cont>
    <App/>
    <button style = {actione}> Editar </button>
    <button style = {actiond}>Eliminar  </button>
  </Cont>
)
}

export default ButtonContainer;
