import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
import Thumbnail from '../Thumbnail';
import TrailCrumb from '../TrailCrumb'
import Cart from '../Cart';
import CartItem from '../CartItem';
import {Row} from '../FlexBox/FlexRow';
import initialState from '../../state';
import styled from 'styled-components';

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
  }

  setUI(key, items){
    const state = this.state
    this.history()
    if(items){
      this.setState({
        UI: state.UI[key].items
      })
      return
    }
    this.setState({
      UI: state[key]
    })
  }

  addCart(item){
    this.totalAmount(item)
    const state = this.state
    state.cart.items[item.key] = item
    this.setState(state)
  }

  removeItemsCart(key){
    this.res(key)
    const state = this.state
    let cart = delete state.cart.items[key]
    this.setState(state)
  }

  setHistory(){
    const state = this.state
    this.setState({
      UI:state.history.home
    })
  }

  removeItemsCart(key){
    const state = this.state
    delete state.cart.items[key]

    this.setState(state)
  }

  setUICart(item){
    const state = this.state
    this.setState({
      UI:state.Cart
    })
  }

  totalAmount(item){
    let val = Number(item.price)
    let stateTotal = this.state.cart
    let total = val += stateTotal['total']
    stateTotal['total'] = total
    this.setState(stateTotal)
  }

  res(item){
    let val = Number(this.state.cart.items[item].price)
    let stateTotal = this.state.cart
    let total = stateTotal['total'] -= val
    stateTotal['total'] = total
    this.setState(stateTotal)
  }

  history(){
    const state = this.state
    state.history.home = state.UI
    this.setState(state)
  }

  render() {
    const {UI, cart} = this.state
    let cartItems = Object.keys(cart.items)

    return (
      <Div>
        <Header state={cartItems} icon="shopping-cart" setUICart={this.setUICart} count={cartItems.length}/>
        <Container>
          <TrailCrumb setHistory={this.setHistory} location='hotels'/>
          {this.state.UI ?
            <Row>
              {Object.keys(UI).map((item,i)=><Thumbnail addCart={this.addCart} setUI={this.setUI} elements={UI[item]} key={i}/>)}
            </Row>
            : <Cart
                cart={cartItems.length >= 1 ? '': <h1>Cart is empty</h1>}
                total={cart.total}
                elements={cartItems.map((item,i) => <CartItem elements={cart.items[item]} key={i} removeItemsCart={this.removeItemsCart}/>)}
              />
          }
        </Container>
      </Div>
    );
  }
}

export default Home;
