import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
import SimpleSlider from '../SimpleSlider';
import Thumbnail from '../Thumbnail';
import Image from '../Image';
import {Row} from '../FlexBox/FlexRow';
import initialState from '../../state'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.setUI = this.setUI.bind(this)
  }

//  Set UI
// Obtener los datos de hoteles,
// Quitar los datos de UI
// Poner los datos de hotels, obtenidos anteriormente
//
//
//

  setUI(){
    // console.log(this.state);
    const {hotels} = this.state
    this.setState({UI:hotels})
    // console.log(hotels);
  }
  onClick(e){
    let {hotels} = this.state
    this.setState({
      hotels:e
    })
    console.log(this.state);
  }

  render() {
    const {UI} = this.state
    return (
      <Container>
        <Header/>
        <SimpleSlider/>
        <Row>
          {Object.keys(UI).map((item, i)=><Thumbnail setUI = {this.setUI} image={UI[item].image} names={UI[item].title} key={UI[item].key}/>)}
          </Row>
        <Image/>
      </Container>
    );
  }
}

export default Home;
