import React from 'react';
import styled from 'styled-components'

const ContainerForm = styled.div`
  background-color:blue;
  width:100px;
  height:100px;
`;

function formHotel(){
  return(
    <ContainerForm>
      <h1>Hotel</h1>
    </ContainerForm>
  );
};


export default formHotel;
