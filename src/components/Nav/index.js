import React from 'react';
import styled from 'styled-components';
import IconLabel from '../IconLabel';
import {Link} from 'react-router-dom';

const ContainerNav = styled.div`
  width:14%;
  height:700px;
  display:flex;
  flex-direction:column;
  box-shadow: 1px 0px 3px #888888;
  background-color: #fff;
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
  border-bottom:2px solid #009EFF;
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

const linkStyle ={
  width:'90%'
}

function Nav(props)  {
  return (
    <ContainerNav>
      <Header>
        <Logo src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png'/>
      </Header>
      <Body>
        <Link style={linkStyle} to='/admin/hotels'><IconLabel Text='Hotel' Icon='building' setComponent={props.setComponent} /></Link>
        <Link style={linkStyle} to='/admin/transport'><IconLabel Text='Transporte' Icon='car' setComponent={props.setComponent} /></Link>
        <Link style={linkStyle} to='/admin/ticket'><IconLabel Text='Tickets' Icon='ticket' setComponent={props.setComponent} /></Link>
        <Link style={linkStyle} to='/admin/sales'><IconLabel Text='Sales' Icon='history ' setComponent={props.setComponent} /></Link>
      </Body>
    </ContainerNav>
  );
}


export default Nav;
