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
      UI:formHotel,
      hotel:{
          title:'',
          address:'',
          price:'',
          image:'',
          type:'',
          date:''
      },
      transport:{}
    }
    this.setComponent=this.setComponent.bind(this)
    this.setData=this.setData.bind(this)
  }

  setComponent(item){
    this.setState({
      UI:item
    });
  }

  setData(){
    console.log('Entrando a la funcion');
  }

  componentWillMount(){
    this.setData()
  }

  render() {
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
