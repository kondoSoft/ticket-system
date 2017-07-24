import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
import Thumbnail from '../Thumbnail';
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

  setCart(){
    const state = this.state.UI
    // let newItems = {}
    // state.cart.push(newItems)
    this.setState({
      cart:{items:state}

    })
    console.log(state);
  }

  render() {
    const {UI} = this.state
    return (
      <Div>
        <Header icon="shopping-cart"/>
        <Container>
          <Row>
            {Object.keys(UI).map((item,i)=><Thumbnail setCart={this.setCart} setUI={this.setUI} elements={UI[item]} key={i}/>)}
          </Row>
        </Container>
      </Div>
    );
  }
}

export default Home;
