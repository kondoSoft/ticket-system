import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';
import React from 'react';
import {actiona}from '../styles/items.js'
import styled from 'styled-components';
// import Table from '../TableItems/index.js'
// import TableH from '../TableHeader'
import FormItems from '../formItems'


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


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      isSubOpen: false
    };
    this.hideModal=this.hideModal.bind(this)
  }


  openModal(){
    this.setState({
      isOpen: true
    });
  };

  hideModal(){
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Container className='Contenedor'>
        <Body isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>{this.props.component.title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormItems component={this.props.component} setObjectState={this.props.setObjectState} deleteObject={this.props.deleteObject}/>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={this.hideModal}>  Cerrar</button>
          </ModalFooter>
        </Body>
        <button style = {actiona}   onClick={this.openModal.bind(this)}>Agregar  </button>
      </Container>
    );
  }
}
export default App;
