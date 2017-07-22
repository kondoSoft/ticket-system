import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import FormHotels from '../formHotels';
import initialState from '../../state'
import moment from 'moment';
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
    this.setComponent=this.setComponent.bind(this);
    this.setObjectState=this.setObjectState.bind(this)
  }

  setComponent(item){
    this.setState({
      UIform:item
    });
  }

  setObjectState(object,position){
     var newValue = Object.assign({},this.state[position],object);
     this.setState({
       [position]:newValue
     })
     console.log(newValue);
  }

  componentDidMount(){
    this.setState({
      startDate:moment()
    })
    this.setComponent(<FormHotels setObjectState={this.setObjectState}/>)
  }

  handleChange(date,donde) {
    this.setState({
      [donde]:date
    })
  }

  render() {
    return (
      <Container>
        <Nav setComponent={this.setComponent} handleChange={this.handleChange} startDate={this.state.startDate} setObjectState={this.setObjectState}/>
        <Section>
          {this.state.UIform}
        </Section>
      </Container>
    );
  }
}

export default Admin;
