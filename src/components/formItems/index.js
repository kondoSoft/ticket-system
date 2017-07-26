import React,{Component} from 'react';
import {ContainerForm,Inputs,InputsF,Label,ContainerInput,ContainerInputs} from '../styles'
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../Button';
import moment from 'moment';
import DatePicker from 'react-datepicker';

class FormItems extends Component {
  constructor() {
    super()
    this.state={
      startDate:moment()
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      startDate:e
    })
  }
  render(){
    return(
      <div style={ContainerForm}>
        <h1>Habitaciones</h1>
        <form >
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio de la habitacion' name='price' id='price'  ref='price'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Fecha:</label>
              <DatePicker className='datepicker' selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha' name='data' id='date' ref='date'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Tipo de Habitacion:</label>
              <input style={Inputs} placeholder='Ingrese el tipo de habitacion' name='type' id='type' ref='type'/>
            </div>
          </div>
          <Button name="Guardar"/>

        </form>
      </div>
    );
  }
}

export default  FormItems;
