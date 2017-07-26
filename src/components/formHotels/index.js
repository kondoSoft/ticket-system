import React,{Component} from 'react';
import Button from '../Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm,Inputs,InputsF,Label,ContainerInput,ContainerInputs} from '../styles'
import Table from '../table'
import TableH from '../TableHeader'
class FormHotels extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment()
    }
    this.handleChange=this.handleChange.bind(this)
    this.getRefs=this.getRefs.bind(this)
  }

  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let price = this.refs.price.value
    let date = this.refs.date.value
    let image = this.refs.image.value
    let type = this.refs.type.value

    const hotel={
        'title':title,
        'address':address,
        'price':price,
        'image':image,
        'type':type,
    }

    this.props.setObjectState(hotel,'hotels',this.state.startDate)

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.price.value=null;
    this.refs.date.value=null;
    this.refs.image.value=null;
    this.refs.type.value=null;
  }

  handleChange(e){
    this.setState({
      startDate:e
    })
  }

  render(){
    return(
      <div style={ContainerForm}>
        <h1>Hotel</h1>
        <form onSubmit={this.getRefs} >
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Nombre:</label>
              <input style={Inputs} placeholder='Ingrese el nombre del Hotel' name='title' id='title' ref='title'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='address'>Direccion:</label>
              <input style={Inputs} placeholder='Ingrese la direccion del Hotel' name='address' id='address'  ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio de la Habitacion' name='price' id='price' ref='price'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Fecha:</label>
              <DatePicker className='datepicker' selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha' name='data' id='date' ref='date'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del Hotel' name='image' id='image' ref='image' type='file'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Tipo de Habitacion:</label>
              <input style={Inputs} placeholder='Ingrese el tipo de habitacion' name='type' id='type' ref='type'/>
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
        <TableH />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    );
  }
};


export default FormHotels;
