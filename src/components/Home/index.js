import React, { Component } from 'react';
import Header from '../Header';
import Slider from '../Slider';
import Thumbnail from '../Thumbnail';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <Container>
          <Thumbnail/>
        </Container>
      </div>
    );
  }
}

export default Home;
