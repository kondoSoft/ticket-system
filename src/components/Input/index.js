import React from 'react';
import styled from 'styled-components'



function Input(props){
  let textInput= null
  const ContainerInput= styled.div`
    width:48%;
  `;

  const Inputs=styled.input`
    width:${props.type ? '50%' : '100%'};
    height:${props.type ? 'auto' : '35px'};
    color:#6E6E6E;
    border-radius:5px;
    border:none;
    box-shadow:1px 1px 5px #2E2E2E inset;
    padding-left:${props.type ? '0' : '10px'};
    margin-top:10px;
    display:flex;
    flex-direction:column;
  `;

  const Label = styled.label`
    color:black;
    font-size:16px;
    font-family:Times;
  `;

  return(
    <ContainerInput>
      <Label htmlFor={props.Id}>{props.text}</Label>
      <Inputs placeholder={props.placeholder} name={props.name} id={props.Id} type={props.type} ref={props.inputRef}/>
    </ContainerInput>
  )
}


export default Input;
