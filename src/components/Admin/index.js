import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import formHotel from '../formHotels';

const Container = styled.div`
  padding:0;
  width:100%;
  display:flex;
  flex-direction:row;
`;

const Section = styled.div`
  width:500px;
  height:200px;
  background-color:red;
`;

class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
      UI:formHotel
    }
    this.setComponent=this.setComponent.bind(this)
  }

  setComponent(item){
    console.log(item)
    this.setState({
      UI:item
    });
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Nav setComponent={this.setComponent}/>
        <Section>
          { this.state.UI()}
        </Section>
      </Container>
    );
  }
}

export default Admin;
