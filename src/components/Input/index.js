import React from 'react';
import styled from 'styled-components'
import {InputsT,InputsF} from '../styles/Input'


function Input(props){

  const ContainerInput= {
    width:'48%'
  }
  const Label = {
    color:'black',
    fontSize:'16px',
    fontfamily:'Times',
  }

  return(
    <div style={ContainerInput}>
      <label style={Label} htmlFor={props.Id}>{props.text}</label>
      <input style={props.type ? InputsT: InputsF  } placeholder={props.placeholder} name={props.name} id={props.Id} type={props.type} ref={props.inputRef}/>
    </div>
  )
}


export default Input;
