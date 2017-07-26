import React,{Component} from 'react';
import styled from 'styled-components';
import Input from '../Input/index.js';
import Selector from '../Select/index.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm,ContainerInputs,ContainerInput, Inputs,Label} from '../styles'
import Button from '../Button'

class FormTicket extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment()
    }
    this.getRefs=this.getRefs.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  getRefs(event){

    event.preventDefault()
    // Variables
    let key = this.refs.key.value
    let price = this.refs.price.value
    let date = this.state.startDate
    let section = this.refs.section.value
    const ticket={
        'key':key,
        'price':price,
        'image':section,
        'date':date
    }

    this.props.setObjectState(ticket,'tickets',key)

    this.refs.key.value=null;
    this.refs.price.value=null;
    this.setState({
      startDate:moment()
    })
    this.refs.section.value=null;
  }

  handleChange(e){
    this.setState({
      startDate:e
    })
  }
  render(){
    return(
      <div style={ContainerForm}>
        <h1>Ticket</h1>
        <form onSubmit={(e)=>this.getRefs(e)}>
        <div style={ContainerInputs}>
          <div style={ContainerInput}>
            <label style={Label}>Folio: </label>
            <input style={Inputs} placeholder="Ingrese precio del ticket" ref='key' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Precio: </label>
            <input style={Inputs} placeholder="Ingrese precio del ticket" ref='price' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Zona: </label>
            <input style={Inputs} placeholder="Ingrese precio del ticket" ref='section' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Fecha: </label>
            <DatePicker className='datepicker' selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha' />
          </div>
        </div>
        <Button name="Guardar"/>
      </form>
      </div>
    );
  }
};


export default FormTicket;
