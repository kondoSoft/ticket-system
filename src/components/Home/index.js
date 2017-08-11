import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
import Thumbnail from '../Thumbnail';
import TrailCrumb from '../TrailCrumb'
import Cart from '../Cart';
import CartItem from '../CartItem';
import FormPay from '../formPay'
import {Row} from '../FlexBox/FlexRow';
import initialState from '../../state';
import styled from 'styled-components';
import firebase from '../../firebase';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("http://www.planoinformativo.com/stock12/image/2015/Abril/17/ArmandoManzanero2.jpg")no-repeat center;
  overflow-x: scroll;
  position: fixed;
`;

class Home extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.setUI = this.setUI.bind(this)
    this.addCart = this.addCart.bind(this)
    this.setUICart = this.setUICart.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.removeItemsCart = this.removeItemsCart.bind(this)
    this.setItems = this.setItems.bind(this)
    this.setPayment = this.setPayment.bind(this)
    this.addSales = this.addSales.bind(this)
  }

  componentWillMount(){
      const database = firebase.database().ref();
      database.on('value', (snap) => {
        this.setState(snap.val())
      })
  }

  setUI(key, items){
    const state = this.state
    if(items){
      this.setState({
        UI: state.UI[key].items
      })
      state.history.items = state.UI
      state.history.state +=1
      return
    }
    this.history(key)
    this.setState({
      UI: state[key]
    })
    state.history.state +=1
    state.history.status=true
  }

  addCart(item){
    const state = this.state
    const stateFirebase = firebase.database().ref().child('cartTem')
    // this.deleteItemsHotels(item)
    if (!(item.key in state.cart.items)){
      state.cart.items[item.key] = item
      this.setState(state);
      stateFirebase.child('items').child(item.key).set(item)
      this.totalAmount(item)
    }
  }

  removeItemsCart(key){
    this.subtractTotalAmount(key)
    const state = this.state.cart
    delete state.items[key]
    firebase.database().ref().child('cartTem').set(state)
    this.setState(state)
  }

  setHistory(){
    const state = this.state
    this.setState({
      UI:state.history.home
    })
    state.history.state=0
    state.history.status = false
    state.history.location = ''
  }

  setUICart(){
    const state = this.state
    let dat = state.history.home['001']
     if (dat === undefined) {
       this.history()
     }
    this.setState({
      UI:state.cart
    })
    state.history.status = true
  }

  totalAmount(item){
    let price = Number(item.price)
    const state = this.state.cart
    let total = price + state['total']
    state['total'] = total
    firebase.database().ref().child('cartTem').child('total').set(total)
    this.setState(state)
  }

  subtractTotalAmount(item){
    const state = this.state.cart
    let price = Number(state.items[item].price)
    let total = state['total'] - price
    state['total'] = total
    firebase.database().ref().child('cartTem').child('total').set(total)
    this.setState(state)
  }

  history(key){
    const state = this.state
    state.history.home = state.UI
    state.history.location = key
    this.setState(state)
  }

  setItems(){
    const state = this.state
    this.setState({
      UI:state.history.items
    })
    state.history.state -=1
  }

  setPayment(){
    const state = this.state.cart
    let cartId = state.id += 1

    this.setState(state)
    firebase.database().ref().child('cartTem').child('id').set(cartId)
    this.addSales()
  }

  addSales(){
    const state = this.state
    let sales = state.cart.items
    let salesFirebase = state.cartTem.items
    this.setState({
      sales:sales
    })
    firebase.database().ref().child('sales').set(salesFirebase)
  }

  deleteItemsHotels(item){
    const state = this.state
    let arr = Object.keys(state.hotels)
    let test = state.hotels

    console.log(test);

  }

  render() {
    const {UI, cart, history} = this.state
    let cartItems = Object.keys(cart.items)
    return (
      <Div>
        <Header icon="shopping-cart" setUICart={this.setUICart} count={cartItems.length}/>
        <Container>
          <TrailCrumb cart={cart.items} history={history} setItems={this.setItems} setHistory={this.setHistory} location={history.location}/>
          {UI.items ?
           <Cart
            cart={cartItems.length >= 1 ? '' : <h1>El carrito esta vacío</h1>}
            total={cart.total}
            formpayment={cartItems.length >= 1 ? <FormPay amount={cart.total} orderId={cart.id} setPayment={this.setPayment}/> : ''}
            elements={cartItems.map((item,i) => <CartItem elements={cart.items[item]} key={i} removeItemsCart={this.removeItemsCart}/>)}
          /> :
          <Row>
            {Object.keys(UI).map((item,i) => <Thumbnail addCart={this.addCart} setUI={this.setUI} elements={UI[item]} key={i}/>)}
          </Row>
          }
        </Container>
      </Div>
    );
  }
}

export default Home;
