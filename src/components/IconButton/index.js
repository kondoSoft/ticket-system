import React from 'react';
import styled from 'styled-components';
import fontAwesome from 'react-fontawesome';

const ContainerButton = styled.div`
  width:90%;
  height:40px;
  margin-top:10px;
  border-radius:6px;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:center;
  align-items:center;
  color:#646666;

  &.iconButton:hover{
    background-color:#0080FF;
    color:white;
  }
`;

const Icon = styled(fontAwesome)`
  font-size:20px;
`;

const Span= styled.span`
  font-size:16px;
  margin-left:10px;
`;

function IconButton(props){
  return (
    <ContainerButton className='iconButton'>
      <Icon name={props.Icon}/>
      <Span>{ props.Text }</Span>
    </ContainerButton>
  )
}

export default IconButton;
