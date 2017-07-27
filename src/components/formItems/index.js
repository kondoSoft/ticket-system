import React,{Component} from 'react';
import {ContainerForm,Inputs,InputsF,Label,ContainerInput,ContainerInputs} from '../styles'
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../Button';
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
  }

  handleChange(e){
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

    if (this.refs.key.value == '') {
      key = this.refs.key.value = date.format('x')
    }
    else{
      key = this.refs.key.value
    }

    const item={
        'type':type,
        'key':key,
        'price':price,
        'image':image,
    }

    console.log(item);

    // this.props.setObjectState(item,'hotels',key)
    // console.log(date.format('x'));
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
          <Button name="Guardar"/>
        </form>
        <TableHeader />
        {Object.keys(objectItems).map((item,i)=> <Table dialog={false} elements={objectItems[item]} key={i}/>)}
      </div>
    );
  }
}

export default  FormItems;
