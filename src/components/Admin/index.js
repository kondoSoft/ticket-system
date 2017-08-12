import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import FormHotels from '../formHotels';
import initialState from '../../state';
import FormTransport from '../formTransport';
import FormTicket from '../formTicket';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import firebase from '../../firebase';

const Container = styled.div`
  padding:0;
  width:100%;
  display:flex;
  flex-direction:row;
`;

const Section = styled.div`
  width:90%;
  height:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10px;
`;

class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
      hotels:{},
      transport:{},
      tickets:{},
      sales:0
    }
    this.setObjectState = this.setObjectState.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
  }

  componentWillMount(){
      const database = firebase.database().ref();
      database.on('value', (snap) => {
        this.setState(snap.val())
      })
  }

  setObjectState(object,position,key, image){
    let file = image.files[0]
    if(object.father){
      var state = this.searchKey(object.father)
      let instance = firebase.database().ref().child(state).child(object.father).child(position).child(key).set(object)
    }
    else{
      let instance = firebase.database().ref().child(position).child(key).set(object)
    }
    let storageRef = firebase.storage().ref('img/' + file.name)
    storageRef.put(file)
  }

  addImage(){

  }

  searchKey(key){
    if(key in this.state.hotels){
      let hotel = 'hotels'
      return hotel
    }
    else if(key in this.state.transport){
      let transport = 'transport'
      return transport
    }
    else{
      let ticket = 'tickets'
      return ticket
    }
  }

  deleteObject(element,key){
    let position;
    if (element.father) {
      position= this.searchKey(element.father)
      confirmAlert({
        title: 'Confirmacion',                              // Title dialog
        message: 'Esta seguro de eliminar: '+key,          // Message dialog
        confirmLabel: 'Aceptar',                           // Text button confirm
        cancelLabel: 'Cancelar',                             // Text button cancel
        onConfirm: () => {  firebase.database().ref().child(position).child('items').child(key).remove() },                                 // Action after Confirm
      })
    }
    else{
      position=this.searchKey(key)
      confirmAlert({
        title: 'Confirmacion',                              // Title dialog
        message: 'Esta seguro de eliminar: '+key,          // Message dialog
        confirmLabel: 'Aceptar',                           // Text button confirm
        cancelLabel: 'Cancelar',                             // Text button cancel
        onConfirm: () => {  firebase.database().ref().child(position).child(key).remove() },                                 // Action after Confirm
      })
    }
  }

  render() {
    // let content;
    const {section} = this.props.match.params;
    let content = <FormHotels deleteObject={this.deleteObject} setObjectState={this.setObjectState} elements={this.state.hotels} imageFire={firebase.storage().ref().child('img/Detalles.png')}/>
    if (section === 'ticket'){
      content = <FormTicket deleteObject={this.deleteObject} setObjectState={this.setObjectState} elements={this.state.tickets} />
    } else if (section === 'transport') {
      content = <FormTransport deleteObject={this.deleteObject} setObjectState={this.setObjectState} elements={this.state.transport} />
    }
    return (
      <Container>
        <Nav setComponent={this.setComponent}/>
        <Section>
          {content}
        </Section>
      </Container>
    );
  }
}

export default Admin;
