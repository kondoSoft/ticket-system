import React,{Component} from 'react';
import styled from 'styled-components';
import Input from '../Input/index.js';
import Selector from '../Select/index.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm,ContainerInputs,ContainerInput, Inputs,Label} from '../styles'
import Button from '../Button'
import Table from '../Table'
import TableHeader from '../TableHeader'
class FormTicket extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment(),
      tickets:props.elements
    }
    this.handleChange=this.handleChange.bind(this)
    this.getRefs=this.getRefs.bind(this)
    this.update=this.update.bind(this)
    this.updateDate=this.updateDate.bind(this)

  }


  getRefs(event){
    event.preventDefault()
    let folio = this.refs.folio.value
    let zone = this.refs.zone.value
    let price = this.refs.price.value
    let date = this.state.startDate
    let key = folio

    const tickets = {
      'section' : zone,
      'price' : price,
      'date' : date.format('YYYY/MM/DD'),
      'key' :key
    }
    this.props.setObjectState(tickets,'tickets',folio)

    this.refs.folio.value = null;
    this.refs.zone.value = null;
    this.refs.price.value = null;
    this.refs.date.value = null;
  }
  handleChange(e){
    this.setState({
      startDate:e
    })
  }
  updateDate(e){
    this.setState({
      startDate:moment(e)
    })
  }

  update(element){
    let tickets = this.state.tickets[element.key]
    this.refs.folio.value = element.key
    this.refs.price.value = tickets.price
    this.refs.zone.value= tickets.section
    this.updateDate(tickets.date)
  }
  render(){
    const tickets = this.state.tickets
    return(
      <div style={ContainerForm}>
        <h1>Ticket</h1>
        <form onSubmit={(e)=>this.getRefs(e)}>
        <div style={ContainerInputs}>
          <div style={ContainerInput}>
            <label style={Label}>Folio: </label>
            <input style={Inputs} placeholder="Ingrese folio del ticket" ref='folio' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Precio: </label>
            <input style={Inputs} placeholder="Ingrese precio del ticket" ref='price' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Zona: </label>
            <input style={Inputs} placeholder="Ingrese zona del ticket" ref='zone' />
          </div>
          <div style={ContainerInput}>
            <label style={Label}>Fecha: </label>
            <DatePicker className='datepicker'  dateFormat="YYYY/MM/DD" selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha' ref='date' />
          </div>
        </div>
        <Button name="Guardar"/>
      </form>
      <TableHeader titles={this.props.aryHeader}/>
      {Object.keys(tickets).map((item,i)=><Table elements={tickets[item]} key={i} update={this.update} />)}
      </div>
    );
  }
};


export default FormTicket;
