import React from 'react';
import styled from 'styled-components'
import Input from '../Input';
import Button from '../Button';
import initialState from '../../state'
const ContainerForm = styled.div`
  background-color:#ccc;
  width:100%;
  padding:20px;
  border-radius:5px;
`;
const ContainerInputs = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-bottom:10px;
`;

function FormTransport(){
  return(
    <ContainerForm>
      <h1>Transporte</h1>
      <ContainerInputs>
        <Input name="title" placeholder="Ingrese nombre del transporte" id="title" text="Nombre:" />
        <Input name="address" placeholder="Ingrese la direccion del transporte" id="address" text="Direccion:"/>
      </ContainerInputs>
      <ContainerInputs>
        <Input name="price" placeholder="Ingrese el precio del transporte" id="price" text="Precio:"/>
        <Input name="image"  id="image" text="Imagen del transporte:" type="file"/>
      </ContainerInputs>
      <Button name="Guardar" />
    </ContainerForm>
  );
};

// class Datas extends React.Component {
//   constructor(props){
//     super(props);
//     this.state=initialState
//   }
//
//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({value: 'X'})}>
//         {this.state.value}
//       </button>
//     );
//   }
// }

export default FormTransport;
