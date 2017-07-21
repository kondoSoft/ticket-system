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
import Return from '../Return'

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
      <div>
        <Header/>
        <Container>
          {/*<SimpleSlider/>*/}
          <Row>
            {Object.keys(UI).map((item)=><Thumbnail setUI={this.setUI} elements={UI[item]} key={UI[item].key}/>)}
          </Row>
          {/*<Image/>*/}
        </Container>
    </div>
    );
  }
}

export default Home;
