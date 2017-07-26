import React,{Component} from 'react';
import Button from '../Button';
import {ContainerForm,Inputs,InputsF,Label,ContainerInput,ContainerInputs} from '../styles'
import Table from '../Table'
import TableHeader from '../TableHeader'
import moment from 'moment'

class FormHotels extends Component{
  constructor(props){
    super(props)
    this.getRefs=this.getRefs.bind(this)
    this.state={
      startDate:moment(),
      hotels:props.elements
    }
  }

  getRefs(event){
    event.preventDefault()
    // Variables
    let title = this.refs.title.value
    let address = this.refs.address.value
    let image = this.refs.image.value

    const hotel={
        'title':title,
        'key':title.toLowerCase(),
        'address':address,
        'image':image,
    }

    this.props.setObjectState(hotel,'hotels',title)

    this.refs.title.value=null;
    this.refs.address.value=null;
    this.refs.image.value=null;
  }

  render(){
    const hotels = this.props.elements
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
              <label style={Label} htmlFor='title'>Foto:</label>
              <input style={InputsF} placeholder='Ingrese la foto del Hotel' name='image' id='image' ref='image' type='file'/>
            </div>
          </div>
          <button> Guardar</button>
        </form>
        <TableHeader titles={this.props.aryHeader}/>
        {Object.keys(hotels).map((item,i)=><Table hotel={hotels[item]} key={i} />)}
      </div>
    );
  }
};


export default FormHotels;
