import React,{Component} from 'react';
import Button from '../Button';
import {ContainerForm, ContainerInputs, ContainerInput, Inputs, InputsF, Label} from './style'

class FormTransport extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div style={ContainerForm}>
        <h1>Transporte</h1>
        <form>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Nombre:</label>
              <input style={Inputs} placeholder='Ingrese el nombre del Hotel' name='title' id='title' ref='title'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='address'>Direccion:</label>
              <input style={Inputs} placeholder='Ingrese la direccion del Hotel' name='address' id='address' id='title' ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio de la Habitacion' name='price' id='price' ref='price'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Fecha:</label>
              <input style={Inputs} placeholder='Ingrese la fecha' name='data' id='date' ref='date'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del Hotel' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
      </div>
    );
  }
};

export default FormTransport;
