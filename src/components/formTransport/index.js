import React,{Component} from 'react';
import Button from '../Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm, ContainerInputs, ContainerInput, Inputs, InputsF, Label} from './style'

class FormTransport extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment()
    }
    this.getRefs = this.getRefs.bind(this)
  }

  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let price = this.refs.price.value
    let date = this.refs.date.value
    let image = this.refs.image.value

    const transport={
        'title':title,
        'address':address,
        'price':price,
        'image':image
    }
    this.props.setObjectState(transport,'transport')

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.price.value=null;
    this.refs.date.value=null;
    this.refs.image.value=null;
  }

  render(){
    return (
      <div style={ContainerForm}>
        <h1>Transporte</h1>
        <form onSubmit={this.getRefs}>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Nombre:</label>
              <input style={Inputs} placeholder='Ingrese el nombre del transporte' name='title' id='title' ref='title'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='address'>Direccion:</label>
              <input style={Inputs} placeholder='Ingrese la direccion del transporte' name='address' id='address' id='title' ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio del transporte' name='price' id='price' ref='price'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Fecha:</label>
              <DatePicker className='datepicker' selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha' name='data' id='date' ref='date'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del transporte' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
      </div>
    );
  }
};

export default FormTransport;
