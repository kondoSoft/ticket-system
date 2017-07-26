import React from 'react';
import {Selector} from '../styles/Tikects.js'
import styled from 'styled-components';

const ContainerInputs = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-bottom:10px;
`;
const Label = {
  color:'black',
  fontSize:'16px',
  fontfamily:'Times',
}
function Select (props){

return(
  <div>
    <label style={Label} htmlFor="zone">Section</label>
    <select name="zone" id="zone" style={Selector}>
      <option value="VIP">VIP</option>
      <option value="General">General</option>
      <option value="Zona baja" >Zona baja</option>
    </select>
  </div>

);

}
export default Select;
