import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
//import SimpleSlider from '../SimpleSlider';
import Thumbnail from '../Thumbnail';
//import Image from '../Image';
import {Row} from '../FlexBox/FlexRow';
import initialState from '../../state'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.setUI = this.setUI.bind(this)
  }

  setUI(){
    const {hotels} = this.state
    this.setState({UI:hotels})
  }

  render() {
    const {UI} = this.state
    return (
      <div>
        <Header/>
        <Container>
          {/*<SimpleSlider/>*/}
          <Row>
            {Object.keys(UI).map((item, i)=><Thumbnail setUI = {this.setUI} image={UI[item].image} names={UI[item].title} key={UI[item].key}/>)}
          </Row>
          {/*<Image/>*/}
        </Container>
    </div>
    );
  }
}

export default Home;
