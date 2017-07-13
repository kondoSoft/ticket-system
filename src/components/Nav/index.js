import React, { Component } from 'react';
import styled from 'styled-components'
import IconButton from '../IconButton'
// background-color:#0080FF;
const ContainerNav = styled.div`
  width:180px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow: 1px 0px 3px #888888;
  padding:2px
`;
/*Componentes del header del nav lateral*/
const Header = styled.div`
  width:100%;
  height:80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Logo= styled.img`
  width:100%;
`;

/*Componentes del body */
const Body = styled.div`
  width:100%;
  height:500px;
  background-color:rgba(0,128,255,0.6);
  display:flex;
  flex-direction:column;
  padding:5px;
`;

class Nav extends Component {
  render() {
    return (
      <ContainerNav>
        <Header>
          <Logo src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png'/>
        </Header>
        <Body>
          <IconButton/>
          <IconButton/>
        </Body>
      </ContainerNav>
    );
  }
}

export default Nav;
