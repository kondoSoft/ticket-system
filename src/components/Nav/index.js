import React from 'react';
import styled from 'styled-components';
import IconLabel from '../IconLabel';
import Headers from '../Header';
import formHotel from '../formHotels';
import formTransport from '../formTransport';
import formTicket from '../formTicket'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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


function Nav(props)  {
  return (
    <ContainerNav>
      <Header>
        <Logo src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png'/>
      </Header>
      <Body>
        <IconLabel Text='Hotel' Icon='building' setComponent={props.setComponent} component={formHotel}/>
        <IconLabel Text='Transporte' Icon='car' setComponent={props.setComponent} component={formTransport}/>
        <IconLabel Text='Tickets' Icon='ticket' setComponent={props.setComponent} component={formTicket}/>
      </Body>
    </ContainerNav>
  );
}

export default Nav;
