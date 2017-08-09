import React,{Component} from 'react';
import Button from '../Button';
import {ContainerForm,Inputs, InputsF, Label, ContainerInput, ContainerInputs} from '../styles'
import Table from '../Table'
import TableHeader from '../TableHeader'
import moment from 'moment'
import styled from 'styled-components'

const Hr=styled.div`
  margin-top:20px;
  width:100%;
  height:2px;
  background-color:#000000;
`;

class FormHotels extends Component{
  constructor(props){
    super(props)
    this.state={
      hotels:this.props.elements
    }
    this.getRefs=this.getRefs.bind(this)
    this.update = this.update.bind(this)
  }
  componentWillMount(){
    // console.log('ejecutando will del formulario');
    this.setState({
      hotels:this.props.elements
    })
  }

  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let image = this.refs.image.value
    let key;
    if (this.refs.key.value === '') {
      key = this.refs.key.value = title.toLowerCase()
    }
    else{
      key = this.refs.key.value
    }
    const hotel={
        'title':title,
        'key':key,
        'address':address,
        'image':image,
        'items':''
    }

    this.props.setObjectState(hotel,'hotels',key)

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.image.value=null;
    this.refs.key.value=null;
  }

  update(element){
    let hotel= this.state.hotels[element.key]
    this.refs.key.value=element.key
    this.refs.title.value=hotel.title
    this.refs.address.value=hotel.address
  }

  render(){
    const hotels = this.state.hotels
    return(
      <div style={ContainerForm}>
        <h1>Hotel</h1>
        <form onSubmit={this.getRefs} >
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Nombre:</label>
              <input style={Inputs} placeholder='Ingrese el nombre del Hotel' name='title' id='title' ref='title'/>
              <input ref='key' hidden />
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='address'>Direccion:</label>
              <input style={Inputs} placeholder='Ingrese la direccion del Hotel' name='address' id='address'  ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del Hotel' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <Button name="Guardar"/>
        </form>
        <Hr/>
        <TableHeader titles={this.props.aryHeader}/>
        {Object.keys(hotels).map((item,i)=><Table elements={hotels[item]} key={i} update={this.update} setObjectState={this.props.setObjectState} deleteObject={this.props.deleteObject}/>)}
      </div>
    );
  }
};


export default FormHotels;
