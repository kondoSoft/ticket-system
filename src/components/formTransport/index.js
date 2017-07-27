import React,{Component} from 'react';
import Button from '../Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm, ContainerInputs, ContainerInput, Inputs, InputsF, Label} from './style'
import Table from '../Table'
import TableHeader from '../TableHeader'


class FormTransport extends Component{
  constructor(props){
    super(props)
    this.state={
      startDate:moment(),
      transport:props.elements
    }
    this.handleChange=this.handleChange.bind(this)
    this.getRefs=this.getRefs.bind(this)
    this.setValue=this.setValue.bind(this)
  }
  setValue(event){
    this.refs.title.value= 'QWERTYUIO'
  }

  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let image = this.refs.image.value

    const transport={
        'key':title,
        'title':title,
        'address':address,
        'image':image,
    }

    this.props.setObjectState(transport,'transport',title)

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.image.value=null;

  }
  handleChange(e){
    this.setState({
      startDate:e
    })
  }
  render(){
    const transports = this.state.transport
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
              <label style={Label} htmlFor='image'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del transporte' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
        <TableHeader titles={this.props.aryHeader}/>
        {Object.keys(transports).map((item,i)=><Table elements={transports[item]} key={i} />)}

        <button onClick={this.setValue}>Prueba</button>
      </div>
    );
  }
};

export default FormTransport;
