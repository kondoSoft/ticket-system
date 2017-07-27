import styled from 'styled-components';
import Dialog from '../Dialog'
import {actione,actiond}from '../styles/items.js'
import React from 'react';

const Cont = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`;

function ButtonContainer(props) {
  return(
  <Cont>
    {props.dialog != undefined ? '' :  <Dialog component={props.element} setObjectState={props.setObjectState}/>}
    <button style = {actione} onClick={()=> props.updateHotel(props.element)}> Editar </button>
    <button style = {actiond}>Eliminar  </button>
  </Cont>
)
}

export default ButtonContainer;
