import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header';
import Slider from '../Slider';
import Thumbnail from '../Thumbnail';
import Image from '../Image';
import {Row} from '../FlexBox/FlexRow';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header/>
          <Slider/>
          <Image/>
            <Row>
              <Thumbnail
                image="http://lorempixel.com/output/nightlife-q-c-250-220-7.jpg"
                names="HOTEL Y TRANSPORTE"
              />
              <Thumbnail
                image="http://lorempixel.com/output/city-q-c-250-220-8.jpg"
                names="TRANSPORTE"
              />
            </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
