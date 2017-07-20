import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import FormHotels from '../formHotels';
import initialState from '../../state'

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
    // this.state={
    //   UIform:formHotel,
    //   title:'',
    //   address:'',
    //   price:'',
    //   image:'',
    //   type:'',
    //   date:''
    // }
    this.setComponent=this.setComponent.bind(this)
  }

  setComponent(item){
    this.setState({
      UIform:item
    });
  }

  componentWillMount(){
    this.setComponent(<FormHotels inputRef={el =>this.inputElement=el} />)
  }

  render() {
    return (
      <Container>
        <Nav setComponent={this.setComponent}/>
        <Section>
          {this.state.UIform}
        </Section>
      </Container>
    );
  }
}

export default Admin;
