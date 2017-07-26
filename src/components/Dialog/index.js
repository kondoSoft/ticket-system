import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';
import React,{Component} from 'react';
import {menuContainer,table,celda,actiona,actione,actiond}from '../styles/items.js'
import styled from 'styled-components';
import Table from '../TableItems/index.js'
import TableH from '../TableHeader'
import FormItems from '../formItems'

class App extends React.Component {
  state = {
    isOpen: false,
    isSubOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };



  render() {
    const Container =styled.div`

      .modal-backdrop {
        display:flex;
        justify-content:center;
        width: 100%;

      }
      .modal-dialog{
        display:flex;
        justify-content:center;
        width: 85%;

      }
    `;
    const Body =styled(Modal)`
      display:flex;
      justify-content:center;
       .modal-content{
         width: 100%;
         height:auto;
       }
      `;
    return (
      <div>
      <Container className='Contenedor'>
            <Body isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Registro de Items</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <FormItems/>
                <TableH />
                <Table />
                <Table />
                <Table />
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-danger' onClick={this.hideModal}>  Cerrar</button>
                <button className='btn btn-success'>Guardar Cambios</button>
              </ModalFooter>
            </Body>
      </Container>
      <button style = {actiona}   onClick={this.openModal}>Agregar  </button>
      </div>
    );
  }
}
export default App;
