import React from 'react';
import styled from 'styled-components'

const ContainerForm = styled.div`
  background-color:blue;
  width:100px;
  height:100px;
`;

function FormTicket(){
  return(
    <ContainerForm>
      <h1>Ticket</h1>
    </ContainerForm>
  );
};


export default FormTicket;
