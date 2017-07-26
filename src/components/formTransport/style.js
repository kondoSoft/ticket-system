import styled from 'styled-components';

const ContainerForm = {
  backgroundColor:'#D8D8D8',
  width:'100%',
  padding:'20px',
  borderRadius:'5px'
};


const ContainerInputs = {
  width:'100%',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  marginBottom:'10px',
}

const ContainerInput= {
  width:'48%'
}

const Inputs={
  width: '100%',
  height:'35px',
  color:'#6E6E6E',
  borderRadius:'5px',
  border:'none',
  boxShadow:'1px 1px 5px #2E2E2E inset',
  paddingLeft:'10px',
  marginTop:'10px',
  display:'flex',
  flexDirection:'column',
}

const InputsF={
  width: '50%',
  height:'auto',
  color:'#6E6E6E',
  borderRadius:'5px',
  border:'none',
  boxShadow:'1px 1px 5px #2E2E2E inset',
  paddingLeft:'0',
  marginTop:'10px',
  display:'flex',
  flexDirection:'column',
}

const Label = {
  color:'black',
  fontSize:'16px',
  fontfamily:'Times',
}


export {ContainerForm, ContainerInputs, ContainerInput, Inputs, InputsF, Label};
