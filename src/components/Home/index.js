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
  background: url("http://lorempixel.com/output/city-q-c-1680-960-1.jpg")no-repeat center;
  overflow-x: scroll;
  position: fixed;
`;

class Home extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.setUI = this.setUI.bind(this)
    this.setCart = this.setCart.bind(this)
    this.SetUICart = this.SetUICart.bind(this)
    this.setHistory = this.setHistory.bind(this)
  }

  setUI(key, items){
    const state = this.state
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

  setCart(item){
    const state = this.state
    state.cart.items[item.key] = item

    this.setState(state)
  }

  SetUICart(){
    const state = this.state
    this.setState({
      UI:state.Cart
    })
  }

setHistory(){
  const state = this.state
  this.setState({
    UI:state.history.home
  })
}

  render() {
    const {UI, cart} = this.state
    return (
      <Div>
        <Header icon="shopping-cart" SetUICart={this.SetUICart} count={Object.keys(cart.items).length}/>
        <Container>
          <TrailCrumb setHistory={this.setHistory}/>
          {this.state.UI ?
            <Row>
              {Object.keys(UI).map((item,i)=><Thumbnail setCart={this.setCart} setUI={this.setUI} elements={UI[item]} key={i}/>)}
            </Row>
            : <Cart elements={Object.keys(cart.items).map((item,i)=><CartItem elements={cart.items[item]} key={i}/>)}/>
          }
        </Container>
      </Div>
    );
  }
}

export default Home;
