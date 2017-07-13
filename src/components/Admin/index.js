import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';

const Container = styled.div`
  padding:0;
  width:100%;
  height:auto;
`;


class Admin extends Component {
  render() {
    return (
      <Container>
        <Nav/>
      </Container>
    );
  }
}

export default Admin;
