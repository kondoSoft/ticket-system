import React from 'react';
import styled from 'styled-components'



function Input(props){

  const ContainerInput= {
    width:'48%'
  }

  const Inputs={
    width:props.type ? '50%' : '100%',
    height:props.type ? 'auto' : '35px',
    color:'#6E6E6E',
    borderRadius:'5px',
    border:'none',
    boxShadow:'1px 1px 5px #2E2E2E inset',
    paddingLeft:props.type ? '0' : '10px',
    marginTop:'10px',
    display:'flex',
    flexDirection:'column',
  }

  const Label = {
    color:'black',
    fontSize:'16px',
    fontfamily:'Times',
  }

  return(
    <div style={ContainerInput}>
      <label style={Label} htmlFor={props.Id}>{props.text}</label>
      <input style={Inputs} placeholder={props.placeholder} name={props.name} id={props.Id} type={props.type} ref={props.inputRef}/>
    </div>
  )
}


export default Input;
