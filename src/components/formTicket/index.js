import React from 'react';
import styled from 'styled-components';
import Input from '../Input/index.js';
import Selector from '../Select/index.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const ContainerForm = styled.div`
background-color:#ccc;
width:100%;
padding:20px;
border-radius:5px;
`;
const ContainerInputs = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-bottom:10px;
`;

function FormTicket(props){
  return(
    <ContainerForm>
      <h1>Ticket</h1>
      <ContainerInputs>
        <Selector/>
        <Input name="price" placeholder="Ingrese precio del ticket" id="price" text="Precio:" />
      </ContainerInputs>
      <ContainerInputs>
      <DatePicker selected={props.startDate} onChange={(e)=>props.handleChange(e,'startDate')}  placeholderText="Click to select a date" />;
      </ContainerInputs>

    </ContainerForm>
  );
};


export default FormTicket;
