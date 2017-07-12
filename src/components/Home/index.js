import React, { Component } from 'react';
import Header from '../Header';
import Slider from '../Slider';
import Thumbnail from '../Thumbnail';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <Thumbnail/>
      </div>
    );
  }
}

export default Home;
