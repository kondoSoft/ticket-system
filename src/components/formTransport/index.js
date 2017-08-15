import React,{Component} from 'react';
import Button from '../Button';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm, ContainerInputs, ContainerInput, Inputs, InputsF, Label} from './style'
import Table from '../Table'
import TableHeader from '../TableHeader'


class FormTransport extends Component{
  constructor(props){
    super(props)
    this.state={
      transport:props.elements
    }
    this.handleChange=this.handleChange.bind(this)
    this.getRefs=this.getRefs.bind(this)
    this.update=this.update.bind(this)
  }
  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let image;
    let key;
    if (this.refs.key.value === '') {
      key = this.refs.key.value = title.toLowerCase()
    }
    else{
      key = this.refs.key.value
    }
    if (this.refs.image.value === '') {
      image=this.refs.imgAux.value
      }

    else {
      image= this.refs.image.value

    }
    const transport={
      'key':key,
      'title':title,
      'address':address,
      'image':image,
      'items':''
    }

    this.props.setObjectState(transport,'transport',key)

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.image.value=null;
    this.refs.imgAux.value=null;
    this.refs.key.value=null;
  }
  handleChange(e){
    this.setState({
      startDate:e
    })
  }

  update(element){
    let transport = this.state.transport[element.key]
    this.refs.key.value=element.key
    this.refs.title.value = transport.title
    this.refs.address.value = transport.address
    this.refs.imgAux.value = transport.image
    this.refs.img.src = transport.image
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
              <input ref='key' hidden />
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='address'>Direccion:</label>
              <input style={Inputs} placeholder='Ingrese la direccion del transporte' ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='image'>Foto:</label><br/>
              <img width="75" height="60" ref="img" src="https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png"/>
              <input style={InputsF} placeholder='Ingrese la foto del transporte' name='image' id='image' ref='image' type='file'/>
              <input ref='imgAux' hidden />
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
        <TableHeader titles={this.props.aryHeader}/>
        {Object.keys(transports).map((item,i)=><Table setObjectState={this.props.setObjectState} deleteObject={this.props.deleteObject} update={this.update} elements={transports[item]} key={i} />)}
      </div>
    );
  }
};

export default FormTransport;
