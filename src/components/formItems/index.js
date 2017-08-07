import React,{Component} from 'react';
import {ContainerForm,Inputs,InputsF,Label,ContainerInput,ContainerInputs} from '../styles'
import 'react-datepicker/dist/react-datepicker.css';
// import Button from '../Button';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Table from '../Table'
import TableHeader from '../TableHeader'

class FormItems extends Component {
  constructor(props) {
    super(props)
    this.state={
      startDate:moment(),
      items:this.props.component.items
    }
    this.handleChange=this.handleChange.bind(this)
    this.getInputsVal=this.getInputsVal.bind(this)
    this.update = this.update.bind(this)
  }

  handleChange(e){
    console.log(e.format('x'));
    this.setState({
      startDate:e
    })
  }

  getInputsVal(event){
    event.preventDefault()

    let type = this.refs.type.value
    let price = this.refs.price.value
    let date = this.state.startDate
    let image = this.refs.image.value
    let key;

    if (this.refs.key.value === '') {
      key = this.refs.key.value = date.format('x')
    }
    else{
      key = this.refs.key.value
    }
    const item={
      'father':this.props.component.key,
      'type':type,
      'key':key,
      'price':price,
      'image':image,
    }
    this.props.setObjectState(item,'items',key)

    this.refs.type.value=null
    this.refs.image.value=null
    this.refs.price.value=null
  }
  update(element){
    // let hotel= this.state.hotels[element.key]
    this.refs.price.value=element.price
    this.refs.type.value= element.type
    // this.refs.address.value=hotel.address
  }

  render(){
    const objectItems = this.state.items
    return(
      <div style={ContainerForm}>
        <h1>Habitaciones</h1>
        <form onSubmit={this.getInputsVal}>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio de la habitacion' name='price' id='price'  ref='price'/>
              <input ref='key' hidden />
            </div>
            <div style={ContainerInput}>
              <label style={Label} >Tipo de Habitacion:</label>
              <input style={Inputs} placeholder='Ingrese el tipo de habitacion' name='type' id='type' ref='type'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} >Fecha:</label>
              <DatePicker className='datepicker' selected={this.state.startDate} onChange={this.handleChange} style={Inputs} placeholder='Ingrese la fecha'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label}>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del Hotel' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <input type='submit' value='Guardar'/>
        </form>
        <TableHeader />
        {Object.keys(objectItems).map((item,i)=> <Table dialog={false} elements={objectItems[item]} key={i} update={this.update}/>)}
      </div>
    );
  }
}

export default  FormItems;
