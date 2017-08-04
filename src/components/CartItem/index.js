import React from 'react';
import { Img, P, Container, Button} from './style';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class CartItem extends React.Component {

  submit(){
    confirmAlert({
      title: 'El producto se eliminará',
      message: '¿Estás seguro de hacer esto?',
      confirmLabel: 'Aceptar',
      cancelLabel: 'Cancelar',
      onConfirm: () => this.props.removeItemsCart(this.props.elements.key),
      // onCancel: () => alert('Cancel'),
    })
  }

  render () {
    return (
      <Container>
        <Img src={this.props.elements.image}/>
        <P>Price: ${this.props.elements.price}</P>
        <P>Type: {this.props.elements.type}</P>
        <P><Button onClick={this.submit.bind(this)}>Eliminar</Button></P>
      </Container>
    );
  }
}

export default CartItem;
