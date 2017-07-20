import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
//import SimpleSlider from '../SimpleSlider';
import Thumbnail from '../Thumbnail';
//import Image from '../Image';
import {Row} from '../FlexBox/FlexRow';
import initialState from '../../state';
import styled from 'styled-components';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("http://lorempixel.com/output/city-q-c-1280-860-1.jpg")no-repeat center fixed !important;
`

class Home extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.setUI = this.setUI.bind(this)
  }

  setUI(key){
    const UI = this.state
    this.setState({
      UI: UI[key]
    })
  }

  render() {
    const {UI} = this.state
    return (
      <Div>
        <Header/>
        <Container>
          {/*<SimpleSlider/>*/}
          <Row>
            {Object.keys(UI).map((item)=><Thumbnail setUI={this.setUI} elements={UI[item]} key={UI[item].key}/>)}
          </Row>
          {/*<Image/>*/}
        </Container>
    </Div>
    );
  }
}

export default Home;
