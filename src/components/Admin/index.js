import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import FormHotels from '../formHotels';
import initialState from '../../state';
import FormTransport from '../formTransport';
import FormTicket from '../formTicket';

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
    this.updateItem = this.updateItem.bind(this);
  }

  setComponent(item){
    this.setState({
      UIform:item
    });
  }

  updateItem(){

  }

  setObjectState(object,position,key){
    let state = this.state
    state[position][key]=object
    this.setState(state)
  }

  render() {
    let content;
    const {section} = this.props.match.params;
    content = <FormHotels setObjectState={this.setObjectState} elements={this.state.hotels} />
    if (section == 'ticket'){
      content = <FormTicket setObjectState={this.setObjectState} />
    } else if (section == 'transport') {
      content = <FormTransport setObjectState={this.setObjectState} />
    }
    return (
      <Container>
        <Nav setComponent={this.setComponent} setObjectState={this.setObjectState}/>
        <Section>
          {content}
        </Section>
      </Container>
    );
  }
}

export default Admin;
