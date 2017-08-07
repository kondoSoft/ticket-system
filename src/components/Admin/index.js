import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import FormHotels from '../formHotels';
import initialState from '../../state';
import FormTransport from '../formTransport';
import FormTicket from '../formTicket';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
    this.state=initialState
    this.setComponent = this.setComponent.bind(this);
    this.setObjectState = this.setObjectState.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
  }

  setComponent(item){
    this.setState({
      UIform:item
    });
  }

  setObjectState(object,position,key){
    if(object.father){
      var state = this.searchKey(object.father)
      state[object.father][position][key]=object
      this.setState(state)
    }
    else{
      let state = this.state
      state[position][key]=object
      this.setState(state)
    }
  }

  searchKey(key){
    if(key in this.state.hotels){
      let stateH = this.state.hotels
      return stateH
    }
    else if(key in this.state.transport){
      let stateT = this.state.transport
      return stateT
    }
    else{
      let stateTi = this.state.tickets
      return stateTi
    }
  }

  deleteObject(element,key){
    let state=this.searchKey(key)
    confirmAlert({
      title: 'Confirmacion',                              // Title dialog
      message: 'Esta seguro de eliminar: '+key,          // Message dialog
      confirmLabel: 'Aceptar',                           // Text button confirm
      cancelLabel: 'Cancelar',                             // Text button cancel
      onConfirm: () => {
                        delete state[key]
                        this.setState(state)
                      },                                 // Action after Confirm
    })
  }

  render() {
    let content;
    const {section} = this.props.match.params;
    content = <FormHotels deleteObject={this.deleteObject} setObjectState={this.setObjectState} elements={this.state.hotels} />
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
