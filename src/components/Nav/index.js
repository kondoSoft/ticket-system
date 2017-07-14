import React, { Component } from 'react';
import styled from 'styled-components'
import IconButton from '../IconButton'

const ContainerNav = styled.div`
  width:10%;
  height:700px;
  display:flex;
  flex-direction:column;
  box-shadow: 1px 0px 3px #888888;
`;
/*Componentes del header del nav lateral*/
const Header = styled.div`
  width:100%;
  height:80px;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-bottom:2px dotted #009EFF;
`;

const Logo= styled.img`
  width:100%;
`;

/*Componentes del body */
const Body = styled.div`
  width:100%;
  height:500px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

class Nav extends Component {
  render() {
    return (
      <ContainerNav>
        <Header>
          <Logo src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png'/>
        </Header>
        <Body>
          <IconButton Text='Hotel' Icon='building'/>
          <IconButton Text='Transporte' Icon='car'/>
        </Body>
      </ContainerNav>
    );
  }
}

export default Nav;
