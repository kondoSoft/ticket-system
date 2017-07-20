import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const ContainerForm = styled.div`
  background-color:#D8D8D8;
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

const Button = styled.button`
  width:100px;
  height:40px;
  background-color:#005caf;
  border:none;
  border-radius:5px;
  color:white;
  box-shadow:2px 2px 6px black;
`;

function FormHotels(props){
  return(
    <ContainerForm>
      <h1>Hotel</h1>
        <ContainerInputs>
          <Input name='title' text='Nombre:' Id='title' placeholder='Ingrese el nombre del Hotel' inputRef={props.inputRef}/>
          <Input name='address' text='Direccion:' Id='address' placeholder='Ingrese la direccion del Hotel'/>
        </ContainerInputs>
        <ContainerInputs>
          <Input name='price' text='Precio:' Id='price' placeholder='Ingrese el Precio de la Habitacion'/>
          <Input name='date' text='Fecha:' Id='date' placeholder='Ingrese la Fecha de la noche'/>
        </ContainerInputs>
        <ContainerInputs>
          <Input name='image' text='Foto del Hotel:' Id='image' type='file'/>
          <Input name='type' text='Tipo de Habitacion:' Id='type' placeholder='Simple, Doble, etc...'/>
        </ContainerInputs>
        <Button>Guardar</Button>
    </ContainerForm>
  );
};


export default FormHotels;
