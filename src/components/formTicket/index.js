import React,{Component} from 'react';
import styled from 'styled-components';
import Input from '../Input/index.js';
import Selector from '../Select/index.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm,ContainerInputs,ContainerInput, Inputs,Label} from '../styles'

class FormTicket extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment()
    }
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
        <div style={ContainerInputs}>
          <div style={ContainerInput}>
            <label style={Label}>Precio: </label>
            <input style={Inputs} name="price" placeholder="Ingrese precio del ticket" id="price" text="Precio:" />
          </div>
        </div>
        <div style={ContainerInputs}>
          <DatePicker selected={this.state.startDate} onChange={(e)=>this.handleChange(e)} />;
        </div>
      </div>
    );
  }
};


export default FormTicket;
