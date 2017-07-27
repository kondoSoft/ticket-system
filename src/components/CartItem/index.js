import React from 'react';
import { Img, P, Container, Button} from './style';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class CartItem extends React.Component {

  submit = () => {
    confirmAlert({
      title: 'The room will be eliminated',
      message: 'Are you sure to do this?',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: () => this.props.removeItemsCart(this.props.elements.key),
      // onCancel: () => alert('Cancel'),
    })
  };


  render () {
    return (
      <Container>
        <Img src={this.props.elements.image}/>
        <P>Price: ${this.props.elements.price}</P>
        <P>Type: {this.props.elements.type}</P>
        <P><Button onClick={this.submit}>Remove</Button></P>
      </Container>
    );
  }
}

export default CartItem;
