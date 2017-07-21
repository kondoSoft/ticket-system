import React,{Component} from 'react';
// import styled from 'styled-components';
// import Input from '../Input';
import Button from '../Button';

const ContainerForm = {
  backgroundColor:'#D8D8D8',
  width:'100%',
  padding:'20px',
  borderRadius:'5px'
};


const ContainerInputs = {
  width:'100%',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  marginBottom:'10px',
}

const ContainerInput= {
  width:'48%'
}

const Inputs={
  width: '100%',
  height:'35px',
  color:'#6E6E6E',
  borderRadius:'5px',
  border:'none',
  boxShadow:'1px 1px 5px #2E2E2E inset',
  paddingLeft:'10px',
  marginTop:'10px',
  display:'flex',
  flexDirection:'column',
}

const InputsF={
  width: '50%',
  height:'auto',
  color:'#6E6E6E',
  borderRadius:'5px',
  border:'none',
  boxShadow:'1px 1px 5px #2E2E2E inset',
  paddingLeft:'0',
  marginTop:'10px',
  display:'flex',
  flexDirection:'column',
}

const Label = {
  color:'black',
  fontSize:'16px',
  fontfamily:'Times',
}


class FormHotels extends Component{
  constructor(props){
    super(props)
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
      [date]:{
        'title':title,
        'address':address,
        'price':price,
        'image':image,
        'type':type
      }
    }
    this.props.setObjectState(hotel,'hotels')

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.price.value=null;
    this.refs.date.value=null;
    this.refs.image.value=null;
    this.refs.type.value=null;
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
              <input style={Inputs} placeholder='Ingrese la direccion del Hotel' name='address' id='address' id='title' ref='address'/>
            </div>
          </div>
          <div style={ContainerInputs}>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='price'>Precio:</label>
              <input style={Inputs} placeholder='Ingrese el precio de la Habitacion' name='price' id='price' ref='price'/>
            </div>
            <div style={ContainerInput}>
              <label style={Label} htmlFor='title'>Fecha:</label>
              <input style={Inputs} placeholder='Ingrese la fecha' name='data' id='date' ref='date'/>
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
      </div>
    );
  }
};


export default FormHotels;
