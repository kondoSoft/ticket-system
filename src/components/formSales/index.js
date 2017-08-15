import React,{Component} from 'react';
import Button from '../Button';
import 'react-datepicker/dist/react-datepicker.css';
import {ContainerForm} from '../styles/ContainerForms'
import {celda,celdaH} from '../styles/items'
import Table from '../tableSales'
import styled from 'styled-components';


class FormSales extends Component{
  constructor(props){
    super(props)
    this.state={
      sales:props.elements
    }
  }

  render(){
    const Tabla=styled.div`
      width:100%;
      border:1px;
      margin: 10px;
      border-radius: 10px;
      display:flex;
      flax-direction:row;
      flex-wrap:wrap;
      justify-content:space-arround;
    `;
    const sales = this.state.sales
    console.log(sales);
      return (
      <div style={ContainerForm}>
        <h1>Sales</h1>
          <Tabla>
            <div style={celdaH} >Seccion:</div>
            <div style={celdaH} >Precio:</div>
            <div style={celdaH} >Fecha:</div>
            <div style={celdaH} >Key:</div>
            <div style={celdaH} >Descripcion:</div>
          </Tabla>
        {Object.keys(sales).map((item,i)=><Table elements={sales[item]} key={i} />)}
      </div>
    );
  }
};

export default FormSales;
