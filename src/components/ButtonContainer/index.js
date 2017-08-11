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
    {props.dialog !== undefined ? '' :  <Dialog component={props.element} setObjectState={props.setObjectState} deleteObject={props.deleteObject}/>}
    <button style = {actione} onClick={()=> props.update(props.element)}> Editar </button>
    <button style = {actiond} onClick={()=> props.deleteObject(props.element,props.element.key)}>Eliminar  </button>
  </Cont>
)
}

export default ButtonContainer;
